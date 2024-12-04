const audio = document.getElementById('background-audio')

// Window element for browser
window.addEventListener('load', () => {
    const savedTime = localStorage.getItem('audioTime'); // Get the current time of audio saved as a string 
    if (savedTime) {
        audio.currentTime = parseFloat(savedTime); // Parses the string to retun the value as a number
    }
    audio.play(); // continue to play from the current audio time
});

// Before I move away from the page, make the local storage save the current audio
window.addEventListener('beforeunload', () => {
    localStorage.setItem('audioTime', audio.currentTime);
});