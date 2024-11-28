let slideIndex = 1;
let slideshowInterval;

let slides = document.getElementsByClassName("mySlides")

function showSlide() {
    // Show the current slide
    if (slideIndex > slides.length) {
        slideIndex = 1; // Wrap around to first slide
    }
    if (slideIndex < 1) {
        slideIndex = slides.length; // Wrap around to last slide
    }

    // let dots = document.getElementsByClassName("dot")
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }

    slides[slideIndex-1].style.display = "block";
}

function next() {
    slideIndex++;
    showSlide(slideIndex);
    resetSlideshowTimer();
}

function prev() {
    slideIndex--;
    showSlide(slideIndex);
    resetSlideshowTimer();
}

function resetSlideshowTimer() {
    clearInterval(slideshowInterval);
    startSlideshow();
}

showSlide();
startSlideshow();

function startSlideshow() {
    slideshowInterval = setInterval(() => {
        next();
    }, 5000)
}


const nextButton = document.getElementById("next")
const prevButton = document.getElementById("prev")


nextButton.addEventListener('click', next);
prevButton.addEventListener('click', prev);

