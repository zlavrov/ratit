<?php

declare(strict_types=1);

namespace App\Controller\v1;

use App\Entity\User;
use App\Manager\UserManager;
use App\Model\ModelList\UserModelList;
use App\Model\UserModel;
use App\Security\AccessGroup;
use App\Service\SecurityService;
use Doctrine\DBAL\Types\Types;
use Nelmio\ApiDocBundle\Annotation\Model;
use OpenApi\Attributes\Delete;
use OpenApi\Attributes\Get;
use OpenApi\Attributes\Parameter;
use OpenApi\Attributes\Patch;
use OpenApi\Attributes\Post;
use OpenApi\Attributes\RequestBody;
use OpenApi\Attributes\Response;
use OpenApi\Attributes\Schema;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response as HttpResponse;
use Symfony\Component\HttpKernel\Attribute\MapRequestPayload;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Routing\Requirement\Requirement;
use Symfony\Component\Security\Http\Attribute\CurrentUser;
use Symfony\Contracts\Translation\TranslatorInterface;

#[Route(path: '/users')]
class UserController extends AbstractController
{
    public function __construct(
        private UserManager $userManager,
        private SecurityService $securityService,
    ) {

    }

    #[Patch(
        summary: 'Update user by id',
        requestBody: new RequestBody(
            content: [new Model(type: UserModel::class, groups: [AccessGroup::USER_WRITE])]
        ),
        tags: ['User'],
        responses: [
            new Response(
                response: HttpResponse::HTTP_CREATED,
                description: 'Successful response',
                content: [new Model(type: UserModel::class, groups: [AccessGroup::USER_READ])]
            )
        ]
    )]
    #[Route(path: '/{id}', name: 'app_user_update_by_id', requirements: ['id' => Requirement::DIGITS], methods: [Request::METHOD_PATCH])]
    public function update(
        #[MapRequestPayload(
            serializationContext: ['groups' => [AccessGroup::USER_WRITE]],
            validationGroups: [AccessGroup::USER_WRITE]
        )]
        UserModel $userModel,
        User $user
    ): JsonResponse {

        return $this->json(
            data: $this->userManager->update($userModel, $user),
            status: HttpResponse::HTTP_OK,
            context: ['groups' => AccessGroup::USER_READ]
        );
    }

    #[Patch(
        summary: 'Update user me',
        requestBody: new RequestBody(
            content: [new Model(type: UserModel::class, groups: [AccessGroup::USER_WRITE])]
        ),
        tags: ['User'],
        responses: [
            new Response(
                response: HttpResponse::HTTP_CREATED,
                description: 'Successful response',
                content: [new Model(type: UserModel::class, groups: [AccessGroup::USER_READ])]
            )
        ]
    )]
    #[Route(path: '/me', name: 'app_user_update_me', methods: [Request::METHOD_PATCH])]
    public function updateMe(
        #[MapRequestPayload(
            serializationContext: ['groups' => [AccessGroup::USER_WRITE]],
            validationGroups: [AccessGroup::USER_WRITE]
        )]
        UserModel $userModel,
        #[CurrentUser] User $user
    ): JsonResponse
    {
        return $this->json(
            data: $this->userManager->update($userModel, $user),
            status: HttpResponse::HTTP_OK,
            context: ['groups' => AccessGroup::USER_READ]
        );
    }

    #[Get(
        summary: 'Get user by id',
        tags: ['User'],
        responses: [
            new Response(
                response: HttpResponse::HTTP_OK,
                description: 'Successful response',
                content: [new Model(type: UserModel::class, groups: [AccessGroup::USER_READ])]
            ),
        ]
    )]
    #[Route(path: '/{id}', name: 'app_user_one_by_id', requirements: ['id' => Requirement::DIGITS], methods: [Request::METHOD_GET])]
    public function one(User $user): JsonResponse
    {
        return $this->json(
            data: $this->userManager->one($user),
            status: HttpResponse::HTTP_OK,
            context: ['groups' => AccessGroup::USER_READ]
        );
    }

    #[Get(
        summary: 'Get user me',
        tags: ['User'],
        responses: [
            new Response(
                response: HttpResponse::HTTP_OK,
                description: 'Successful response',
                content: [new Model(type: UserModel::class, groups: [AccessGroup::USER_READ])]
            ),
        ]
    )]
    #[Route(path: '/me', name: 'app_user_one_me', methods: [Request::METHOD_GET])]
    public function oneMe(#[CurrentUser] User $user): JsonResponse
    {
        return $this->json(
            data: $this->userManager->one($user),
            status: HttpResponse::HTTP_OK,
            context: ['groups' => AccessGroup::USER_READ]
        );
    }

    #[Get(
        summary: 'Get list of users',
        tags: ['User'],
        parameters: [
            new Parameter(
                name: 'search',
                description: 'Filter by fields \'First Name\' and \'Last Name\' and \'Email\'',
                in: 'query'
            ),
            new Parameter(
                name: 'page',
                description: 'The collection page number',
                in: 'query',
                schema: new Schema(type: Types::INTEGER, default: 1)
            ),
            new Parameter(
                name: 'itemsPerPage',
                description: 'The number of items per page',
                in: 'query',
                schema: new Schema(type: Types::INTEGER, default: 12)
            ),
        ],
        responses: [
            new Response(
                response: HttpResponse::HTTP_OK,
                description: 'Successful response',
                content: [new Model(type: UserModelList::class, groups: [AccessGroup::USER_READ])]
            ),
        ]
    )]
    #[Route(path: '', name: 'app_user_list_all', methods: [Request::METHOD_GET])]
    public function list(RequestStack $requestStack): JsonResponse
    {
        return $this->json(
            data: $this->userManager->list($requestStack->getCurrentRequest()),
            status: HttpResponse::HTTP_OK,
            context: ['groups' => AccessGroup::USER_READ]
        );
    }

    #[Delete(
        summary: 'Delete user by id',
        tags: ['User'],
        responses: [
            new Response(
                response: HttpResponse::HTTP_NO_CONTENT,
                description: 'Successful response',
            ),
        ]
    )]
    #[Route(path: '/{id}', name: 'app_user_delete_by_id', requirements: ['id' => Requirement::DIGITS], methods: [Request::METHOD_DELETE])]
    public function delete(User $user): JsonResponse
    {
        $this->userManager->delete($user);
        return $this->json(
            data: [],
            status: HttpResponse::HTTP_NO_CONTENT,
        );
    }
}
