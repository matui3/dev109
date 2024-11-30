const audio = document.getElementById('background-audio')

window.addEventListener('load', () => {
    const savedTime = localStorage.getItem('audioTime');
    if (savedTime) {
        audio.currentTime = parseFloat(savedTime);
    }
    audio.play();
});

window.addEventListener('beforeunload', () => {
    localStorage.setItem('audioTime', audio.currentTime);
});