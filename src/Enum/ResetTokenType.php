<?php

declare(strict_types=1);

namespace App\Enum;

enum ResetTokenType: string
{
    case CONFIRM_EMAIL = 'confirm_email';
    case FORGOT_PASSWORD = 'forgot_password';
    case VERIFIED_PHONE = 'verified_phone';
    case REFERRAL_USER = 'referral_user';
}
