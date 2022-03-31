<?php

namespace App\Form;

use App\Entity\Reservation;
use App\Entity\Suite;
use App\Entity\Hotel;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\DateType;


class ReservationType extends AbstractType
{   
    public function buildForm(FormBuilderInterface $builder, array $options)
    {    
        $builder                     
                ->add('hotel', EntityType::class, [                    
                    'class' => Hotel::class,
                    'choice_label' => function($hotel){
                        return $hotel->getName().' - '.$hotel->getCity();
                    },
                    'label' => "Hotel - Ville",
                    'mapped' => false
                ])

                ->add('suite', EntityType::class, [
                    'class' => Suite::class,
                    'choice_label' => function($suites){
                        return $suites->getTitle();
                    },
                    'label' => "Suite",
                    'mapped' => true
                ])             

            ->add('checkIn' ,  DateType::class,[
                'widget' => 'choice',
                'format' => 'd-M-y',
                'years' => range(date("Y")  , date("Y") + 1) ,
                'label'=>'Date d\'Arrivée',
                'required' => true,
                ]) 
            
            ->add('checkOut' ,  DateType::class,[
                'widget' => 'choice',
                'format' => 'd-M-y',
                'years' => range(date("Y") , date("Y") + 1) ,
                'label'=>'Date de Depart',
                'required' => true,
                ])             
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Reservation::class,
        ]);
    }
}
