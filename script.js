console.log("hello World")

const startEl = document.getElementById("start")
const stopEl = document.getElementById("stop")
const resetEl = document.getElementById("reset")
const timerEl = document.getElementById("timer")

let interval;
let timeLeft = 10; // 25mins converted to seconds

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60)
    let seconds = timeLeft % 60
    let formattedTime = `${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;


    timerEl.innerHTML = formattedTime
}


function startTimer() {
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();
    if (timeLeft === 0) {
        clearInterval(interval);
        alert("Great work! Time for a break.");
        timeLeft = 1500;
    }
    }, 1000)
}
function stopTimer() {
    console.log("stop")
}
function resetTimer() {
    console.log("reset")
}

startEl.addEventListener("click", startTimer)
stopEl.addEventListener("click", stopTimer)
resetEl.addEventListener("click", resetTimer)