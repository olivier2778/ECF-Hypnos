<?php

namespace App\Controller\Admin;
use App\Entity\Hotel;
use App\Entity\Suite;
use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;


class SuiteCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Suite::class;
    }

  
    public function configureFields(string $pageName): iterable
    {
       return [
            //IdField::new('id'),
            TextField::new('title')->setLabel('Nom'),
            TextField::new('image'),
            TextField::new('description'),
            TextField::new('price')->setLabel('Prix'),
            TextField::new('link')->setLabel('Lien'),
            AssociationField::new('Hotel'),            
        ];
    }

   
}
