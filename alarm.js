const clockHourElement = document.querySelector('.clock-hours');
const clockMinuteElement = document.querySelector('.clock-minutes');
const clockSecondElement = document.querySelector('.clock-seconds');
const timeInput = document.querySelector('#time-input');
const setAlarmButton = document.querySelector('.set-alarm').addEventListener('click', createAlarm);

const alarmSound = new Audio("sounds/alarm-sound.m4a");

const alarmButton = document.querySelector('.alarm-button').addEventListener('click', () => {
    window.location.replace("alarm.html");
});
const stopwatchButton = document.querySelector('.stopwatch-button').addEventListener('click', () => {
    window.location.replace("stopwatch.html");
});
const timerButton = document.querySelector('.timer-button').addEventListener('click', () => {
    window.location.replace("timer.html");
});
const clockButton = document.querySelector('.clock-button').addEventListener('click', () => {
    window.location.replace("clock.html");
});

let userAlarm;

setInterval(updateClock, 1000);

let d;
let hour;
let minute;
let second;
function updateClock() {

    d = new Date();
    hour = d.getHours();
    minute = d.getMinutes();
    second = d.getSeconds();
    if (d.getHours() < 10) {
        clockHourElement.textContent = "0" + hour;

    }else{
        clockHourElement.textContent = hour;
    }
    if (d.getMinutes() < 10) {
        clockMinuteElement.textContent = "0" + minute;
    }else{
        clockMinuteElement.textContent = minute;
    }
    
    if (d.getSeconds() < 10) {
        clockSecondElement.textContent = "0" + second;
    }else{
        clockSecondElement.textContent = second;
    }

    if (userAlarm == undefined) return;
    if (userAlarm[0] == hour && userAlarm[1] == minute) {
        alarmSound.play();
    }
}
updateClock();

function createAlarm() {
    userAlarm = timeInput.value.split(":");

}

