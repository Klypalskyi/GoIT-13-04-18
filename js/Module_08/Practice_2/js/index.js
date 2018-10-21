'use strict'

let btn = document.querySelector('.win');
let Height = window.innerHeight;
let Width = window.innerWidth;
let btnW = btn.clientWidth;
let btnH = btn.clientHeight;

console.log(btn);
console.log(Height, Width);
console.log(btnH, btnW);



let btns = document.querySelectorAll('.btn');
function moove () {
    this.style.top = Math.floor(Math.random()*(Height-btnH)) + "px";
    this.style.left = Math.floor(Math.random()*(Width-btnW)) + "px";
}

btns.forEach(el => el.addEventListener('mouseenter', moove));


