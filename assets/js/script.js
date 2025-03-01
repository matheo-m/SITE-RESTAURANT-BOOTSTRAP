let backToTopButton = document.getElementById('back-to-top');
let reservationButton = document.getElementById('reservation-form')

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


reservationButton.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Votre réservation a été envoyée avec succès!');
});