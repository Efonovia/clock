const clockHourElement = document.querySelector(".clock-hours");
const clockMinuteElement = document.querySelector(".clock-minutes");
const clockSecondElement = document.querySelector(".clock-seconds");
const clockMilliSecondElement = document.querySelector(".clock-milli-seconds");

const alarmButton = document.querySelector(".alarm-button").addEventListener("click", () => window.location.replace("alarm.html"));
const stopwatchButton = document.querySelector(".stopwatch-button").addEventListener("click", () => window.location.replace("stopwatch.html"))
const timerButton = document.querySelector(".timer-button").addEventListener("click", () => window.location.replace("timer.html"));
const clockButton = document.querySelector(".clock-button").addEventListener("click", () => window.location.replace("clock.html"));

function toTime(cs) {
  let sec = cs / 100;

  let hour = Math.floor(sec / 3600);
  let min = Math.floor(sec / 60) % 60;
  let s = Math.floor(cs / 100) % 60;
  let CS = cs % 100;

  return [hour, min, s, CS];
}

let second = 0;
let totalMilliSeconds = 0;
let increment
let paused = true

function updateClock() {
  setInterval(() => {
    if(!paused) {
        increment = 1
        totalMilliSeconds += increment;
        clockMilliSecondElement.textContent = toTime(totalMilliSeconds)[3] < 10 ? "0" + toTime(totalMilliSeconds)[3] : toTime(totalMilliSeconds)[3];
        clockSecondElement.textContent = toTime(totalMilliSeconds)[2] < 10 ? "0" + toTime(totalMilliSeconds)[2] : toTime(totalMilliSeconds)[2];
        clockMinuteElement.textContent = toTime(totalMilliSeconds)[1] < 10 ? "0" + toTime(totalMilliSeconds)[1] : toTime(totalMilliSeconds)[1];
        clockHourElement.textContent = toTime(totalMilliSeconds)[0] < 10 ? "0" + toTime(totalMilliSeconds)[0] : toTime(totalSeconds)[0];
}
  }, 10);
}

let pauseResetContainer = document.querySelector(".pause-reset")
let startResetContainer = document.querySelector(".start-reset")

let pausePRButton = document.querySelector(".pausePR")
let resetPRButton = document.querySelector(".resetPR")
let resetSRButton = document.querySelector(".resetSR")
let startButton = document.querySelector(".start")
let startSRButton = document.querySelector(".startSR")

function show(UI) {
    switch (UI) {
        case "start":
            startButton.style.display = 'flex'
        
            pauseResetContainer.style.display = 'none'
            pausePRButton.style.display = 'none'
            resetPRButton.style.display = 'none'
        
            startResetContainer.style.display = 'none'
            startSRButton.style.display = 'none'
            resetSRButton.style.display = 'none'
            break;

        case "sr":
            startResetContainer.style.display = 'flex'
            startSRButton.style.display = 'flex'
            resetSRButton.style.display = 'flex'
        
            pauseResetContainer.style.display = 'none'
            pausePRButton.style.display = 'none'
            resetPRButton.style.display = 'none'

            startButton.style.display = 'none'
            break;

        case "pr":
            pauseResetContainer.style.display = 'flex'
            pausePRButton.style.display = 'flex'
            resetPRButton.style.display = 'flex'
        
            startResetContainer.style.display = 'none'
            startSRButton.style.display = 'none'
            resetSRButton.style.display = 'none'

            startButton.style.display = 'none'
            break;
    }
}

updateClock()
startButton.addEventListener("click", () => {
    paused = false
    show("pr")
});

startSRButton.addEventListener('click', () => {
    paused = false
    show("pr")
})

pausePRButton.addEventListener('click', () => {
    paused = true
    show("sr")
})

resetPRButton.addEventListener('click', () => {
    paused = true
    totalMilliSeconds = 0
    clockMilliSecondElement.textContent = '00'
    clockSecondElement.textContent = '00'
    clockMinuteElement.textContent = '00'
    clockHourElement.textContent = '00'
    show("start");
})

resetSRButton.addEventListener('click', () => {
    paused = true
    totalMilliSeconds = 0
    clockMilliSecondElement.textContent = '00'
    clockSecondElement.textContent = '00'
    clockMinuteElement.textContent = '00'
    clockHourElement.textContent = '00'
    show("start");
})