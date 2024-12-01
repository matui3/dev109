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
});
