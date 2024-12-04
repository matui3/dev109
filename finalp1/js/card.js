
const stackContainer = document.querySelector('.stack-container');
const cards = Array.from(stackContainer.children);

// Adjust initial stacking order
cards.forEach((card, index) => {
    card.style.zIndex = cards.length - index;
});

// Click event to cycle through cards
stackContainer.addEventListener('click', () => {
    // Move the first card to the bottom
    const topCard = cards.shift(); // Remove the first card from the array
    cards.push(topCard); // Add it to the end of the array

    // Rearrange the cards
    cards.forEach((card, index) => {
        card.style.transform = `translateY(${index * 10}px)`;
        card.style.zIndex = cards.length - index;
    });
});