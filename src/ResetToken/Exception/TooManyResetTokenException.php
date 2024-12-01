<?php

declare(strict_types=1);

namespace App\ResetToken\Exception;

class TooManyResetTokenException extends \Exception implements ResetTokenExceptionInterface
{
    public function __construct(private readonly \DateTimeImmutable $availableAt, string $message = '', int $code = 0) {

        parent::__construct($message, $code);
    }

    public function getAvailableAt(): \DateTimeInterface
    {
        return $this->availableAt;
    }

    public function getRetryAfter(): int
    {
        return $this->getAvailableAt()->getTimestamp() - (new \DateTime('now'))->getTimestamp();
    }

    public function getReason(): string
    {
        return 'already.reset.password';
    }
}
