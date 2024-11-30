<?php

declare(strict_types=1);

namespace App\Security;

class AccessGroup {

    public const USER_WRITE = 'user:write';
    public const USER_READ = 'user:read';
    public const USER_SIGNIN = 'user:signin';
    public const USER_SIGNUP = 'user:signup';
}
