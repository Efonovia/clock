const alarmButton = document
  .querySelector(".alarm-button")
  .addEventListener("click", () => window.location.replace("alarm.html"));
const stopwatchButton = document
  .querySelector(".stopwatch-button")
  .addEventListener("click", () => window.location.replace("stopwatch.html"));
const timerButton = document
  .querySelector(".timer-button")
  .addEventListener("click", () => window.location.replace("timer.html"));
const clockButton = document
  .querySelector(".clock-button")
  .addEventListener("click", () => window.location.replace("clock.html"));

let clockHourElement = document.querySelector(".clock-hours");
let clockMinuteElement = document.querySelector(".clock-minutes");
let clockSecondElement = document.querySelector(".clock-seconds");


let increaseHourButton = document.querySelector(".increase-hour");
let decreaseHourButton = document.querySelector(".decrease-hour");
let increaseMinuteButton = document.querySelector(".increase-minute");
let decreaseMinuteButton = document.querySelector(".decrease-minute");
let increaseSecondButton = document.querySelector(".increase-second");
let decreaseSecondButton = document.querySelector(".decrease-second");


let pauseResetContainer = document.querySelector(".pause-reset")
let startResetContainer = document.querySelector(".start-reset")

let pausePRButton = document.querySelector(".pausePR");
let resetPRButton = document.querySelector(".resetPR");
let resetSRButton = document.querySelector(".resetSR");
let startButton = document.querySelector(".start");
let startSRButton = document.querySelector(".startSR");

const toSeconds = (time) => time[0] * 3600 + time[1] * 60 + time[2];
function toTime(sec) {
  let hour = Math.floor(sec / 3600);
  let minute = Math.floor((sec - (hour*3600)) / 60);
  let seconds = sec % 60;
  return [hour, minute, seconds];
}

let timeArr = [];
let hour = 0;
let minute = 0;
let second = 0;
increaseHourButton.addEventListener("click", () => {
  show("start");
  hour++;
  if (hour > 99) hour = 0;
  hour < 10
    ? (clockHourElement.textContent = "0" + hour)
    : (clockHourElement.textContent = hour);
    timeArr[0] = parseInt(clockHourElement.textContent);
    timeArr[1] = parseInt(clockMinuteElement.textContent);
    timeArr[2] = parseInt(clockSecondElement.textContent);
});

decreaseHourButton.addEventListener("click", () => {
  show("start");
  hour--;
  if (hour < 0) hour = 99;
  hour < 10
    ? (clockHourElement.textContent = "0" + hour)
    : (clockHourElement.textContent = hour);
    timeArr[0] = parseInt(clockHourElement.textContent);
    timeArr[1] = parseInt(clockMinuteElement.textContent);
    timeArr[2] = parseInt(clockSecondElement.textContent);
});

increaseMinuteButton.addEventListener("click", () => {
  show("start");
  minute++;
  if (minute > 59) minute = 0;
  minute < 10
    ? (clockMinuteElement.textContent = "0" + minute)
    : (clockMinuteElement.textContent = minute);
    timeArr[0] = parseInt(clockHourElement.textContent);
    timeArr[1] = parseInt(clockMinuteElement.textContent);
    timeArr[2] = parseInt(clockSecondElement.textContent);
});

decreaseMinuteButton.addEventListener("click", () => {
  show("start");
  minute--;
  if (minute < 0) minute = 59;
  minute < 10
    ? (clockMinuteElement.textContent = "0" + minute)
    : (clockMinuteElement.textContent = minute);
    timeArr[0] = parseInt(clockHourElement.textContent);
    timeArr[1] = parseInt(clockMinuteElement.textContent);
    timeArr[2] = parseInt(clockSecondElement.textContent);
});

increaseSecondButton.addEventListener("click", () => {
  show("start");
  second++;
  if (second > 59) second = 0;
  second < 10
    ? (clockSecondElement.textContent = "0" + second)
    : (clockSecondElement.textContent = second);
    timeArr[0] = parseInt(clockHourElement.textContent);
    timeArr[1] = parseInt(clockMinuteElement.textContent);
    timeArr[2] = parseInt(clockSecondElement.textContent);
});

