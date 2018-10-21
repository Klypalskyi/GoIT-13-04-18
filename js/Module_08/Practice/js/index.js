'use strict'

let header = document.querySelector('header');
let nav = document.querySelector('#navigation');
let topNav = nav.offsetTop;
console.log(topNav);
function fixNav () {
    if (window.scrollY >= topNav) {
        nav.classList.add('fixed-nav');
    } else {
        nav.classList.remove('fixed-nav');
    }
};



window.addEventListener('scroll', showScroll)
window.addEventListener('scroll', fixNav)

