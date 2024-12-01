<?php

declare(strict_types=1);

namespace App\ResetToken\Exception;

class InvalidResetTokenException extends \Exception implements ResetTokenExceptionInterface
{
    public function getReason(): string
    {
        return 'reset.token.invalid';
    }
}
