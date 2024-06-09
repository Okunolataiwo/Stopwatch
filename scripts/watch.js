// Declaring variables
let minute = document.querySelector(".minute");
let seconds = document.querySelector(".seconds");
let milliseconds = document.querySelector(".milliseconds");
let start = document.querySelector(".start");
let pause = document.querySelector(".pause");
let reset = document.querySelector(".reset");
let millisec = 0;
let sec = 0;
let min = 0;
let timeInterval;

// Function to initiate the time
const myStopWatch = ()=>{
    millisec++;
    if(millisec < 9) {
        milliseconds.innerHTML = "0" + millisec;
    }

    if(millisec > 9) {
        milliseconds.innerHTML = millisec;
    }
    if(millisec > 99){
        sec++;
        seconds.innerHTML = "0" + sec;
        millisec = 0;
        milliseconds.innerHTML = "00";
    }

    if(sec > 9) {
        seconds.innerHTML = sec;
    }

    if(sec > 59) {
        min++;
        minute.innerHTML = "0" + min;
        sec = 0;
        seconds.innerHTML = "00";
    }
    if(min > 9) {
        minute.innerHTML = min;
    }

}
// Adding the function to start button
start.addEventListener("click", ()=>{
    timeInterval = setInterval(myStopWatch, 10);
});

// The function to pause or stop the timing
pause.addEventListener("click", ()=>{
    clearInterval(timeInterval);
})

// Function to reset the timing
reset.addEventListener("click", ()=>{
    clearInterval(timeInterval);
    millisec = 0;
    sec = 0;
    min = 0;
    milliseconds.innerHTML = "00";
    seconds.innerHTML = "00";
    minute.innerHTML = "00";
});







