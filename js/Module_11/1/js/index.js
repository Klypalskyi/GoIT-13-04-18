'use strict'
// ===========================================================================
// ============================ШАБЛОНИЗАЦИЯ===================================
// ===========================================================================

// const source = document.querySelector('#address-template').innerHTML.trim();
// console.log(source);
// const temp = Handlebars.compile(source);
// console.log(temp);
// const context = {
//     "city": "London",
//     "street": "Baker Street",
//     "number": "221B"
// };

// const markup = temp(context);
// console.log(markup);

// const container = document.querySelector('.content-placeholder');
// container.innerHTML = markup;

// ===========================================================================
// const source = document.querySelector('#example-template').innerHTML.trim();
// console.log(source);
// const templateFunc = Handlebars.compile(source);
// console.log(temp);

// const data = {
//     people: [
//         {firstName: 'Homer', lastName: 'Simpson'},
//         {firstName: 'Peter', lastName: 'Griffin'},
//         {firstName: 'Eric', lastName: 'Cartman'},
//         {firstName: 'Kenny', lastName: 'McCormick'},
//         {firstName: 'Bart', lastName: 'Simpson'}
//     ]
// };

// const markup = templateFunc(data);
// console.log(markup);    
// const container = document.querySelector('.content-placeholder');
// container.innerHTML = markup;

// ===========================================================================
// const menuData = {
//     title: 'Eat it createElement, templates rule!',
//     items: ['Handlebars', 'LoDash', 'Pug', 'EJS']
// };

// const source = document.querySelector('#tmp').innerHTML.trim();
// console.log(source);
// const templateFunc = Handlebars.compile(source);
// console.log(templateFunc);

// const markup = templateFunc(menuData);
// console.log(markup);    
// const container = document.querySelector('.content-placeholder');
// container.innerHTML = markup;

// ===========================================================================
// const data = {
//     animals: [
//         {
//             name: "cow",
//             noise: "moooo"
//         },
//         {
//             name: "cat",
//             noise: "meow"
//         },
//         {
//             name: "fish",
//             noise: ""
//         },
//         {
//             name: "farmer",
//             noise: "Get off my property!"
//         }
//     ]
// };

// const source = document.querySelector('#built-in-helpers-template').innerHTML.trim();
// const templateFunc = Handlebars.compile(source);

// const markup = templateFunc(data);
// const container = document.querySelector('.content-placeholder');
// container.innerHTML = markup;

// ===========================================================================
// const gallery = {
//     title: 'Gallery',
//     items: [
//         {img: 'https://placeimg.com/300/150/animals', text: 'animals'},
//         {img: 'https://placeimg.com/300/150/arch', text: 'architecture'},
//         {img: 'https://placeimg.com/300/150/nature', text: 'nature'},
//         {img: 'https://placeimg.com/300/150/people', text: 'people'},
//         {img: 'https://placeimg.com/300/150/tech', text: 'tech'},
//         {img: 'https://placeimg.com/300/150/any', text: 'random'}
//     ]
// };


// const source = document.querySelector('#gallery').innerHTML.trim();
// const templateFunc = Handlebars.compile(source);

// const markup = templateFunc(gallery);
// const container = document.querySelector('.gallery');
// container.innerHTML = markup;

// ===========================================================================
// ============================РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ===========================
// ===========================================================================

// ============================$literals
// let pattern = /in/;
// const string = 'text windows win';

// console.log(string.match(pattern));
// console.log(pattern.test(string));

// ============================$flags
// let string = 'Is that all therre is?',
// reg = /is/ig;

// console.log(string.match(reg));

// ============================$classes
// let string = '12345, q5 wq w. www h - whwhwh',
// // reg = /\D\d/g;
// // reg = /\W\w/g;
// // reg = /\S\s/g;
// reg = /\b\w\d\b/g;

// console.log(string.match(reg));

// let string ='random Text witH a number - 5',
// regV = /[0-9]/g,
// regB = /[a-z]/ig;

// console.log(string.match(regV));
// console.log(string.match(regB));

// ============================$quantity
// let string = '9356 54533, 8665 726 486 5 68 55 3' , 
// regV = /\b\d{2,3}\b/g;

// console.log(string.match(regV))

// ============================$boundaries
// let string = 'sdasd 1 random text 5 afafa',
// // '22'
// regB = /^\d{2}$/;

// console.log(string.match(regB))


// ============================ . ===
// let str = 'The car parked in the ga@gage!.';

// let regV = /.{2,4}$/g;
// console.log(str.match(regV))

// ============================ ^ ===
// [^....] = Исключение
// ^ = Начало строки
// let str = 'The car par ked in the ga@ gage!.';

// let regV = /\b[^c]ar\b/g;
// console.log(str.match(regV))

// ============================ + ===
// let str = '2597-7896-8974-3698';

// let regV = /\d+/ig;
// console.log(str.match(regV))

// ============================ () === | ===
// let str = 'The car par ked in the gar gage!.';

// let regV = /\b(c|g|p)ar\b/g;
// console.log(str.match(regV));

// ============================ ? === * ===
// const str = 'Javascript';
// const atr = 'JavaScript';
// const reg = /Java(?=script)/;
// console.log(str.match(reg))
// console.log(atr.match(reg))