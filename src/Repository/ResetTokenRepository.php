<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\ResetToken;
use App\Entity\User;
use App\Enum\ResetTokenType;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Security\Core\User\UserInterface;
use Doctrine\ORM\EntityManagerInterface;

class ResetTokenRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry, private EntityManagerInterface $entityManager)
    {
        parent::__construct($registry, ResetToken::class);
    }

    public function removeResetToken(ResetToken $resetToken): void
    {
        $qb = $this->createQueryBuilder('t');

        $qb->delete()
            ->where($qb->expr()->eq('t.id', ':id'))
            ->setParameter('id', $resetToken->getId())
            ->getQuery()
            ->execute();
    }

    public function removeExpiredResetPasswordRequests(): int
    {
        $time = new \DateTimeImmutable('-1 week');
        $query = $this->createQueryBuilder('t')
            ->delete()
            ->where('t.expiresAt <= :time')
            ->setParameter('time', $time)
            ->getQuery();

        return $query->execute();
    }

    /**
     * @throws NonUniqueResultException
     */
    public function getMostRecentNonExpiredRequestDate(object $user): ?\DateTimeInterface
    {
        // Normally there is only 1 max request per use, but written to be flexible
        $resetPasswordRequest = $this->createQueryBuilder('t')
            ->where('t.user = :user')
            ->setParameter('user', $user)
            ->orderBy('t.requestedAt', 'DESC')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneorNullResult();

        if ($resetPasswordRequest && !$resetPasswordRequest->isExpired()) {

            return $resetPasswordRequest->getRequestedAt();
        }

        return null;
    }

    public function createResetToken(User|UserInterface $user, \DateTimeImmutable $expiresAt, string $selector, string $hashedToken, ResetTokenType $type): ResetToken {

        $resetToken = new ResetToken($user, $expiresAt, $selector, $hashedToken, $type);
        $this->entityManager->persist($resetToken);
        $this->entityManager->flush();

        return $resetToken;
    }

    public function clearResetToken(UserInterface $user, ResetTokenType $resetTokenType): void
    {
        $qb = $this->createQueryBuilder('t');

        $qb->delete()
            ->andWhere($qb->expr()->eq('t.user', ':user'))
            ->andWhere($qb->expr()->eq('t.type', ':type'))
            ->setParameter('user', $user)
            ->setParameter('type', $resetTokenType->value)
            ->getQuery()
            ->execute();
    }
}
