console.log("hello World");

const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

let interval;
let timeLeft = 1500; // 25mins converted to seconds

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTime = `${minutes.toString().padStart(2, "0")} : ${seconds
    .toString()
    .padStart(2, "0")}`;

  timerEl.innerHTML = formattedTime;
}

function startTimer() {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);
      alert("Great work! Time for a break.");
      timeLeft = 1500;
      updateTimer();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);
  timeLeft = 1500;
  updateTimer();
}

startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);


// Create a new div element
let newDiv = document.createElement("div");

// Set some attributes for the div
newDiv.id = "myDiv";
newDiv.className = "customDiv";
newDiv.style.width = "520px";
newDiv.style.height = "100px";
newDiv.style.backgroundColor = "#708090";
newDiv.style.fontFamily = "sans-serif"
newDiv.style.color = "white";
newDiv.style.padding = "10px";
newDiv.style.border = "4px solid black"
newDiv.style.borderRadius = "4px";
newDiv.style.margin = "0 auto"
newDiv.style.marginTop = "10px"
newDiv.innerHTML = "The Five main advatanges of the Pomodoro Technique";



// margin: 0 auto;
// max-width: 500px;
// text-align: center;

// Append the div to the document body
document.body.appendChild(newDiv);