decreaseSecondButton.addEventListener("click", () => {
  show("start");
  second--;
  if (second < 0) second = 59;
    second < 10
      ? (clockSecondElement.textContent = "0" + second)
      : (clockSecondElement.textContent = second);
    timeArr[0] = parseInt(clockHourElement.textContent);
    timeArr[1] = parseInt(clockMinuteElement.textContent);
    timeArr[2] = parseInt(clockSecondElement.textContent);
    });

function show(UI) {
  switch (UI) {
    case "start":
      startButton.style.display = "flex";

      pauseResetContainer.style.display = "none";
      pausePRButton.style.display = "none";
      resetPRButton.style.display = "none";

      startResetContainer.style.display = "none";
      startSRButton.style.display = "none";
      resetSRButton.style.display = "none";
      break;

    case "sr":
      startResetContainer.style.display = "flex";
      startSRButton.style.display = "flex";
      resetSRButton.style.display = "flex";

      pauseResetContainer.style.display = "none";
      pausePRButton.style.display = "none";
      resetPRButton.style.display = "none";

      startButton.style.display = "none";
      break;

    case "pr":
      pauseResetContainer.style.display = "flex";
      pausePRButton.style.display = "flex";
      resetPRButton.style.display = "flex";

      startResetContainer.style.display = "none";
      startSRButton.style.display = "none";
      resetSRButton.style.display = "none";

      startButton.style.display = "none";
      break;
  }
}

let paused = true;
let totalSeconds
let clock
function updateClock() {
    totalSeconds = toSeconds(timeArr);
    clock = setInterval(() => {
        console.log(totalSeconds);
        console.log(toTime(totalSeconds));
        if (!paused) {
            totalSeconds > 0 ? (totalSeconds -= 1) : console.log("TIMER FINISHED");
            clockSecondElement.textContent =
                toTime(totalSeconds)[2] < 10
                ? "0" + toTime(totalSeconds)[2]
                : toTime(totalSeconds)[2];

            clockMinuteElement.textContent =
                toTime(totalSeconds)[1] < 10
                ? "0" + toTime(totalSeconds)[1]
                : toTime(totalSeconds)[1];

            clockHourElement.textContent =
                toTime(totalSeconds)[0] < 10
                ? "0" + toTime(totalSeconds)[0]
                : toTime(totalSeconds)[0];
            }
      }, 1000);
  }



startButton.addEventListener("click", () => {
    show("pr");
    updateClock()
    increaseHourButton.style.display = "none";
    decreaseHourButton.style.display = "none";
    increaseMinuteButton.style.display = "none";
    decreaseMinuteButton.style.display = "none";
    increaseSecondButton.style.display = "none";
    decreaseSecondButton.style.display = "none";
    paused = false;
});
    

startSRButton.addEventListener("click", () => {
  show("pr");
  paused = false;
});

pausePRButton.addEventListener("click", () => {
  show("sr");
  paused = true;
});

resetPRButton.addEventListener("click", () => {
//   show("start");
    increaseHourButton.style.display = "flex";
    decreaseHourButton.style.display = "flex";
    increaseMinuteButton.style.display = "flex";
    decreaseMinuteButton.style.display = "flex";
    increaseSecondButton.style.display = "flex";
    decreaseSecondButton.style.display = "flex";
    startResetContainer.style.display = "flex";
    startSRButton.style.display = "none";
    resetSRButton.style.display = "none";

    pauseResetContainer.style.display = "none";
    pausePRButton.style.display = "none";
    resetPRButton.style.display = "none";

    startButton.style.display = "none";

  paused = true
  totalSeconds = 0;
  clockSecondElement.textContent = "00";
  clockMinuteElement.textContent = "00";
  clockHourElement.textContent = "00";

  clearInterval(clock)
});

resetSRButton.addEventListener("click", () => {
//   show("start");
  increaseHourButton.style.display = "flex";
  decreaseHourButton.style.display = "flex";
  increaseMinuteButton.style.display = "flex";
  decreaseMinuteButton.style.display = "flex";
  increaseSecondButton.style.display = "flex";
  decreaseSecondButton.style.display = "flex";
  startSRButton.style.display = "none";
  resetSRButton.style.display = "none";

  pauseResetContainer.style.display = "none";
  pausePRButton.style.display = "none";
  resetPRButton.style.display = "none";

  startButton.style.display = "none";

  paused = true
  totalSeconds = 0;
  clockSecondElement.textContent = "00";
  clockMinuteElement.textContent = "00";
  clockHourElement.textContent = "00";
  clearInterval(clock)

});




