<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Length;


class ContactType extends AbstractType
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

        ->add('subject', ChoiceType::class,[
          'label' => 'Sujet',
          'choices' => [
            'Je souhaite poser une réclamation' => 'Je souhaite poser une réclamation',
            'Je souhaite commander un service supplémentaire' => 'Je souhaite commander un service supplémentaire',
            'Je souhaite en savoir plus sur une suite' => 'Je souhaite en savoir plus sur une suite',
            'J\'ai un souci avec cette application' => 'J\'ai un souci avec cette application'
          ]
        ])

        ->add('message', TextareaType::class,[
          'label' => 'Message',
        ])       
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            // Configure your form options here
        ]);
    }
}
