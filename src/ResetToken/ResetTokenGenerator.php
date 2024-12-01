<?php

declare(strict_types=1);

namespace App\ResetToken;

readonly class ResetTokenGenerator
{
    public function __construct(private string $signingKey = '') {}

    /**
     * @throws \Exception
     */
    public function createToken($userId, \DateTimeInterface $expiresAt, string $verifier = null): ResetTokenComponents
    {
        if (!$verifier) {
            $verifier = $this->getRandomAlphaNumStr();
        }
        $selector = $this->getRandomAlphaNumStr();

        $encodedData = json_encode([$verifier, $userId, $expiresAt->getTimestamp()]);

        return new ResetTokenComponents($selector,$verifier,$this->getHashedToken($encodedData));
    }

    private function getHashedToken(string $data): string
    {
        return base64_encode(hash_hmac('sha256', $data, $this->signingKey, true));
    }

    /**
     * @throws \Exception
     */
    private function getRandomAlphaNumStr(): string
    {
        $string = '';

        while (($len = \strlen($string)) < 20) {
            /** @var int<1, max> $size */
            $size = 20 - $len;

            $bytes = random_bytes($size);

            $string .= substr(str_replace(['/', '+', '='], '', base64_encode($bytes)), 0, $size);
        }

        return $string;
    }
}
