<?php

namespace App\Controller\Admin;

use App\Entity\Hotel;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;

class HotelCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Hotel::class;
    }
    
    public function configureFields(string $pageName): iterable
    {
        return [            
            TextField::new('name')->setLabel('Nom'),
            TextField::new('address')->setLabel('Adresse'),
            TextField::new('city')->setLabel('Ville'),
            TextField::new('description')->setLabel('Description'),
            TextField::new('link')->setLabel('Lien'),
            AssociationField::new('Company')->setLabel('Nom du Groupe'),            
        ];
    }    
}
