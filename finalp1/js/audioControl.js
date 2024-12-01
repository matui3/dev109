// audioControl.js
document.addEventListener("DOMContentLoaded", () => {
    const audioElement = document.getElementById("background-audio");

    // Listen for messages from the parent page to mute/unmute the audio
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
});
