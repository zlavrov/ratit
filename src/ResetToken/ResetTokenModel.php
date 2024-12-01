<?php

declare(strict_types=1);

namespace App\ResetToken;

class ResetTokenModel
{
    public function __construct(
        private readonly string $token,
        private readonly \DateTimeImmutable $expiresAt,
        private readonly int $generatedAt,
        private int $transInterval = 0,
    ) {
    }

    public function getToken(): string
    {
        return $this->token;
    }

    public function getExpiresAt(): \DateTimeImmutable
    {
        return $this->expiresAt;
    }

    public function getGeneratedAt(): int
    {
        return $this->generatedAt;
    }

    public function getExpirationMessageKey(): string
    {
        $interval = $this->getExpiresAtIntervalInstance();

        switch ($interval) {
            case $interval->y > 0:
                $this->transInterval = $interval->y;

                return '%count% year|%count% years';
            case $interval->m > 0:
                $this->transInterval = $interval->m;

                return '%count% month|%count% months';
            case $interval->d > 0:
                $this->transInterval = $interval->d;

                return '%count% day|%count% days';
            case $interval->h > 0:
                $this->transInterval = $interval->h;

                return '%count% hour|%count% hours';
            default:
                $this->transInterval = $interval->i;

                return '%count% minute|%count% minutes';
        }
    }

    /**
     * @throws \LogicException
     */
    public function getExpirationMessageData(): array
    {
        $this->getExpirationMessageKey();

        return ['%count%' => $this->transInterval];
    }

    public function getExpiresAtIntervalInstance(): \DateInterval
    {
        if (null === $this->generatedAt) {
            throw new \LogicException(
                sprintf('%s initialized without setting the $generatedAt timestamp.', self::class)
            );
        }

        $createdAtTime = \DateTimeImmutable::createFromFormat('U', (string) $this->generatedAt);

        return $this->expiresAt->diff($createdAtTime);
    }
}
