console.log("hello");

let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
let milliSeconds = document.querySelector('.milliSeconds');
// milliSeconds = Number(milliSeconds.textContent);
// console.log(milliSeconds)
let milliSecond = 0;
let sec = 0;
let min = 0;
let hr = 0;

function stopWatch(){
    

    milliSecond++;

if(milliSecond == 100){
    sec++;
    milliSecond = 0;
}
if(sec == 60){
    min++;
    sec = 0;
}
if(min == 60){
    hr++;
    min = 0;
}
let milliSecondStr = milliSecond<10? "0" + milliSecond : milliSecond;
milliSeconds.textContent = milliSecondStr; 

let secStr = sec<10? "0" + sec : sec;
seconds.textContent = secStr; 

let minStr = min<10? "0" + min : min;
minutes.textContent = minStr; 

let hrStr = hr<10? "0" + hr : hr;
hours.textContent = hrStr; 
};


let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let reset = document.querySelector('#reset');

start.addEventListener("click", ()=>{
    let int = setInterval(stopWatch, 10);

    stop.addEventListener("click", ()=>{
        clearInterval(int);
        console.log('stoped');
    });
    reset.addEventListener("click", ()=>{
        clearInterval(int);
        milliSeconds.textContent = "00";
        seconds.textContent = "00";
        minutes.textContent = "00";
        hours.textContent = "00";
    });
});


