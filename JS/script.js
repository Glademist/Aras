// Seznam náhodných textů a obrázků (můžeme později rozšířit nebo upravit)
const items = [
    "Hello, World!",
    "This is a random message.",
    "Keep smiling!",
    "img/sample-image-1.jpg", // Místo pro obrázek
    "img/sample-image-2.jpg"
];

// Funkce pro zobrazení náhodného textu nebo obrázku
function showRandomItem() {
    const displayArea = document.getElementById('displayArea');
    const randomItem = items[Math.floor(Math.random() * items.length)];

    // Kontrola, zda jde o obrázek (jednoduše kontrolujeme příponu souboru)
    if (randomItem.endsWith('.jpg') || randomItem.endsWith('.png') || randomItem.endsWith('.gif')) {
        displayArea.innerHTML = `<img src="${randomItem}" alt="Random Image" style="max-width: 100%; height: auto;">`;
    } else {
        displayArea.textContent = randomItem;
    }
}

// Přidání události pro tlačítko
document.getElementById('randomButton').addEventListener('click', showRandomItem);