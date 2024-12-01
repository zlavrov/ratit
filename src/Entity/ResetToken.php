<?php

declare(strict_types=1);

namespace App\Entity;


use App\Enum\ResetTokenType;
use App\Repository\ResetTokenRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ResetTokenRepository::class)]
class ResetToken
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: Types::INTEGER)]
    private ?int $id = null;

    #[ORM\ManyToOne(targetEntity: User::class)]
    private ?User $user;

    #[ORM\Column(type: Types::STRING, enumType: ResetTokenType::class)]
    private ResetTokenType $type;

    #[ORM\Column(type: Types::STRING, length: 20)]
    private string $selector;

    #[ORM\Column(type: Types::STRING, length: 100)]
    private string $hashedToken;

    #[ORM\Column(type: Types::DATETIME_IMMUTABLE)]
    private \DateTimeImmutable $requestedAt;

    #[ORM\Column(type: Types::DATETIME_IMMUTABLE)]
    private \DateTimeImmutable $expiresAt;

    public function __construct(
        User $user,
        \DateTimeImmutable $expiresAt,
        string $selector,
        string $hashedToken,
        ResetTokenType $type
    ) {
        $this->user = $user;
        $this->type = $type;
        $this->requestedAt = new \DateTimeImmutable('now');
        $this->expiresAt = $expiresAt;
        $this->selector = $selector;
        $this->hashedToken = $hashedToken;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function getType(): ResetTokenType
    {
        return $this->type;
    }

    public function getSelector(): string
    {
        return $this->selector;
    }

    public function getHashedToken(): string
    {
        return $this->hashedToken;
    }

    public function getRequestedAt(): \DateTimeImmutable
    {
        return $this->requestedAt;
    }

    public function getExpiresAt(): \DateTimeImmutable
    {
        return $this->expiresAt;
    }

    public function isExpired(): bool
    {
        return $this->expiresAt->getTimestamp() <= time();
    }
}
