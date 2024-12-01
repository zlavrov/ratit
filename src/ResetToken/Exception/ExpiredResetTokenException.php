<?php

declare(strict_types=1);

namespace App\ResetToken\Exception;

class ExpiredResetTokenException extends \Exception implements ResetTokenExceptionInterface
{
    public function getReason(): string
    {
        return 'reset.token.expired';
    }
}
