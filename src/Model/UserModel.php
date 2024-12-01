<?php

declare(strict_types=1);

namespace App\Model;

use App\Entity\User;
use App\Security\AccessGroup;
use DateTimeImmutable;
use OpenApi\Attributes\Items;
use OpenApi\Attributes\Property;
use Symfony\Component\Serializer\Attribute\Groups;
use Symfony\Component\Serializer\Attribute\Ignore;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\NotNull;

class UserModel {

    #[Groups(groups: [
        AccessGroup::USER_READ
    ])]
    public ?int $id = null;

    #[Groups(groups: [
        AccessGroup::USER_READ,
        AccessGroup::USER_SIGNUP
    ])]
    #[Email(groups: [AccessGroup::USER_SIGNUP])]
    #[NotBlank(groups: [AccessGroup::USER_SIGNUP])]
    #[NotNull(groups: [AccessGroup::USER_SIGNUP])]
    #[Property(example: 'apple@gamil.com')]
    public ?string $email = null;

    #[Groups(groups: [
        AccessGroup::USER_READ
    ])]
    #[Property(
        type: 'array',
        items: new Items(type: 'string', example: 'ROLE_USER')
    )]
    public array $roles = [];

    #[Groups(groups: [
        AccessGroup::USER_SIGNUP
    ])]
    #[NotBlank(groups: [AccessGroup::USER_SIGNUP])]
    #[NotNull(groups: [AccessGroup::USER_SIGNUP])]
    #[Property(example: 'apple36')]
    public ?string $password = null;

    #[Groups(groups: [
        AccessGroup::USER_READ,
        AccessGroup::USER_SIGNUP,
        AccessGroup::USER_WRITE
    ])]
    #[NotBlank(groups: [AccessGroup::USER_SIGNUP])]
    #[NotNull(groups: [AccessGroup::USER_SIGNUP])]
    #[Property(example: 'First Name')]
    public ?string $firstName = null;

    #[Groups(groups: [
        AccessGroup::USER_READ,
        AccessGroup::USER_SIGNUP,
        AccessGroup::USER_WRITE
    ])]
    #[NotBlank(groups: [AccessGroup::USER_SIGNUP])]
    #[NotNull(groups: [AccessGroup::USER_SIGNUP])]
    #[Property(example: 'Last Name')]
    public ?string $lastName = null;

    #[Groups(groups: [
        AccessGroup::USER_READ
    ])]
    public bool $active;

    #[Groups(groups: [
        AccessGroup::USER_READ
    ])]
    #[Property(example: '2000-10-25T00:00:00.000Z')]
    public DateTimeImmutable $createdAt;

    #[Groups(groups: [
        AccessGroup::USER_READ
    ])]
    #[Property(example: '2000-10-25T00:00:00.000Z')]
    public ?DateTimeImmutable $updatedAt = null;

    #[Groups([
        AccessGroup::USER_READ,
    ])]
    #[Property(example: '2000-10-25T00:00:00.000Z')]
    public ?DateTimeImmutable $emailVerifiedAt;

    #[Groups([
        AccessGroup::USER_READ,
    ])]
    public bool $emailVerified;
}
