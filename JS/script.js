// Definujeme karty podle jejich barev
const cardsByColor = {
    red: ['Building a 2.4 Voron', 'Warhammer', 'AI', 'Coding', 'Gaming'],
    yellow: ['Household chores', 'Physical health', 'Mental health'],
    green: ['Wife time', 'Daughter time', 'Son time'],
    purple: ['Wild time'] // Nová barva s fialovou kartou
};

// Funkce pro otočení a změnu karty
function flipCard() {
    const card = document.getElementById('singleCard');
    const cardFront = document.getElementById('cardFront');
    const cardImage = document.getElementById('cardImage');
    const cardText = document.getElementById('cardText');

    // Pokud karta není otočená (rubem nahoru), pouze ji otoč zpět a ukonči funkci
    if (card.classList.contains('flipped')) {
        card.classList.remove('flipped');
        return;
    }

    // Náhodně vybereme barvu pouze pokud karta byla rubem nahoru
    const colors = Object.keys(cardsByColor); // ['red', 'yellow', 'green', 'purple']
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Poté náhodně vybereme jednu kartu z vybrané barvy
    const cardsOfSelectedColor = cardsByColor[randomColor];
    const randomCardText = cardsOfSelectedColor[Math.floor(Math.random() * cardsOfSelectedColor.length)];

    // Nastavíme obrázek podle vybrané barvy
    cardImage.src = `../img/card-${randomColor}.png`;

    // Změníme text přední strany karty
    cardText.textContent = randomCardText;

    // Otočíme kartu na lícovou stranu
    card.classList.add('flipped');
}

// Přidání události pro tlačítko
document.getElementById('randomButton').addEventListener('click', flipCard);
