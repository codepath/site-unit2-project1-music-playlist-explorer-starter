
// JavaScript for Opening and Closing the Modal

const modal = document.getElementById('playlistModal');
const closeButton = document.querySelector('.close');

// Get all card elements
const cards = document.querySelectorAll('.card');

// Add click event listener to each card
cards.forEach(card => {
    card.addEventListener('click', () => {
        // Display the modal
        modal.style.display = 'block';
    });
});

// Add click event listener to close button
closeButton.addEventListener('click', () => {
    // Hide the modal when close button is clicked
    modal.style.display = 'none';
});

// Add click event listener to modal overlay (to close modal when clicked outside)
modal.addEventListener('click', event => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
