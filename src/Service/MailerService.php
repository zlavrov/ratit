<?php

declare(strict_types=1);

namespace App\Service;

use App\Entity\User;
use App\ResetToken\ResetTokenModel;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Contracts\Translation\TranslatorInterface;

class MailerService
{
    public function __construct(
        private MailerInterface $mailer,
        private ParameterBagInterface $params,
        private TranslatorInterface $translator
    ) {

    }

    public function sendMail(string $to, $subject, $template, $context): void
    {
        try {
            $email = (new TemplatedEmail())

                ->to($to)
                ->subject($subject)
                ->htmlTemplate($template)
                ->context($context);

            $this->mailer->send($email);
        } catch (TransportExceptionInterface $e) {
            throw new NotFoundHttpException($e->getMessage());
        }
    }

    public function sendVerifyEmail(User $user, ResetTokenModel $resetToken): void
    {
        // $locale = $user->getSettings()->getLanguage()->getCode();
        // $this->translator->setLocale($locale);
        // $title = $this->translator->trans('verify.email.title', domain: 'mail', locale: $locale);
        $context = [
            'url' => $this->params->get('current_host') . 'signup_verify_email?token='.$resetToken->getToken()
                .'&email='.urlencode($user->getEmail()).'&expiredAt='.$resetToken->getExpiresAt()->getTimestamp()
                .'&lang=en',
            'userName' => $user->getFirstName(),
            'title' => 'Verify Email Title',
        ];

        $this->sendMail(
            $user->getEmail(),
            'Verify Enail Title',
            'mails/signup.html.twig',
            $context
        );
    }

    public function sendChangeEmail(User $user, ResetTokenModel $resetToken): void
    {
        // $locale = $user->getSettings()->getLanguage()->getCode();
        // $this->translator->setLocale($locale);
        // $title = $this->translator->trans('change.email.title', domain: 'mail', locale: $locale);
        $url = $this->params->get('current_host') . 'signup/verify-email?token='.$resetToken->getToken()
            .'&email='.urlencode($user->getEmail()).'&expiredAt='.$resetToken->getExpiresAt()->getTimestamp()
            .'&change=true'.'&lang=en';
        $context = [
            'url' => $url,
            'userName' => $user->getFirstName(),
            'title' => 'Change Email Title',
        ];

        $this->sendMail(
            $user->getEmail(),
            'Change Email Title',
            'mails/change_email.html.twig',
            $context
        );
    }

    public function sendPasswordReset(User $user, ResetTokenModel $resetToken): void
    {
        // $locale = $user->getSettings()->getLanguage()->getCode();
        // $this->translator->setLocale($locale);
        // $title = $this->translator->trans('reset.password.title', domain: 'mail', locale: $locale);
        $context = [
            'userName' => $user->getFirstName(),
            'url' => $this->params->get('current_host') . '/signin/verify-password?token='.$resetToken->getToken()
                .'&expiredAt='.$resetToken->getExpiresAt()->getTimestamp().'&lang=en',
            'title' => 'Reset Password Title',
        ];

        $this->sendMail(
            $user->getEmail(),
            'Reset Password Title',
            'mails/reset_password.html.twig',
            $context
        );
    }

    public function sendGreetings(User $user): void
    {
        // $locale = $user->getSettings()->getLanguage()->getCode();
        // $this->translator->setLocale($locale);
        // $title = $this->translator->trans('greetings.title', domain: 'mail', locale: $locale);
        $context = [
            'userName' => $user->getFirstName(),
            'title' => 'Greetings Title',
        ];

        $this->sendMail(
            $user->getEmail(),
            'Greetings Title',
            'mails/greetings.html.twig',
            $context
        );
    }

    public function sendUnActiveUser(User $user, ResetTokenModel $resetToken): void
    {
        // $locale = $user->getSettings()->getLanguage()->getCode();
        // $this->translator->setLocale($locale);
        // $title = $this->translator->trans('verify.phone.title', domain: 'mail', locale: $locale);
        $url = $this->params->get('current_host') . 'signup/send-sms?token='.$resetToken->getToken().
            '&expiredAt='.$resetToken->getExpiresAt()->getTimestamp().'&lang=en';
        $context = [
            'url' => $url,
            'userName' => $user->getFirstName(),
            'title' => 'Verrify Phone Title',
        ];

        $this->sendMail(
            $user->getEmail(),
            'Verrify Phone Title',
            'mails/verify_phone.html.twig',
            $context
        );
    }
}
