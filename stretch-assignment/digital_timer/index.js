// global variables 
let isRunning = false;
let stopRunning = false;
let msCount = 0;

// functions

function timerFunction() {

  // reset state
  isRunning = true;
  stopRunning = false;
  if (msTens.textContent !== "-") {return 1}

  // initialize timer
  digits.style.color = "black";
  const msTimer = window.setInterval(msCallback, 10);

  function msCallback() {
    if (stopRunning === true) {return 1} 
    msArr = String(msCount).split("");

    if (msCount > 1000) {
      digits.style.color = "red";
      isRunning = false;
      return 1;
    } else {
      msCount++;
      msTens.textContent = msArr[msArr.length - 1];
      msHundreds.textContent = msArr[msArr.length - 2];
      secondOnes.textContent = msArr[msArr.length - 3];
      secondTens.textContent = msArr[msArr.length - 4];
    }
  }
}

function stopFunction() {
   if (isRunning === true) {
      return stopRunning = true;
   }
}

function resetFunction() {
   stopFunction();
   msCount = 0;
   digits.style.color = "black";
   timerFunction();
}

// DOM selectors

const msTens = document.getElementById("msTens");
const msHundreds = document.getElementById("msHundreds");
const secondOnes = document.getElementById("secondOnes");
const secondTens = document.getElementById("secondTens");
const digits = document.querySelector(".digits");

const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");

// event handlers

startButton.addEventListener("click", timerFunction);
stopButton.addEventListener("click", stopFunction)
resetButton.addEventListener("click", resetFunction)
