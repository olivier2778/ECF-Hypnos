<?php

namespace App\Controller;
use App\Form\ContactType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Mailer\MailerInterface;

class ContactController extends AbstractController
{
    #[Route('/contact', name: 'contact')]
    public function index(Request $request, MailerInterface $mailer) : Response
    {
        $form = $this->createForm(ContactType::class);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $contactFormData = $form->getData();            
            $message = (new TemplatedEmail())
                ->from($contactFormData['email'])
                ->to('ag548fd@gmail.com') 
                ->text('Sender : '.$contactFormData['email'].\PHP_EOL.
                    $contactFormData['message'],
                    'text/plain')               
                ->context([                  
                    'lastname' => $contactFormData['lastName'],
                    'firstname' => $contactFormData['firstName'],
                    'emails' => $contactFormData['email'],
                    'subject' => $contactFormData['subject'],
                    'message' => $contactFormData['message'] ,
                ]);

            $mailer->send($message);
            $this->addFlash('success', 'Votre message a été envoyé , nous allons vous contacter prochainement');
            return $this->redirectToRoute('contact');
        }

        return $this->render('contact/index.html.twig', [
            'form' => $form->createView()
        ]);  
    }
}
