// 'use strict'

// function multiply (a, b) {
//     return a*b;
// } 

// function square (n) {
//     return multiply(n,n)
// }

// function printSquare(n) {
//     let result;
//     setTimeout(function() {
//         result = square(n);
//     }, 1000) ; 
//     console.log(result);
// }

// printSquare(4);
// console.log('hello')

'use strict'
// СЕКУНДОМЕР

let deadline = new Date(2019,0,1,0,0,0);
// console.log(deadline);

function timer () {
    let today = new Date();
    // console.log(today);
    let delta = deadline - today;
    // console.log(delta);
    let seconds = Math.floor(delta / 1000 % 60);
    // console.log(seconds);
    let minutes = Math.floor(delta / 1000 / 60 % 60);
    // console.log(minutes);
    let hours = Math.floor(delta / 1000 / 60 / 60 % 24);
    // console.log(hours);
    let days = Math.floor(delta / 1000 / 60 / 60 / 24);
    // console.log(days);

    let timerSeconds = document.querySelector('.seconds');
    let timerMinutes = document.querySelector('.minutes');
    let timerHours = document.querySelector('.hours');
    let timerDays = document.querySelector('.days');

    timerSeconds.textContent = seconds > 10 ? seconds : `0${seconds}`;
    timerMinutes.textContent = minutes > 10 ? minutes : `0${minutes}`;
    timerHours.textContent = hours > 10 ? hours : `0${hours}`;
    timerDays.textContent = days > 10 ? days : `0${days}`;

}

setInterval(timer,1000);