<?php

declare(strict_types=1);

namespace App\ResetToken;

use App\Entity\ResetToken;
use App\Enum\ResetTokenType;
use App\Repository\ResetTokenRepository;
use App\ResetToken\Exception\ExpiredResetTokenException;
use App\ResetToken\Exception\InvalidResetTokenException;
use App\ResetToken\Exception\TooManyResetTokenException;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

class ResetTokenHelper
{
    private const SELECTOR_LENGTH = 20;

    private const THROTTLE_TIME = 60;
    private const LIFE_TIME = 3600;

    public function __construct(
        private readonly ResetTokenGenerator $generator,
        private readonly ResetTokenRepository $repository,
        private readonly TranslatorInterface $translator
    ) {
    }

    /**
     * @throws \Exception
     */
    public function generateResetToken(
        UserInterface $user,
        ResetTokenType $resetTokenType
    ): ResetTokenModel {
        $this->clearToken($user, $resetTokenType);
        $this->handleGarbageCollection();
        try {
            if ($availableAt = $this->hasUserHitThrottling($user)) {
                throw new TooManyResetTokenException(
                    $availableAt,
                    $this->translator->trans(
                        'token.too.many.reset',
                        domain: 'exceptions'
                    ),
                    Response::HTTP_PRECONDITION_FAILED
                );
            }

            $expiresAt = new \DateTimeImmutable(sprintf('+%d seconds', self::LIFE_TIME));

            $generatedAt = $expiresAt->getTimestamp() - self::LIFE_TIME;

            $tokenComponents = $this->generator->createToken($user->getId(), $expiresAt);

            $this->repository->createResetToken(
                $user,
                $expiresAt,
                $tokenComponents->getSelector(),
                $tokenComponents->getHashedToken(),
                $resetTokenType
            );

            return new ResetTokenModel(
                $tokenComponents->getPublicToken(),
                $expiresAt,
                $generatedAt
            );
        } catch (\Exception $e) {
            throw new NotFoundHttpException($e->getReason(), $e->getPrevious(), $e->getCode());
        }
    }

    /**
     * @throws InvalidResetTokenException
     * @throws ExpiredResetTokenException
     * @throws \Exception
     */
    public function validateTokenAndFetchUser(string $fullToken): object
    {
        $this->handleGarbageCollection();

        if (40 !== \strlen($fullToken)) {
            throw new InvalidResetTokenException();
        }

        $resetToken = $this->findResetToken($fullToken);

        if (null === $resetToken) {
            throw new InvalidResetTokenException();
        }

        if ($resetToken->isExpired()) {
            throw new ExpiredResetTokenException();
        }

        $user = $resetToken->getUser();

        $hashedVerifierToken = $this->generator->createToken(
            $user->getId(),
            $resetToken->getExpiresAt(),
            substr($fullToken, self::SELECTOR_LENGTH)
        );

        if (false === hash_equals($resetToken->getHashedToken(), $hashedVerifierToken->getHashedToken())) {
            throw new InvalidResetTokenException();
        }

        return $user;
    }

    public function clearToken(UserInterface $user, ResetTokenType $resetTokenType): void
    {
        if ($user->getId()) {
            $this->repository->clearResetToken($user, $resetTokenType);
        }
    }

    private function handleGarbageCollection(): void
    {
        $this->repository->removeExpiredResetPasswordRequests();
    }

    private function findResetToken(string $token): ?ResetToken
    {
        $selector = substr($token, 0, self::SELECTOR_LENGTH);

        return $this->repository->findOneBy(['selector' => $selector]);
    }

    /**
     * @throws \Exception
     */
    private function hasUserHitThrottling(object $user): ?\DateTimeImmutable
    {
        /** @var \DateTimeImmutable|null $lastRequestDate */
        $lastRequestDate = $this->repository->getMostRecentNonExpiredRequestDate($user);

        if (null === $lastRequestDate) {
            return null;
        }

        $availableAt = (clone $lastRequestDate)
            ->add(new \DateInterval(sprintf('PT%sS', self::THROTTLE_TIME)));

        if ($availableAt > new \DateTime('now')) {
            return $availableAt;
        }

        return null;
    }
}
