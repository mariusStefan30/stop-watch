let tens = 00;
let seconds = 00;
let minutes = 00;
let hours = 00;
let appendTens = document.getElementById("tens");
let appendSeconds = document.getElementById("seconds");
let appendMinutes = document.getElementById("minutes");
let appendHours = document.getElementById("hours");
let startClock = document.getElementById("start");
let stopClock = document.getElementById("stop");
let resetClock = document.getElementById("reset");
let interval; // to store timer values


//implement timing
function startTimer() {
    //tens
    tens++;
    //output 0 in front
    if (tens <= 9) {
        appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
        appendTens.innerHTML = tens;
    }

    if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = seconds;
        tens = 0;
        appendTens.innerHTML = 0;
    }

    //seconds
    //output 0 in front
    if (seconds <= 9) {
        appendSeconds.innerHTML = "0" + seconds;
    }

    if (seconds > 59) {
        minutes++;
        appendMinutes.innerHTML = minutes;
        seconds = 0;
        appendSeconds.innerHTML = 0;
        tens = 0;
        appendTens.innerHTML = 0;
    }

    //minutes
    //output 0 in front
    if (minutes <= 9) {
        appendMinutes.innerHTML = "0" + minutes;
    }

    if (minutes > 59) {
        hours++;
        appendHours.innerHTML = hours;
    }

    //hours
    //output 0 in front
    if (hours <= 9) {
        appendHours.innerHTML = "0" + hours;
    }

    if (hours > 60) {
        appendHours.innerHTML = hours;
    }
}


startClock.onclick = function () {
    interval = setInterval(startTimer, 10);
}

stopClock.onclick = function () {
    clearInterval(interval);
}

resetClock.onclick = function () {
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    minutes = "00";
    hours = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
    appendHours.innerHTML = hours;
}
