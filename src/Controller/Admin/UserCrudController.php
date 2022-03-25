<?php

namespace App\Controller\Admin;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Orm\EntityRepository;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Test\FormBuilderInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Validator\Constraints\NotBlank;


/**
 * @method User getUser
 */
class UserCrudController extends AbstractCrudController
{
    public function __construct(
        private EntityRepository $entityRepo,
        private UserPasswordHasherInterface $passwordHasher
    ) {}

    public static function getEntityFqcn(): string
    {
        return User::class;
    }  
    
    public function configureCrud(Crud $crud): Crud
    {
        return $crud            
            ->setEntityPermission('ROLE_ADMIN');     
    }

    public function buildForm(FormBuilderInterface $builder)
    {
        $builder
        ->add('email', EmailType::class,[
            'constraints' => [
                new NotBlank([
                    'message' => 'Merci de saisir un email',
                ]),
            ],
            'required' => true,
            'attr' => ['class' =>'form-control'],
        ])
            ->add('roles', ChoiceType::class, [
                'choices' => [
                    'Client' => "ROLE_CUSTOMER",
                    'Gérant' => "ROLE_MANAGER",
                    'Administrateur' => 'ROLE_ADMIN'
                ],
                'expanded' => true,
                'multiple' => true,
                'label' => 'Rôles' 
            ]) 
        ;
    }

    public function configureFields(string $pageName): iterable
    {
        $roles = [ 'ROLE_CUSTOMER','ROLE_MANAGER','ROLE_ADMIN' ];

        return [            
            TextField::new('lastName')->setLabel('Nom'),
            TextField::new('firstName')->setLabel('Prénom'),
            EmailField::new('email')->setLabel('Email'),   
            TextField::new('password')->setLabel('Mot de Passe'),
            ChoiceField::new('roles')->setLabel('Rôles')
            ->setChoices(array_combine($roles, $roles))
                ->allowMultipleChoices()
                ->renderExpanded()                
                ->setPermission('ROLE_ADMIN')                       
        ];
    }  
    
    public function persistEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        /** @var User $user */
        $user = $entityInstance;
        $plainPassword = $user->getPassword();
        $hashedPassword = $this->passwordHasher->hashPassword($user, $plainPassword);
        $user->setPassword($hashedPassword);
        parent::persistEntity($entityManager, $user);
    }
}
