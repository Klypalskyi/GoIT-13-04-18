'use strict'

// const guest = {
//     id: 3,
//     name: "Mango",
//     age: 5,
//     isHappy: true,
//     friends: ['Poly', 'Ajax']
// }

// const guestJSON = JSON.stringify(guest, null, 2);
// console.log(guestJSON);

// const guestPARS = JSON.parse(guestJSON);
// console.log(guestPARS)


// fetch("https://api.myjson.com/bins/k9i31", {
//     method: 'GET',
//     headers: {
//         "Content-type": "application/json",
//     }
// })
//   .then(response => {
//     if (response.ok) return response.json();

//     throw new Error ('Error' + response.statusText)
//   })
//   .then(data => {
//     return console.log(data)
//   })
//   .catch(error => {
//     return console.log('ERROR' + error)
//   });

//   const date = new Date();
//   console.log(date.getDate())


// =================================POST TO API
// const newPost = {
//     author: 'Mango',
//     body: 'CRUD is awesome',
//   };

//   const url = 'https://jsonplaceholder.typicode.com/posts';
//   const options = {
//       method: 'POST',
//       headers: {
//           'Content-Type' : 'application/json'
//       },
//       body: JSON.stringify(newPost),
//   }
  
//   fetch(url,options)
//   .then(res => {
//       if(res.ok) return res.json();

//       throw new Error ('Error');
//   })
//   .then(post => console.log(post));


// =================================GET FROM API
// const getPostById = id =>
// fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//   .then(response => response.json())

// getPostById(8).then(post => console.log(post));
// getPostById(85).then(post => console.log(post));
// getPostById(12).then(post => console.log(post));


// =================================PUT TO API
// const postToUpdate = {
//     body: 'CRUD is realy awesome',
//   };
  
//   fetch('https://jsonplaceholder.typicode.com/posts/1', {
//       method: 'PUT',
//       body: JSON.stringify(postToUpdate),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8"
//       }
//     })
//     .then(res => res.json())
//     .then(data => console.log(data));


// =================================DELETE FROM API
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'DELETE'
// }).then(() => console.log('success'))
// .catch(error => console.log('ERROR' + error));