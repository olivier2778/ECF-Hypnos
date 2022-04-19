
document.getElementById("bookingButton").onclick = messageConfirmationBooking     

function messageConfirmationBooking() {
    let bookingModal = new bootstrap.Modal(document.getElementById("bookingModal"))
    bookingModal.show()
}
