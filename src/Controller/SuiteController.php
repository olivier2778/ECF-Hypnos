<?php

namespace App\Controller;
use App\Entity\Suite;
use App\Repository\SuiteRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/suite')]
class SuiteController extends AbstractController
{
    #[Route('/', name: 'suite_index', methods: ['GET'])]
    public function index(SuiteRepository $suiteRepository): Response
    {
        return $this->render('suite/index.html.twig', [
            'suites' => $suiteRepository->findAll(),
        ]);
    }   

    #[Route('/{id}', name: 'suite_show', methods: ['GET'])]
    public function show(Suite $suite): Response
    {
        return $this->render('suite/show.html.twig', [
            'suite' => $suite,
        ]);
    }  
}
