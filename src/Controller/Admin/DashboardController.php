<?php

namespace App\Controller\Admin;
use App\Entity\Company;
use App\Entity\Hotel;
use App\Entity\Suite;
use App\Entity\Reservation;
use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractDashboardController
{
    #[Route('/manager', name: 'manager')]
    public function index(): Response
    {        
        return $this->render('admin/dashboard.html.twig');            
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Hypnos Administration');
    }

    public function configureMenuItems(): iterable
    {             
        yield MenuItem::linkToCrud('Hotels', 'fas fa-hotel', Hotel::class)->setPermission('ROLE_ADMIN');   
        yield MenuItem::linkToCrud('Suites', 'fas fa-bed', Suite::class);        
        yield MenuItem::linkToCrud('Reservations', 'far fa-calendar', Reservation::class);
        yield MenuItem::linkToCrud('Utilisateurs', 'fas fa-user', User::class)->setPermission('ROLE_ADMIN'); 
        yield MenuItem::linkToCrud('Société', 'far fa-building', Company::class)->setPermission('ROLE_ADMIN');   
        yield MenuItem::linktoRoute('Retour à l\'Accueil', 'fas fa-home', 'hotel_index');
    }
}
