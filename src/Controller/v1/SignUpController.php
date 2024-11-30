<?php

declare(strict_types=1);

namespace App\Controller\v1;

use App\Manager\UserManager;
use App\Model\Error\ErrorResponseModel;
use App\Model\UserModel;
use App\Security\AccessGroup;
use App\Service\SecurityService;
use Nelmio\ApiDocBundle\Annotation\Model;
use OpenApi\Attributes\Post;
use OpenApi\Attributes\RequestBody;
use OpenApi\Attributes\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response as HttpResponse;
use Symfony\Component\HttpKernel\Attribute\MapRequestPayload;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Routing\Requirement\Requirement;
use Symfony\Contracts\Translation\TranslatorInterface;

class SignUpController extends AbstractController
{
    public function __construct(private SecurityService $securityService) {}

    #[Post(
        summary: 'SignUp a new user',
        requestBody: new RequestBody(
            content: [new Model(type: UserModel::class, groups: [AccessGroup::USER_SIGNUP])]
        ),
        tags: ['Auth'],
        responses: [
            new Response(
                response: HttpResponse::HTTP_CREATED,
                description: 'Successful response',
                content: [new Model(type: UserModel::class, groups: [AccessGroup::USER_READ])]
            ),
            new Response(
                response: HttpResponse::HTTP_UNPROCESSABLE_ENTITY,
                description: 'Validation error',
                content: [new Model(type: ErrorResponseModel::class)]
            )
        ]
    )]
    #[Route(path: '/signup', name: 'app_user_create', methods: [Request::METHOD_POST])]
    public function create(
        #[MapRequestPayload(
            serializationContext: ['groups' => [AccessGroup::USER_SIGNUP]],
            validationGroups: [AccessGroup::USER_SIGNUP]
    )] UserModel $userModel
    ): JsonResponse {

        return $this->json(
            data: $this->securityService->signUp($userModel),
            status: HttpResponse::HTTP_CREATED,
            context: ['groups' => [AccessGroup::USER_READ]]
        );
    }
}
