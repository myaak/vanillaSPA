let totalTime = 0;
function runTimer() {
    setInterval(() => {
        const timer = document.getElementById('timer');

        totalTime++;
        if (timer) {
            timer.innerHTML = makeTime();
        }
    }, 1000);
}

function makeTime() {
    const minutes = Math.trunc(totalTime / 60);
    const seconds = totalTime - minutes * 60;
    const hours = Math.trunc(minutes / 60);
    const hoursString = `${hours < 10 ? `0${hours}` : `${hours}`}`
    const minutesString = `${minutes < 10 ? `0${minutes}` : `${minutes}`}`;
    const secondsString = `${seconds < 10 ? `0${seconds}` : `${seconds}`}`;

    return `${hoursString}:${minutesString}:${secondsString}`;
}

window.addEventListener("DOMContentLoaded", runTimer());
document.addEventListener("location-change", () => {
    const timer = document.getElementById("timer");
    if (timer) {
        timer.innerHTML = makeTime();
    }
});