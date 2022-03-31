<?php

namespace App\Controller\Admin;

use App\Entity\Reservation;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;

class ReservationCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Reservation::class;
    }

    public function configureFields(string $pageName): iterable
    {
       return [            
            DateField::new('checkIn')->setLabel('Date d\'Arrivée'),
            DateField::new('checkOut')->setLabel('Date de Départ'),
            DateTimeField::new('createdAt')->setLabel('Date de Creation'),             
            AssociationField::new('Suite')->setLabel('Suite'),      
            AssociationField::new('User')->setLabel('Nom'),             
        ];
    }
}
