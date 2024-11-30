<?php

declare(strict_types=1);

namespace App\Manager;

use App\Entity\User;
use App\Model\ModelList\EmptyListModel;
use App\Model\ModelList\MetaModel;
use App\Model\ModelList\UserModelList;
use App\Model\UserModel;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Query\Expr\Join;
use Doctrine\ORM\QueryBuilder;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Symfony\Component\HttpFoundation\Request;

class UserManager {

    public function __construct(
        private EntityManagerInterface $entityManager,
        private UserRepository $userRepository
    ) {

    }

    public function update(UserModel $userModel, User $user): UserModel {
     
        $user->setFirstName($userModel->firstName);
        $user->setLastName($userModel->lastName);

        $this->entityManager->persist($user);
        $this->entityManager->flush();

        return $this->one($user);
    }

    public function one(User $user): UserModel
    {    
        $userModel = new UserModel();
        $userModel->id = $user->getId();
        $userModel->email = $user->getEmail();
        $userModel->roles = $user->getRoles();
        $userModel->firstName = $user->getFirstName();
        $userModel->lastName = $user->getLastName();
        $userModel->active = $user->isActive();
        $userModel->createdAt = $user->getCreatedAt();
        $userModel->updatedAt = $user->getUpdatedAt();

        return $userModel;
    }

    public function list(Request $request): UserModelList
    {
        $queryBuilder = $this->getQueryBuilderWithFilter($request);

        $queryBuilder->orderBy('u.createdAt', 'DESC');

        /** @var Join[] $joins */
        $joins = $queryBuilder->getDQLPart('join');
        $paginator = new Paginator($queryBuilder, !empty($joins));

        $userModelList = new UserModelList();
        $metaModel = new MetaModel();
        $metaModel->totalCount = count($paginator);
        $userModelList->meta = $metaModel;

        $limit = (int) $request->get('itemsPerPage', 1);
        $page = (int) $request->get('page', 1);

        $paginator->getQuery()->setFirstResult(($page - 1) * $limit)->setMaxResults($limit);

        $arrayItems = iterator_to_array($paginator->getIterator());

        foreach($arrayItems as $user) {

            $userModelList->data[] = $this->one($user);
        }

        return $userModelList;
    }

    public function delete(User $user): void
    {    
        $this->entityManager->remove($user);
        $this->entityManager->flush();
    }

    private function getQueryBuilderWithFilter(Request $request): QueryBuilder {

        $queryBuilder = $this->userRepository->createQueryBuilder('u');

        if ($search = $request->get('search')) {
            $orStatements = [];
            foreach(['firstName', 'lastName'] as $prop) {
                $orStatements[] = $queryBuilder->expr()->like(
                    sprintf('u.%s', $prop),
                    $queryBuilder->expr()->literal('%' . $search . '%')
                );
            }
            $queryBuilder->andWhere($queryBuilder->expr()->orX(...$orStatements));
        }

        return $queryBuilder;
    }
}
