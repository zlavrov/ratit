<?php

declare(strict_types=1);

namespace App\Security;

use App\Entity\User;
use App\Enum\ResetTokenType;
use App\ResetToken\ResetTokenHelper;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Exception\CustomUserMessageAccountStatusException;
use Symfony\Component\Security\Core\User\UserCheckerInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

readonly class UserChecker implements UserCheckerInterface
{

    public function __construct(
        private TranslatorInterface $translator,
        private ResetTokenHelper $resetTokenHelper,
    ){
    }

    public function checkPreAuth(UserInterface $user): void
    {
        /** @var ?User $user */
        if (!$user->isActive()) {
            throw new CustomUserMessageAccountStatusException(
                $this->translator->trans('user.account.closed', domain: 'exceptions'),
                [],
                Response::HTTP_NOT_ACCEPTABLE
            );
        }
        if (!$user->isEmailVerified()) {
            throw new CustomUserMessageAccountStatusException(
                $this->translator->trans('user.email.not.verified', domain: 'exceptions'),
                [],
                Response::HTTP_CONFLICT
            );
        }
    }

    public function checkPostAuth(UserInterface $user): void
    {

    }
}
