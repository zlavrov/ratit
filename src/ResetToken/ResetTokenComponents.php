<?php

declare(strict_types=1);

namespace App\ResetToken;

readonly class ResetTokenComponents
{
    public function __construct(private string $selector, private string $verifier, private string $hashedToken) {}

    public function getSelector(): string
    {
        return $this->selector;
    }

    public function getHashedToken(): string
    {
        return $this->hashedToken;
    }

    public function getPublicToken(): string
    {
        return $this->selector.$this->verifier;
    }
}
