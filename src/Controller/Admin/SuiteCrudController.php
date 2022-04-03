<?php

namespace App\Controller\Admin;
use App\Entity\Suite;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
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
            AssociationField::new('Hotel'),  
            TextField::new('title')->setLabel('Nom de la Suite'), 
            Field::new('imageFile')->setFormType(VichImageType::class)->onlyOnDetail(),          
            ImageField::new('image')
                          ->setBasePath('assets/images/suite')
                          ->setUploadDir('public/assets/images/suite/'),
            TextField::new('description')->setLabel('Description'),
            TextField::new('price')->setLabel('Prix'),
            TextField::new('link')->setLabel('Lien'),
                      
        ];
    }   
}
