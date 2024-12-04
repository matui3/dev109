// audioControl.js
const audioElement = document.getElementById("background-audio");

// Listen for messages from the page you are currently on to mute/unmute the audio on audio.html page
window.addEventListener("message", (event) => {
    const { action } = event.data;

    if (action === "mute") {
        audioElement.muted = true;
    } else if (action === "unmute") {
        audioElement.muted = false;
    }
});

// Set the audio to the correct mute state on load
const isMuted = localStorage.getItem('isMuted') === 'true';
audioElement.muted = isMuted;  // Apply the mute state from localStorage on page load
