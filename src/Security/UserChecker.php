<?php

declare(strict_types=1);

namespace App\Security;

use App\Entity\User;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Exception\CustomUserMessageAccountStatusException;
use Symfony\Component\Security\Core\User\UserCheckerInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

readonly class UserChecker implements UserCheckerInterface
{

    public function __construct(
        private TranslatorInterface $translator
    ){
    }

    public function checkPreAuth(UserInterface $user): void
    {

    }

    public function checkPostAuth(UserInterface $user): void
    {

    }
}
