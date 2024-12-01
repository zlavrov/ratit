<?php

declare(strict_types=1);

namespace App\Service;

use App\Model\VerifyModel;
use App\Entity\User;
use App\Manager\UserManager;
use App\Model\UserModel;
use App\Security\Roles;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Contracts\Translation\TranslatorInterface;
use App\ResetToken\ResetTokenHelper;
use App\Enum\ResetTokenType;
use App\ResetToken\Exception\ResetTokenExceptionInterface;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\HttpFoundation\Response as HttpResponse;

class SecurityService {

    public function __construct(
        private readonly UserPasswordHasherInterface $passwordHasher,
        private readonly TranslatorInterface $translator,
        private UserManager $userManager,
        private EntityManagerInterface $entityManager,
        private ResetTokenHelper $resetTokenHelper,
        private MailerService $mailerService,
    ) {

    }

    public function test(User $user) {

        $resetToken = $this->resetTokenHelper->generateResetToken($user, ResetTokenType::CONFIRM_EMAIL);
        $this->mailerService->sendVerifyEmail($user, $resetToken);

        return $this->userManager->one($user);
    }

    public function signUp(UserModel $userModel): UserModel {

        $user = new User();
        $user->setEmail($userModel->email);
        $user->setPassword($this->passwordHasher->hashPassword($user, $userModel->password));
        $user->setFirstName($userModel->firstName);
        $user->setLastName($userModel->lastName);
        $user->setRoles([Roles::ROLE_USER]);

        $this->entityManager->persist($user);
        $this->entityManager->flush();

        $resetToken = $this->resetTokenHelper->generateResetToken($user, ResetTokenType::CONFIRM_EMAIL);
        $this->mailerService->sendVerifyEmail($user, $resetToken);

        return $this->userManager->one($user);
    }

    /**
     * @throws \Exception
     */
    public function handleEmailConfirmation(string $token): UserModel
    {
        $user = $this->validateResetToken($token);
        $user->setEmailVerified(true);
        $user->setEmailVerifiedAt(new \DateTimeImmutable());
        $this->entityManager->persist($user);
        $this->entityManager->flush();
        $this->resetTokenHelper->clearToken($user, ResetTokenType::CONFIRM_EMAIL);

        // $resetToken = $this->resetTokenHelper->generateResetToken($user, ResetTokenType::VERIFIED_PHONE);

        // $verifyDTO = new VerifyModel();
        // $verifyDTO->token = $resetToken->getToken();
        // $verifyDTO->expiredAt = $resetToken->getExpiresAt()->getTimestamp();

        // return $verifyDTO;

        return $this->userManager->one($user);
    }

    public function validateResetToken(string $token): User
    {
        try {
            /** @var User $user */
            $user = $this->resetTokenHelper->validateTokenAndFetchUser($token);
        } catch (ResetTokenExceptionInterface $e) {
            throw new NotFoundHttpException(
                $this->translator->trans($e->getReason(), domain: 'exceptions'),
                $e->getPrevious(),
                HttpResponse::HTTP_BAD_REQUEST
            );
        } catch (\Exception) {
            throw new \LogicException(
                $this->translator->trans('user.not.found', domain: 'exceptions'),
                HttpResponse::HTTP_CONFLICT
            );
        }

        return $user;
    }
}
