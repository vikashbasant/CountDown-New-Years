const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");




const newYears = "1 Jan 2022";

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalMiliSecond = (newYearsDate-currentDate);

    const totalSecond = totalMiliSecond/1000;

    const days = Math.floor(totalSecond/3600/24);
    const hours = Math.floor(totalSecond/3600)%24;
    const minutes = Math.floor(totalSecond/60)%60;
    const seconds = Math.floor(totalSecond)%60;



    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);

    
}

function formatTime(time){
    return time<10?(`0${time}`):time;
}

// initial call:
countdown();

setInterval(countdown, 1000);


































