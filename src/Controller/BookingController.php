<?php

namespace App\Controller;

use App\Entity\Reservation;
use App\Form\ReservationType;
use App\Repository\ReservationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use DateTime;

#[Route('/member/booking')]
class BookingController extends AbstractController
{
    #[Route('/', name: 'booking_index', methods: ['GET'])]
    public function index(ReservationRepository $reservationRepository): Response
    {
        return $this->render('booking/index.html.twig', [
            'reservations' => $reservationRepository->userBooking($this->getUser()),
        ]);
    }    

    #[Route('/new', name: 'booking_new', methods: ['GET', 'POST'])]
    public function new(Request $request, ReservationRepository $reservationRepository): Response
    {      
        $reservation = new Reservation();
        $form = $this->createForm(ReservationType::class, $reservation);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $user = $this->getUser();
            $reservation->setUser($user);           
            $reservationRepository->add($reservation);
            return $this->redirectToRoute('booking_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('booking/new.html.twig', [
            'reservation' => $reservation,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'booking_show', methods: ['GET'])]
    public function show(Reservation $reservation): Response
    {
        return $this->render('booking/show.html.twig', [
            'reservation' => $reservation,
        ]);
    }

    #[Route('/{id}/edit', name: 'booking_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Reservation $reservation, ReservationRepository $reservationRepository): Response
    {
        $form = $this->createForm(ReservationType::class, $reservation);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $reservationRepository->add($reservation);
            return $this->redirectToRoute('booking_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('booking/edit.html.twig', [
            'reservation' => $reservation,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'booking_delete', methods: ['GET','POST'])]
    public function delete(Request $request, Reservation $reservation, ReservationRepository $reservationRepository): Response
    {
        $actualDate = new DateTime();
        $date = $reservation->getCheckIn()->modify('- 2 day');
        if ($date < $actualDate) {
            $this->addFlash('info', 'Suppression impossible , la date est trop proche ! ');
            return $this->redirectToRoute('booking_index');
        }
        if ($this->isCsrfTokenValid('delete'.$reservation->getId(), $request->request->get('_token'))) {
            $reservationRepository->remove($reservation);
        }

        return $this->redirectToRoute('booking_index', [], Response::HTTP_SEE_OTHER);
    }
    
}
