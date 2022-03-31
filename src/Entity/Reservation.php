<?php

namespace App\Entity;

use App\Repository\ReservationRepository;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;

#[ORM\Entity(repositoryClass: ReservationRepository::class)]
class Reservation
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'datetime')]
    private $checkIn;

    #[ORM\Column(type: 'datetime')]
    private $checkOut;

    #[ORM\Column(type: 'datetime')]
    private $createdAt;

    #[ORM\ManyToOne(targetEntity: Suite::class, inversedBy: 'reservations')]
    private $Suite;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'reservations')]
    private $User;

    public function __construct()
    {       
        $this->createdAt  = new \DateTime;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCheckIn(): ?\DateTimeInterface
    {
        return $this->checkIn;
    }

    public function setCheckIn(\DateTimeInterface $checkIn): self
    {
        $this->checkIn = $checkIn;

        return $this;
    }

    public function getCheckOut(): ?\DateTimeInterface
    {
        return $this->checkOut;
    }

    public function setCheckOut(\DateTimeInterface $checkOut): self
    {
        $this->checkOut = $checkOut;

        return $this;
    }

    public function getCreatedAt(): ?\DateTime
    {
        return $this->createdAt ;
    }

    public function setCreatedAt(\DateTime $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getSuite(): ?Suite
    {
        return $this->Suite;
    }

    public function setSuite(?Suite $Suite): self
    {
        $this->Suite = $Suite;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->User;
    }

    public function setUser(?User $User): self
    {
        $this->User = $User;

        return $this;
    }

    public function __toString()
    {        
        return $this->Suite ;              
    }            

    
}
