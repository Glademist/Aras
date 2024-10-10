// Define the card data by their colors
const cardsByColor = {
    red: ['Building a 2.4 Voron', 'Warhammer', 'AI', 'Coding', 'Gaming'],
    yellow: ['Household chores', 'Physical health', 'Mental health'],
    green: ['Wife time', 'Daughter time', 'Son time'],
    purple: ['Wild time'] // New purple card
};

// Function to flip the card and update its appearance
function flipCard() {
    const card = document.getElementById('singleCard');
    const cardFront = document.getElementById('cardFront');
    const cardText = document.getElementById('cardText');

    // If the card is already flipped, just flip it back and exit
    if (card.classList.contains('flipped')) {
        card.classList.remove('flipped');
        return;
    }

    // Randomly choose a color only when the card is face-down
    const colors = Object.keys(cardsByColor); // ['red', 'yellow', 'green', 'purple']
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Randomly choose a card text from the selected color category
    const cardsOfSelectedColor = cardsByColor[randomColor];
    const randomCardText = cardsOfSelectedColor[Math.floor(Math.random() * cardsOfSelectedColor.length)];

    // Remove all color classes to reset the background image
    cardFront.classList.remove('red', 'yellow', 'green', 'purple');
    // Add the new color class to update the background image
    cardFront.classList.add(randomColor);

    // Update the card text
    cardText.textContent = randomCardText;

    // Flip the card to show the front side
    card.classList.add('flipped');
}

// Add event listener to the button to trigger the flipCard function
document.getElementById('randomButton').addEventListener('click', flipCard);
