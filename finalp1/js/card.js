
// Grabs the stack container
const stackContainer = document.querySelector('.stack-container'); 
const cards = Array.from(stackContainer.children); // grabs all children nodes from the stack container as an array


// Adjust initial stacking order, this iterates through each card by index and card in teh array
cards.forEach((card, index) => {
    card.style.zIndex = cards.length - index; // for each card, im making its zindex the length of where it is in the array, the higher my z-index, the closer it is to the viewer
});

// Click event to cycle through cards
stackContainer.addEventListener('click', () => {
    // Move the first card to the bottom
    const topCard = cards.shift(); // Remove the first card from the array, shift() just removes the top element of my array and returns it
    cards.push(topCard); // Add it to the end of the array

    // Rearrange the cards
    cards.forEach((card, index) => {
        card.style.transform = `translateY(${index * 10}px)`; // shift everything down by 10px based on it's position in the container
        card.style.zIndex = cards.length - index; // with a repositioned array, change the styling so that the NEW top of the array is now what's facing in front of the viewer
    });
});