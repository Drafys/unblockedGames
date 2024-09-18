// Search bar functionality
document.getElementById('search-bar').addEventListener('input', function() {
    let filter = this.value.toLowerCase();
    let gameCards = document.querySelectorAll('.game-card');

    gameCards.forEach(card => {
        let title = card.querySelector('h2').textContent.toLowerCase();
        if (title.includes(filter)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Search bar functionality
document.getElementById('search-bar').addEventListener('input', function() {
    // Get the value typed in the search bar, and convert to lowercase
    let filter = this.value.toLowerCase();
    
    // Select all the game cards
    let gameCards = document.querySelectorAll('.game-card');
    
    // Loop through each game card and check if the title matches the search input
    gameCards.forEach(card => {
        let title = card.querySelector('h2').textContent.toLowerCase(); // Get the game title
        
        // If the title includes the input text, display the card, otherwise hide it
        if (title.includes(filter)) {
            card.style.display = 'block';  // Show matching game cards
        } else {
            card.style.display = 'none';   // Hide non-matching game cards
        }
    });
});

// Function to play sound (create a new audio instance each time)
function playSound(soundSrc) {
    const sound = new Audio(soundSrc);
    sound.play();  // Play the new sound instance
}

// Get all game cards
let gameCards = document.querySelectorAll('.game-card');

// Add hover and click sound to each game card
gameCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        playSound('sounds/hover-sound.wav'); // Play hover sound
    });

    card.addEventListener('click', () => {
        playSound('sounds/click-sound.wav'); // Play click sound
    });
});
