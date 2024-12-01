<?php

declare(strict_types=1);

namespace App\Model;

use OpenApi\Attributes\Property;

class VerifyModel
{
    #[Property(example: 'eyJ0e.....MampjZlOjc')]
    public string $token;

    #[Property(example: 1698408570)]
    public int $expiredAt;
}
