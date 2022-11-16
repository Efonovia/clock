// console.log(Math.floor((new Date()) / 1000));
const clockHourElement = document.querySelector('.clock-hours');
const clockMinuteElement = document.querySelector('.clock-minutes');
const clockSecondElement = document.querySelector('.clock-seconds');
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

let digitalButton = document.querySelector('.digital-on')
let analogButton = document.querySelector('.analog-off')
let bar = document.querySelector('.bar')
let analogArea = document.querySelector('.analog-area')
let digitalArea = document.querySelector('.digital-area')
const ANALOGCLOCK = `
                        <canvas></canvas>
                        <script src="analog.js"></script>
                    `

const DIGITALCLOCK = `
                        <div class="column1">:</div>
                        <div class="column2">:</div>
                        <div class="clock">
                            <div class="clock-hours"></div>
                            <div class="clock-minutes"></div>
                            <div class="clock-seconds"></div>
                        </div>
                    `

let toLeftInterval
let toRightInterval
let clockInterval
digitalButton.addEventListener('click', () => {
    if(digitalButton.className === "digital-off"){    
        digitalButton.className === 'digital-on' ? digitalButton.className = 'digital-off' : digitalButton.className = 'digital-on'
        analogButton.className === 'analog-on' ? analogButton.className = 'analog-off' : analogButton.className = 'analog-on'
        clearInterval(toRightInterval)
        analogArea.style.display = 'none'
        digitalArea.style.display = 'block'
        let deviation = 60
        toLeftInterval = setInterval(() => {
            deviation > 15 ? deviation -= 3 : deviation = 15
            bar.style.left = `${deviation}vw` 
        }, 10)
    }
})

analogButton.addEventListener('click', () => {
    if(analogButton.className === "analog-off"){    
        analogButton.className === 'analog-on' ? analogButton.className = 'analog-off' : analogButton.className = 'analog-on'
        digitalButton.className === 'digital-on' ? digitalButton.className = 'digital-off' : digitalButton.className = 'digital-on'
        clearInterval(toLeftInterval)
        digitalArea.style.display = 'none'
        analogArea.style.display = 'block'
        let deviation = 15
        toRightInterval = setInterval(() => {
            deviation < 60 ? deviation += 3 : deviation = 60
            bar.style.left = `${deviation}vw` 
        }, 10)
    }
})


clockInterval = setInterval(updateClock, 1000);

function updateClock() {
    let d = new Date();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();
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

}
updateClock();