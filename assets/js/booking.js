
document.getElementById("bookingButton").onclick = messageConfirmationBooking
// message de modale de traitement  apres validation du formulaire
function messageConfirmationBooking() {
    let bookingModal = new bootstrap.Modal(document.getElementById("bookingModal"))
    bookingModal.show()
}

window.onload = () => {
    const BookingForm = document.querySelector("#form_valid")    
    // On boucle sur les input
    document.querySelectorAll("#form_valid input").forEach(input => {
        input.addEventListener("change", () => {
            // On récupére les données du formulaire , sans validation
            let Form = new FormData(BookingForm)       
            // on récupére les 2 dates
            let DateCheckIn = Form.get("reservation[checkIn]")
            let DateCheckOut = Form.get("reservation[checkOut]")         

            if (DateCheckIn !== '' && DateCheckOut !== '') {
                let date1 = new Date(DateCheckIn)
                date1.setUTCHours(0, 0, 0, 0)                
                let date2 = new Date(DateCheckOut)
                date2.setUTCHours(0, 0, 0, 0)
                let temp = date2 - date1
                // on converti l'écart en nombre de jours
                let NumberDays = temp / (1000 * 3600 * 24)
                let currentDate = new Date()
                currentDate.setUTCHours(0, 0, 0, 0)
               //  on affiche non conforme si la date de checkIn est inférieure à la date du jour ou le nombre de nuitée inférieur à 1             
                if (date1.valueOf() < currentDate.valueOf() || NumberDays < 1) {
                    document.getElementById("days").textContent = 'Dates indiquées non conformes, veuillez vérifier SVP'
                } else if ( NumberDays === 1) {
                    document.getElementById("days").textContent = '1 Nuitée'
                } else {
                    document.getElementById("days").textContent = NumberDays + ' Nuitées'
                }
            }
        })
    })
}
