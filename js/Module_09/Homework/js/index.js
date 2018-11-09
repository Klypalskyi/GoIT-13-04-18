'use strict'

class Stopwatch {
    constructor(boxName) {
        this.boxName = boxName;
        this.timerId = null;
        this.isActive = false;
        this.startTime = 0;
        this.pauseTime = 0;
        this.deltaTime = 0;
        this.lapTime = 0;
        this.min = 0;
        this.sec = 0;
        this.ms = 0;
        this.creation();

    }


    creation() {
        // ================================================Creating elements
        this.box = document.createElement('div');
        this.timerBox = document.createElement('div');
        this.stopWatchBox = document.createElement('div');
        this.timer = document.createElement('p');
        this.startBtn = document.createElement('button');
        this.lapBtn = document.createElement('button');
        this.resetBtn = document.createElement('button');
        this.lapsShow = document.createElement('ul');

        // ================================================Classlist
        this.box.classList.add('parentOfTimer')
        this.timerBox.classList.add('timerBox');
        this.stopWatchBox.classList.add('stopwatch');
        this.timer.classList.add('time', 'js-time');
        this.startBtn.classList.add('btn', 'js-start');
        this.lapBtn.classList.add('btn', 'js-take-lap');
        this.resetBtn.classList.add('btn', 'js-reset');
        this.lapsShow.classList.add('laps', 'js-laps');

        // ================================================TextContent
        this.timer.textContent = '00:00.0';
        this.startBtn.textContent = 'Start';
        this.lapBtn.textContent = 'Lap';
        this.resetBtn.textContent = 'Reset';

        // ================================================Appending
        this.boxName.append(this.box);
        this.box.append(this.timerBox);
        this.timerBox.append(this.stopWatchBox, this.lapsShow);
        this.stopWatchBox.append(this.timer, this.startBtn, this.lapBtn, this.resetBtn);

        // ================================================AddEventListeners
        this.startBtn.addEventListener('click', this.start.bind(this)) /* ====START TIMER==== */
        this.lapBtn.addEventListener('click', this.lap.bind(this)) /* ===TAKING LAP=== */
        this.resetBtn.addEventListener('click', this.reset.bind(this)) /* ===RESET TIMER=== */

    }


    start(event) {
        const target = event.target
        if (!this.isActive) {

            if (this.pauseTime !== 0) {
                this.startTime = Date.now() - this.deltaTime;
            } else {
                this.startTime = Date.now();
            }

            this.isActive = true;
            this.timerId = setInterval(this.formatTime.bind(this), 100, this.startTime);
            target.textContent = 'Pause';
            target.addEventListener('click', this.pause.bind(this)) /* ====PAUSE TIMER==== */
        }
    }

    pause(event) {
        const target = event.target
        if (this.isActive) {
            this.isActive = false;
            target.textContent = 'Continue';
            clearInterval(this.timerId);
            this.pauseTime = +new Date;
            this.deltaTime = this.pauseTime - this.startTime;
            target.addEventListener('click', this.start.bind(this)) /* ====START TIMER==== */
        }

    }

    lap() {
        let lapTr = document.createElement('li');
        lapTr.classList.add('lapRow');
        lapTr.textContent = this.timer.textContent;
        this.lapsShow.append(lapTr)
    }

    reset() {
        this.isActive = false;
        clearInterval(this.timerId);
        this.timerId = null;
        this.startBtn.textContent = 'Start';
        this.startBtn.addEventListener('click', this.start.bind(this));
        this.startTime = 0;
        this.pauseTime = 0;
        this.deltaTime = 0;
        this.min = 0;
        this.sec = 0;
        this.ms = 0;
        this.timer.textContent = '00:00.0';
        let lapTr = [...document.querySelectorAll('li')];
        for (let i of lapTr) {
            i.remove();
        }
    }

    formatTime (timeA) {
        let time = +new Date() - timeA;

        this.min = Math.floor((time / 1000 / 60) % 60)
        if (this.min < 10) {
            this.min = '0' + this.min
        }

        this.sec = Math.floor((time / 1000) % 60)
        if (this.sec < 10) {
            this.sec = '0' + this.sec
        }

        this.ms = Math.floor((time / 100) % 10)

        this.timer.textContent = `${this.min}:${this.sec}.${this.ms}`;
        console.log(this.timer)
    }


};
const parentA = document.body;
new Stopwatch(parentA);

const parentB = document.body;
new Stopwatch(parentB);

const parentC = document.body;
new Stopwatch(parentC);





// const timer = document.querySelector('.js-time');
// const startBtn = document.querySelector('.js-start');
// const lapBtn = document.querySelector('.js-take-lap');
// const resetBtn = document.querySelector('.js-reset');
// const lapsShow = document.querySelector('.js-laps');


// const stopWatch = {
//     timerId: null,
//     isActive: false,
//     startTime: 0,
//     pauseTime: 0,
//     deltaTime: 0,
//     lapTime: 0,
//     min: 0,
//     sec: 0,
//     ms: 0,

//     start(onStart) {
//         if (!this.isActive) {

//             if (this.pauseTime !== 0) {
//                 this.startTime = Date.now() - this.deltaTime;
//             } else {
//                 this.startTime = Date.now();
//             }

//             this.isActive = true;
//             this.timerId = setInterval(onStart, 100, this.startTime, timer);
//             startBtn.textContent = 'Pause';
//             startBtn.addEventListener('click', stopWatch.pause.bind(stopWatch, timerCount)) /* ====PAUSE TIMER==== */
//         }
//     },

//     pause() {
//         if (this.isActive) {
//             this.isActive = false;
//             startBtn.textContent = 'Continue';
//             clearInterval(this.timerId);
//             this.pauseTime = +new Date;
//             this.deltaTime = this.pauseTime - this.startTime;
//             startBtn.addEventListener('click', stopWatch.start.bind(stopWatch, timerCount)) /* ====START TIMER==== */
//         }

//     },

//     lap() {
//         let lapTr = document.createElement('li');
//         lapTr.classList.add('lapRow');
//         lapTr.textContent = timer.textContent;
//         lapsShow.append(lapTr)
//     },

//     reset() {
//         this.isActive = false;
//         clearInterval(this.timerId);
//         this.timerId = null;
//         startBtn.textContent = 'Start';
//         this.startTime = 0;
//         this.pauseTime = 0;
//         this.deltaTime = 0;
//         this.min = 0;
//         this.sec = 0;
//         this.ms = 0;
//         timer.textContent = '00:00.0';
//         let lapTr = [...document.querySelectorAll('li')];
//         for (let i of lapTr) {
//             i.remove();
//         }
//     },

// }

// function timerCount(timeA, n) {
//     let time = +new Date - timeA;

//     this.min = Math.floor((time / 1000 / 60) % 60)
//     if (this.min < 10) {
//         this.min = '0' + min
//     }

//     this.sec = Math.floor((time / 1000) % 60)
//     if (this.sec < 10) {
//         sec = '0' + sec
//     }

//     this.ms = Math.floor((time / 100) % 10)

//     n.textContent = `${this.min}:${this.sec}.${this.ms}`;
// }

// let p =document.createElement('div');
// let d =document.createElement('h5')
// p.classList.add('gg', 'ggg')

// body.append(p,d)
// creation("HELL")



// console.log(+new Date())