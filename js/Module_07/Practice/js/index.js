// let title = document.querySelector('.title');
// console.log(title)

// let li = [...document.querySelectorAll('.item')]
// console.log(li)

// let arr = Array.from(li);
// console.log(arr)

// ==============elements==================

// let ul = document.querySelector('.list');
// console.log(ul);
// console.log(ul.children);
// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);
// console.log(ul.parentElement);

// ==================classlist======================
// let text = document.querySelector('.par');
// console.log(text);
// console.log(text.classList.length);
// console.log(text.classList.contains('text'));
// text.classList.add('test-class');
// text.classList.remove('par');
// text.classList.toggle('show');
// console.log(text.classList.toString());

// ==================attr========================
// const link = document.querySelector('.link');
// console.log(link);
// console.log(link.hasAttribute('href'));
// console.log(link.getAttribute('href')); console.log(link.href);
// link.setAttribute('title', 'superlink');
// link.setAttribute('id', 'idFromJs');
// a.setAttribute('id', 'link-one');

// =========================data=================
// const dataCustom = document.querySelector('[data-animal]');
// console.log(dataCustom);
// console.log(dataCustom.dataset.animal);

// =====================create===================
// let mainTitle = document.createElement('h1');
// mainTitle.classList.add('main-title');
// mainTitle.textContent = 'I am Title crated from JS';
// console.log(mainTitle);
// let container = document.querySelector('div');
// container.append(mainTitle);
// container.prepend(mainTitle);
// container.after(mainTitle);
// container.before(mainTitle);
// let list = document.querySelector('.list');
// list.after(mainTitle);
// list.replaceWith(mainTitle)
// console.log(container)
// console.log(list)

// ========================styles===============
// let caption = document.querySelector('.title');
// console.log(caption);
// caption.style.fontSize = '130px';

// =======================innerHTML + textContent=================
// let caption = document.querySelector('.title')
// console.log(caption)
// console.log(caption.textContent);
// <=>
// console.log(caption.innerHTML);
// caption.textContent = '<span>Test title</span>';/* Показывает ТЕГ */
// caption.innerHTML = '<span>Test title</span>'; /* НЕ Показывает ТЕГ, но отображает в ИНСПЕКТОРЕ */

// ============CLONE================
// let article = document.querySelector('.article');
// const cloneArticle = article.cloneNode(true);
// console.log(cloneArticle)

// ==============Documet Fragment================
// let frag = document.createDocumentFragment();
// for (let i =1; i <= 5; i++) {
//     let box = document.createElement('div');
//     box.classList.add('box');
//     frag.append(box);
// }

// ================BOM AND GPS=====================
// console.log(navigator);
// console.log(navigator.userAgent);
// console.log(navigator.vendor);
// console.log(window.screen);
// console.log(window.screen.availWidth);
// console.log(window.screen.availHeight);
// console.log(location)
// console.log(history)

// function showLocation(position) {
//     // console.log(position)
//     let latitude = position.coords.latitude;
//     let longitude = position.coords.longitude;
//     alert ('Latitude :' + latitude + 'Longitude :' + longitude);
// }

// function getLocation () {
//     if(navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showLocation, errorHandler);
//     } else {
//         alert ("Sorry, browser doesn't support" )
//     }
// }

// 