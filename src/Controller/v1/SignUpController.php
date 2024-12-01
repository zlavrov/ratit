<?php

declare(strict_types=1);

namespace App\Controller\v1;

use App\Model\VerifyModel;
use App\Entity\User;
use App\Manager\UserManager;
use App\Model\Error\ErrorResponseModel;
use App\Model\UserModel;
use App\Security\AccessGroup;
use App\Service\SecurityService;
use Nelmio\ApiDocBundle\Annotation\Model;
use OpenApi\Attributes\Post;
use OpenApi\Attributes\Get;
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
use Gesdinet\JWTRefreshTokenBundle\Model\RefreshTokenManagerInterface;
use Symfony\Component\Security\Http\Attribute\CurrentUser;

class SignUpController extends AbstractController
{
    public function __construct(private SecurityService $securityService) {}


    // #[Route('/logout', name: 'api_logout', methods: ['POST'])]
    // public function logout(Request $request, RefreshTokenManagerInterface $refreshTokenManager): JsonResponse
    // {
    //     $refreshToken = $request->get('refresh_token');
    //     $storedToken = $refreshTokenManager->get($refreshToken);
    //     $refreshTokenManager->delete($storedToken);


    //     if (!$refreshToken) {
    //         return new JsonResponse(['error' => 'Refresh token not provided'], 400);
    //     }

    //     // Знаходимо refresh-токен у базі даних
    //     $storedToken = $refreshTokenManager->get($refreshToken);

    //     if (!$storedToken) {
    //         return new JsonResponse(['error' => 'Invalid refresh token'], 400);
    //     }

    //     // Видаляємо refresh-токен
    //     $refreshTokenManager->delete($storedToken);

    //     return new JsonResponse(['success' => true, 'message' => 'Token invalidated']);
    // }

    #[Get(
        summary: 'Verify email token',
        tags: ['Auth'],
        responses: [
            new Response(
                response: HttpResponse::HTTP_OK,
                description: 'Successful response',
                content: [new Model(type: VerifyModel::class)],
            ),
            new Response(
                response: HttpResponse::HTTP_NOT_FOUND,
                description: 'Not Found',
                content: [new Model(type: ErrorResponseModel::class)]
            ),
        ]
    )]
    #[Route(path: '/signup_verify_email/{token}', name: 'app_verify_email', methods: [Request::METHOD_GET])]
    public function verifyUserEmail(string $token): JsonResponse
    {
        return $this->json(data: $this->securityService->handleEmailConfirmation($token));
    }

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
    #[Route(path: '/test/{id}', name: 'app_user_test', requirements: ['id' => Requirement::DIGITS], methods: [Request::METHOD_GET])]
    public function signuptest(User $user): JsonResponse {

        
        return $this->json(
            data: $this->securityService->test($user),
            status: HttpResponse::HTTP_CREATED,
            context: ['groups' => [AccessGroup::USER_READ]]
        );
    }
}
