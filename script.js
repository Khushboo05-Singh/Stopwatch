let timer;
let elapsedTime = 0;
let running = false;

function formatTime(time) {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;
    return (
        String(hours).padStart(2, '0') + ':' +
        String(minutes).padStart(2, '0') + ':' +
        String(seconds).padStart(2, '0')
    );
}

function updateDisplay() {
    document.getElementById('display').innerText = formatTime(elapsedTime);
}

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            elapsedTime++;
            updateDisplay();
        }, 1000);
    }
}

function stopTimer() {
    running = false;
    clearInterval(timer);
}

function resetTimer() {
    stopTimer();
    elapsedTime = 0;
    updateDisplay();
}