console.log("hello World");

const startEl = window.document.getElementById("start");
const stopEl = window.document.getElementById("stop");
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

const button = document.getElementById("reset");

button.addEventListener("mouseover", function() {
  button.style.backgroundColor = "#708090";  // Change background on hover
});

button.addEventListener("mouseout", function() {
    button.style.backgroundColor = "#2a3845";  // Revert to original color
  });

//cache the body element
let bodyElement = document.querySelector("body")

// Create a new div element
let newDiv = document.createElement("div");

// Set some attributes for the div
newDiv.id = "myDiv";
newDiv.className = "customDiv";
newDiv.style.width = "520px";
newDiv.style.height = "150px";
newDiv.style.backgroundColor = "#708090";
newDiv.style.fontFamily = "sans-serif"
newDiv.style.color = "white";
newDiv.style.padding = "10px";
newDiv.style.border = "4px solid black"
newDiv.style.borderRadius = "4px";
newDiv.style.margin = "0 auto"
newDiv.style.marginTop = "10px"
newDiv.innerHTML = "Five main advatanges of the Pomodoro Technique: <br> <br> Encourages focused work. <br> Helps you get started. <br> Manage distractions and control your time. <br> Reduces stress and anxiety. <br> Maintain motivation.";

// Append the div to the document body
bodyElement.appendChild(newDiv);

