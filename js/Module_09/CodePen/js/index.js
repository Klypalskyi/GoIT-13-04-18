const colors = ['#FFFFFF', '#F44336', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];
const body = document.querySelector('body');
const start = document.querySelector('.js-start');
const stop = document.querySelector('.js-stop');

start.addEventListener('click', startBg);
// stop.addEventListener('click', stopBg);

function startBg () {

    for (let i of colors) {
        body.style.background = i;
        setInterval(startBg, 1000);
        
        
  }
}
  
