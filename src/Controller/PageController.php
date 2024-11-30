<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response as HttpResponse;
use Symfony\Component\Routing\Attribute\Route;

class PageController extends AbstractController
{
    #[Route(path: '/{path<(?!api).*>}', name: 'app_home')]
    public function index(): HttpResponse
    {
        return $this->render(view: 'page/index.html.twig');
    }
}
