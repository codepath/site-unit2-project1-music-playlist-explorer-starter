
// JavaScript for Opening and Closing the Modal

const modal = document.getElementById('playlistModal');
const closeButton = document.querySelector('.close');

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
    
        modal.style.display = 'block';
    });
});

closeButton.addEventListener('click', () => {
    // Hide the modal when close button is clicked
    modal.style.display = 'none';
});

modal.addEventListener('click', event => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
