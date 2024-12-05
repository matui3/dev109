// audioControl.js
const audioElement = document.getElementById("background-audio");

// Listen for messages from the page you are currently on to mute/unmute the audio on audio.html page
window.addEventListener("message", (event) => { // typical add event listener with an event passed in.
    const { action } = event.data; // create an objection called action by getting the event (clicking the audio button and then getting the action part of that data that was passed in)
    // using object destructuring: 
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

    if (action === "mute") {
        audioElement.muted = true; // mute the audioElement
    } else if (action === "unmute") {
        audioElement.muted = false; // unmute it
    }
});

// Set the audio to the correct mute state on load
const isMuted = localStorage.getItem('isMuted') === 'true'; // set another element created on muteControl (isMuted) to true
audioElement.muted = isMuted;  // Apply the mute state from localStorage on page load
