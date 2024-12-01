// muteControl.js
const muteButton = document.getElementById("mute-button");
const iframe = document.getElementById("audio-frame");
const muteIcon = document.getElementById("mute-icon");

// Retrieve the mute state from localStorage
let isMuted = localStorage.getItem('isMuted') === 'true';

// Set the correct mute icon based on the saved state
muteIcon.src = isMuted ? "images/mute.png" : "images/high-volume.png";

// Send the initial mute/unmute state to the iframe
iframe.contentWindow.postMessage({ action: isMuted ? "mute" : "unmute" }, "*");

muteButton.addEventListener("click", () => {
    isMuted = !isMuted;

    // Send mute/unmute command to the iframe
    iframe.contentWindow.postMessage({ action: isMuted ? "mute" : "unmute" }, "*");

    // Update the mute icon
    muteIcon.src = isMuted ? "images/mute.png" : "images/high-volume.png";

    // Save the new mute state to localStorage to persist across pages
    localStorage.setItem('isMuted', isMuted);
});
