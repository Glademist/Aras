// Define the card data with colors and names
const cards = [
    { color: 'red', name: 'Building a 2.4 Voron' },
    { color: 'red', name: 'Warhammer' },
    { color: 'red', name: 'AI' },
    { color: 'red', name: 'Coding' },
    { color: 'yellow', name: 'Household chores' },
    { color: 'yellow', name: 'Physical health' },
    { color: 'yellow', name: 'Mental health' },
    { color: 'green', name: 'Wife time' },
    { color: 'green', name: 'Daughter time' },
    { color: 'green', name: 'Son time' },
    { color: 'purple', name: 'Wild time' }
];

// Function to get a deterministic hash-based card for a given date and hour
function determineCardForHour(date, hour) {
    const key = `${date}_${hour}`;
    let hashValue = 0;

    // Simple hash function to generate a numeric value from the key
    for (let i = 0; i < key.length; i++) {
        hashValue += key.charCodeAt(i);
    }

    // Determine card index based on hash value
    const cardIndex = hashValue % cards.length;
    return cards[cardIndex];
}

// Function to determine the next card for the next hour
function determineNextCard() {
    const now = new Date();
    const date = now.toISOString().split('T')[0]; // YYYY-MM-DD
    const nextHour = (now.getHours() + 1) % 24; // Get the next hour, wrap around after 23

    return determineCardForHour(date, nextHour);
}

// Function to flip the card and update its appearance
function flipCard() {
    const card = document.getElementById('singleCard');
    const cardFront = document.getElementById('cardFront');
    const cardText = document.getElementById('cardText');

    // If the card is already flipped, just flip it back and exit
    if (card.classList.contains('flipped')) {
        card.classList.remove('flipped');
        updateBackgroundColor(); // Update the background color after flipping back
        return;
    }

    // Determine the card for the current hour
    const now = new Date();
    const date = now.toISOString().split('T')[0];
    const hour = now.getHours();
    const selectedCard = determineCardForHour(date, hour);

    // Remove all color classes to reset the background image
    cardFront.classList.remove('red', 'yellow', 'green', 'purple');

    // Add the new color class to update the background image
    cardFront.classList.add(selectedCard.color);

    // Update the card text
    cardText.textContent = selectedCard.name;

    // Flip the card to show the front side
    card.classList.add('flipped');

    // Update the background color
    updateBackgroundColor();
}

// Function to update the background color of the webpage for the next card
function updateBackgroundColor() {
    const nextCard = determineNextCard();
    document.body.style.backgroundColor = nextCard.color;
}

// Add event listener to the card to trigger the flipCard function on click
document.getElementById('singleCard').addEventListener('click', flipCard);

// Set the initial background color when the page loads
updateBackgroundColor();
