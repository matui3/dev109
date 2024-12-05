// iframe is just a way to embed another document inside of a page

// muteControl.js
const muteButton = document.getElementById("mute-button"); // get the button
const iframe = document.getElementById("audio-frame"); // get the iframe where audio is hosted
const muteIcon = document.getElementById("mute-icon"); // get the icon of the button

// Retrieve the mute state from localStorage
let isMuted = localStorage.getItem('isMuted') === 'true'; // this initially returns null and is treated as false (aka not muted)

// Set the correct mute icon based on the saved state
muteIcon.src = isMuted ? "images/mute.png" : "images/high-volume.png";

// Send the initial mute/unmute state to the iframe
iframe.contentWindow.postMessage({ action: isMuted ? "mute" : "unmute" }, "*"); // post message is an api that is checking from my iframe and is sending a message
// That message is data on whether the action or event that I clicked and the isMuted item is in the state mute or unmute
// if the localStorage('isMuted') is true and exists, iframe sends to my current window iframe 'mute' else 'unmute'

muteButton.addEventListener("click", () => {
    isMuted = !isMuted; // once i interact with the website isMuted becomes true and the key 'isMuted' is created in local storage for me to check

    // Send mute/unmute command to the iframe, { action: isMuted } this is called object destructuring
    iframe.contentWindow.postMessage({ action: isMuted ? "mute" : "unmute" }, "*");

    // Update the mute icon
    muteIcon.src = isMuted ? "images/mute.png" : "images/high-volume.png";

    // Save the new mute state to localStorage to persist across pages
    localStorage.setItem('isMuted', isMuted);
});
