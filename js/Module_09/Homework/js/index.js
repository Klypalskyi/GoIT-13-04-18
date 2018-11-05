'use strict'

const timeLap = document.querySelector('.js-time')
const startBtn = document.querySelector('.js-start')
const lapBtn = document.querySelector('.js-take-lap')
const resetBtn = document.querySelector('.js-reset')
const lapsShow = document.querySelector('.js-laps')

startBtn.addEventListener('click', start) /* ====START TIMER==== */
lapBtn.addEventListener('click', lap) /* ===TAKING LAP=== */
resetBtn.addEventListener('click', reset) /* ===RESET TIMER=== */

// let countDate = Date.now()
let timerId = null;
let isActive = false;
let startTime = 0;
let pauseTime = 0;
let pauseDate = new Date;
let min = 0;
let sec = 0;
let ms = 0;

function start (event) {
  const target = event.target
  startTime = Date.now() - pauseTime
  if (!isActive) {
    startTime = Date.now()
    isActive = true
    timerId = setInterval(() => {
      min = Math.floor((Date.now() - startTime) / 1000 / 60 % 60)
      if (min < 10) {
        min = '0' + min
      }

      sec = Math.floor((Date.now() - startTime) / 1000 % 60)
      if (sec < 10) {
        sec = '0' + sec
      }

      ms = Math.floor((Date.now() - startTime) / 100 % 10)

      timeLap.textContent = `${min}:${sec}.${ms}`
      target.textContent = 'Pause'
      startBtn.classList.add('onStart')
    }, 100)
  } else if (isActive) {  
    isActive = false
    clearInterval(timerId)
    startBtn.textContent = 'Continue'
    
}

}

function lap () {}

function reset () {
    isActive = false
    clearInterval(timerId)
    startBtn.textContent = 'Start'
    timeLap.textContent = `00:00.0`
}

// if (!isActive) {
//     isActive = true
//     timerId = setInterval(() => {
//       let min = Math.floor((Date.now() - deltaTime) / 1000 / 60 % 60)
//       if (min < 10) {
//         min = '0' + min
//       }

//       let sec = Math.floor((Date.now() - deltaTime) / 1000 % 60)
//       if (sec < 10) {
//         sec = '0' + sec
//       }

//       let ms = Math.floor((Date.now() - deltaTime) / 100 % 10)

//       timeLap.textContent = `${min}:${sec}.${ms}`
//       startBtn.textContent = 'PAUSE'
//     }, 100)
//   } else if (isActive) {
//     let pauseDate = Date.now()
//     timerContent = pauseDate
//     console.log(timerContent)
//     isActive = false
//     clearInterval(timerId)
//     startBtn.textContent = 'CONTINUE'
//     deltaTime = timerContent
//   }
