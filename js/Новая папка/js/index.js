'use strict'

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
const gallery = {
    title: 'Gallery',
    items: [
        {img: 'https://placeimg.com/300/150/animals', text: 'animals'},
        {img: 'https://placeimg.com/300/150/arch', text: 'architecture'},
        {img: 'https://placeimg.com/300/150/nature', text: 'nature'},
        {img: 'https://placeimg.com/300/150/people', text: 'people'},
        {img: 'https://placeimg.com/300/150/tech', text: 'tech'},
        {img: 'https://placeimg.com/300/150/any', text: 'random'}
    ]
};


const source = document.querySelector('#gallery').innerHTML.trim();
const templateFunc = Handlebars.compile(source);

const markup = templateFunc(gallery);
const container = document.querySelector('.gallery');
container.innerHTML = markup;
