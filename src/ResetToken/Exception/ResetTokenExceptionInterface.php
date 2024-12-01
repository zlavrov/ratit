<?php

declare(strict_types=1);

namespace App\ResetToken\Exception;

interface ResetTokenExceptionInterface extends \Throwable
{
    public const MESSAGE_PROBLEM_VALIDATE = 'problem.validating.password';
    public const MESSAGE_PROBLEM_HANDLE = 'problem.handling.password';

    public function getReason(): string;
}
