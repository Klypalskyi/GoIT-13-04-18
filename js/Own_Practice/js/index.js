'use strict'


const tbody = document.querySelector('tbody');
const gr = [...document.querySelector('#gr').children];
const rg = [...document.querySelector('#rg').children];

console.log(tbody);
console.log(gr);
console.log(rg);


for (let tdg of gr) {
    if (tdg.classList.contains('gnrd')) {
        console.log(tdg)
        const val = parseFloat(tdg.innerHTML);
        console.log(val);

        if (val > 30) {
            tdg.style.background='rgb(240, 4, 4)';
        } 
        
        if (val > 40) {
            tdg.style.background='rgb(224, 56, 5)';
        }

        if (val > 50) {
            tdg.style.background='rgb(224, 93, 5)';
        }

        if (val > 60) {
            tdg.style.background='rgb(224, 173, 5)';
        }

        if (val > 70) {
            tdg.style.background='rgb(191, 224, 5)';
        }

        if (val > 80) {
            tdg.style.background='rgb(111, 224, 5)';
        }

        if (val > 90) {
            tdg.style.background='rgb(5, 224, 5)';
        }

        
    }
}


for (let tdr of rg) {
    if (tdr.classList.contains('rdgn')) {
        console.log(tdr)
        const valu = parseFloat(tdr.innerHTML);
        console.log(valu);

        if (valu > 30) {
            tdr.style.background='rgb(5, 224, 5)';
        } 
        
        if (valu > 40) {
            tdr.style.background='rgb(111, 224, 5)';
        }

        if (valu > 50) {
            tdr.style.background='rgb(191, 224, 5)';
        }

        if (valu > 60) {
            tdr.style.background='rgb(224, 173, 5)';
        }

        if (valu > 70) {
            tdr.style.background='rgb(224, 93, 5)';
        }

        if (valu > 80) {
            tdr.style.background='rgb(224, 56, 5)';
        }

        if (valu > 90) {
            tdr.style.background='rgb(240, 4, 4)';
        }

        
    }
}