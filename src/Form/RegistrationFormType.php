<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\IsTrue;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;


class RegistrationFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('lastName' , TextType::class, [
                'label'=>'Nom',
                'constraints' => [
                    new Length([
                        'min' => 2,
                        'minMessage' => 'Votre Nom doit comporter un minimum de {{ limit }} characteres',
                        'maxMessage' => 'Votre Nom doit comporter un maximum de {{ limit }} characteres',
                        'max' => 50,
                    ]),
                ],
                ])

            ->add('firstName' , TextType::class, [
                'label'=>'Prénom',
                'constraints' => [
                    new Length([
                        'min' => 2,
                        'minMessage' => 'Votre Prénom doit comporter un minimum de {{ limit }} characteres',
                        'maxMessage' => 'Votre Prénom doit comporter un maximum de {{ limit }} characteres',
                        'max' => 50,
                    ]),
                ],
                ])
            
                ->add('email', EmailType::class, [
                    'label' => 'Email',
                    'constraints' => [
                        new Length([
                            'min' => 6,
                            'minMessage' => 'Votre email doit avoir un minimum de {{ limit }} characteres',
                            'maxMessage' => 'Votre email doit avoir un maximum de {{ limit }} characteres',
                            'max' => 80,
                        ]),
                    ],
                ])

            ->add('agreeTerms', CheckboxType::class, [
                'mapped' => false,
                'constraints' => [
                    new IsTrue([
                        'message' => 'Vous devez accepter nos conditions',
                    ]),
                ],
            ])

            ->add('plainPassword', PasswordType::class, [
                // instead of being set onto the object directly,
                // this is read and encoded in the controller
                'mapped' => false,
                'attr' => ['autocomplete' => 'new-password'],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Entrez un mot de passe',
                    ]),
                    new Length([
                        'min' => 8,
                        'minMessage' => 'Votre mot de passe doit avoir un minimum de {{ limit }} characteres',
                        'maxMessage' => 'Votre mot de passe doit avoir un maximum de {{ limit }} characteres',
                        'max' => 80,
                    ]),
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
