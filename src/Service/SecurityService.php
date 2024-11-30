<?php

declare(strict_types=1);

namespace App\Service;

use App\Entity\User;
use App\Manager\UserManager;
use App\Model\UserModel;
use App\Security\Roles;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

class SecurityService {

    public function __construct(
        private readonly UserPasswordHasherInterface $passwordHasher,
        private readonly TranslatorInterface $translator,
        private UserManager $userManager,
        private EntityManagerInterface $entityManager
    ) {

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

        return $this->userManager->one($user);
    }
}
