'use strict'
// ==================================================GET ALL USERS
const btnAU = document.querySelector('.btnAU');
const resultAU = document.querySelector('.resultAU');
const apiURL = 'https://test-users-api.herokuapp.com/users/';

let n = 1;

btnAU.addEventListener('click', getAllUsers);

function getAllUsers(evt) {
    evt.preventDefault()
    fetch(apiURL)
        .then(res => {
            if (res.ok) return res.json();
            throw new Error('Err')
        }).then(data => {
            const users = data.data
            createTableItems(users)
        })
        .catch(err => console.log(err))
}

const createTableItems = users => {
    const markup = users.reduce((markup, user) => markup +
        `<tr>
     <td class="nTd">${n++}</td>
     <td class="nTd">${user.id}</td>
     <td class="nameTd">${user.name}</td>
     <td class="ageTd">${user.age}</td>
     </tr> `, '');
    let table = `<table class="table_blur">
     <thead>
     <th>№</th>
     <th>ID</th>
     <th>NAME</th>
     <th>AGE</th>
     </thead>
     <tbody>` +
        markup +
        `</tbody>
     </table>`
    updateTable(table)
}

const updateTable = table => {
    resultAU.innerHTML = table

}


// ==================================================GET USER BY ID
const inputID = document.querySelector('.inputID')
const btnID = document.querySelector('.btnID')
const resultID = document.querySelector('.resultID')


btnID.addEventListener('click', getUserById)

function getUserById(evt) {
    evt.preventDefault()
    fetch(`${apiURL}${inputID.value}`)
        .then(res => {
            if (res.ok) return res.json()
            throw new Error('Err')
        })
        .then(data => {
            if (data.status > 400) {
                return (resultID.innerHTML = 'Такого пользователя в списке нет!')
            } else {
                showUser(data)
            }
        })
        .catch(err => console.log(err))
}

const showUser = data => {
    if (data) {
        let user = data.data
        resultID.innerHTML = `
      <p>ID: ${user.id}</p>
      <p>Name: ${user.name}</p>
      <p>Age: ${user.age}</p>
      `
        inputID.value = '';
    }
}


// ==================================================POST USER
const nameAdd = document.querySelector('.nameAdd')
const ageAdd = document.querySelector('.ageAdd')
const btnAdd = document.querySelector('.btnAdd')


const options =

    btnAdd.addEventListener('click', addtUser)

function addtUser(evt) {
    evt.preventDefault()
    fetch(apiURL, {
            method: 'POST',
            body: JSON.stringify({
                name: nameAdd.value,
                age: ageAdd.value
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => {
            if (res.ok) return res.json()
            throw new Error('Err' + res.statusText)
        })
        .then(data => {
            if (data.status = 201) {
                let user = data.data
                alert(`User ${user.name}, ${user.age} age Succesfully posted!`)
                nameAdd.value = ''
                ageAdd.value = ''
            }
        })
        .catch(err => console.log(err))
}


// ==================================================REMOVE USER
const inputRmv = document.querySelector('.inputRmv')
const btnRmv = document.querySelector('.btnRmv')


btnRmv.addEventListener('click', removeUser)

function removeUser(evt) {
    evt.preventDefault()
    fetch(`${apiURL}${inputID.value}`, {
            method: 'DELETE'
        })
        .then(() => {
            alert('User was succesfully DELETED')
        })
        .catch(err => console.log(err))
}


// ==================================================UPDATE USER
const inputUpd = document.querySelector('.inputUpd')
const nameUpd = document.querySelector('.nameUpd')
const ageUpd = document.querySelector('.ageUpd')
const btnUpd = document.querySelector('.btnUpd')


btnUpd.addEventListener('click', ipdateUser)

function ipdateUser(evt) {
    evt.preventDefault()
    fetch(`${apiURL}${inputUpd.value}`, {
            method: 'PUT',
            body: JSON.stringify({
                name: nameUpd.value,
                age: ageUpd.value
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => {
            if (res.ok) return res.json()
            throw new Error('Err' + res.statusText)
        })
        .then(data => {
            let user = data.data
            alert(`User with ${user.id} was Succesfully updated to ${user.name}, ${user.age}!`)
            inputUpd.value = ''
            nameUpd.value = ''
            ageUpd.value = ''

        })
        .catch(err => console.log(err))
}