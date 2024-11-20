let dotSize = 8

const dots = []


mybutton.addEventListener("click", (event) => {
    var elements = document.getElementsByTagName("div");
    for (index = elements.length - 1; index >= 0; index--) {
        if (!elements[index].classList.contains('container') &&
            elements[index].id !== 'colorText') {
            elements[index].parentNode.removeChild(elements[index]);
        }
    }
    event.stopPropagation();
});


const increaseButton = document.getElementById('increase')
const decreaseButton = document.getElementById('decrease')
const colorSelect = document.getElementById('colorPicker')


colorSelect.addEventListener('input', chooseColor)

increaseButton.addEventListener("click", () => {
    dotSize += 1;
    let dotsArray = Array.from(document.getElementsByClassName("dot")); // Convert HTMLCollection to array
    dotsArray.forEach(dot => {
        dot.style.height = dotSize + "px";
        dot.style.width = dotSize + "px";
    });
    displaySizeOfDot();
});

decreaseButton.addEventListener("click", () => {
    if (dotSize > 5) {
        dotSize -= 1;
    } else {
        dotSize = 1;
    }
    let dotsArray = Array.from(document.getElementsByClassName("dot")); // Convert HTMLCollection to array
    dotsArray.forEach(dot => {
        dot.style.height = dotSize + "px";
        dot.style.width = dotSize + "px";
    });
    displaySizeOfDot();
});

addEventListener("click", (event) => {

    if (event.target.closest('.container') || event.target.closest('button')) {
        return;
    }
    var dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = (event.pageX - dotSize/2) + "px";
    dot.style.top = (event.pageY - dotSize/2) + "px";
    dot.style.height = dotSize + "px";
    dot.style.width = dotSize + "px";
    dot.style.backgroundColor = colorSelect.value;
    document.body.appendChild(dot);
    dots.push(dot)
    displaySizeOfDot();
});


function displaySizeOfDot() {
    const dot = document.querySelector('.sizeDisplay')
    dot.textContent = `Current size: ${dotSize}px`;

}

function chooseColor() {
    const colorChoice = colorSelect.value

    let dotsArray = Array.from(document.getElementsByClassName("dot"));
    dotsArray.forEach(dot => {
        dot.style.backgroundColor = colorChoice;
    })
    
}