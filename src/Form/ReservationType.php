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
              
                ->add('suite', EntityType::class, [
                    'class' => Suite::class,
                    'choice_label' => function($suites){
                        return $suites->getHotel().' - '.$suites->getTitle().' - '.$suites->getPrice() .' € ';
                    },
                    'label' => "Hotel - Suite - Prix Nuitée",
                    'mapped' => true
                ])             

            ->add('checkIn' ,  DateType::class,[
                'widget' => 'single_text',
                'years' => range(date("Y")  , date("Y") + 1) ,
                'attr' => ['class' => 'js-datepicker'] ,
                'required' => true,
                'label' => "Date d'Arrivée",
                ])   
            
                ->add('checkOut' ,  DateType::class,[
                    'widget' => 'single_text',
                    'years' => range(date("Y")  , date("Y") + 1) ,
                    'attr' => ['class' => 'js-datepicker'] ,
                    'required' => true,
                    'label' => "Date de Départ",
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
