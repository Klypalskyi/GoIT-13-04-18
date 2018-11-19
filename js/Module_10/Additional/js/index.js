/*
  Написать функцию fetchCountryData, которая использует
  apiUrl + текущее значение input для составления запроса.

  Формат полного url таков:
    https://restcountries.eu/rest/v2/name/имя-страны

  С помощью fetch сделать запрос по составленому
  адресу. Обязательно обработать вариант с ошибкой запроса
  используя catch.

  Результат запроса вывести в поле result в формате:
    Country name: имя страны
    Capital: столица
    Main currency: название денежной единицы
    Flag: флаг страны

  Все необходимые данные есть в ответе от API.

  PS: при отправке формы перезагружается страница,
  решите эту задачу вспомнив о том, как остановить
  поведение по умолчанию.
*/

// const input = document.querySelector("input");
// const submitBtn = document.querySelector(".js-submit");
// const result = document.querySelector(".js-result");
// const apiUrl = "https://restcountries.eu/rest/v2/name/";

// submitBtn.addEventListener("click", fetchCountryData);

// /*
//   @param {FormEvent} evt
// */
// function fetchCountryData(evt) {
//   event.preventDefault()
//   fetch(`${apiUrl}${input.value}`)
//   .then(response => {
//     if(response.ok)return response.json();
//     throw new Error ('Errrrrr')
//   })
//   .then(data => {
//       data.forEach(dataChild => {
//           const curArr = dataChild.currencies;
//           const getCurName = function() {
//               for (let i of curArr) {
//                   return i.name;
//               }
//           }
//         result.innerHTML =`<p>
//         Country: ${dataChild.name}</br>
//         Capital: ${dataChild.capital}</br>
//         Main currency: ${getCurName()}</br>
//         Flag: <img src=${dataChild.flag}></p>`
//           })
//       })

//   .catch(err => console.log(err))
// }

/*
  Документация API: https://github.com/trostinsky/users-api#users-api

  Просмотр всех записей: https://test-users-api.herokuapp.com/users/

  Написать функцию fetchUsers, которая используя REST сервис
  по адресу https://test-users-api.herokuapp.com/users/
  посылает get запрос и получает ответ.

  Результатом fetch будет массив объектов с полями.

  В элемент result поместить таблицу состоящую из 2-х
  столбцов след формата, где кол-во строк будет такое как
  и кол-во объектов пользователей в ответе:

    ID | NAME | AGE
    id | name | age
    id | name | age
*/

// const getBtn = document.querySelector(".js-get");
// const result = document.querySelector(".result");
// const source = 'https://test-users-api.herokuapp.com/users/'

// let n = 1;
// let name;
// let age;

// getBtn.addEventListener("click", fetchUsers);

// /*
//   @param {FormEvent} evt
// */
// function fetchUsers(evt) {
//   evt.preventDefault()
//   fetch(source)
//   .then(res => {
//     if(res.ok) return res.json();
//     throw new Error('Err')
//   }).then(data => {
//       const users = data.data
//       createTableItems(users)
//   } /*  */)
//   .catch(err => console.log(err))
// }

// const createTableItems = users => {
//     const markup = users.reduce((markup, user) => markup +
//     `<tr>
//      <td>${n++}</td>
//      <td>${user.name}</td>
//      <td>${user.age}</td>
//      </tr> `, '');
//      let table = `<table>
//      <thead>
//      <th>ID</th>
//      <th>NAME</th>
//      <th>AGE</th>
//      </thead>
//      <tbody>`
//      +
//      markup
//      +
//      `</tbody>
//      </table>`

//     updateTable(table)
// }

// const updateTable = table => {
//     result.innerHTML = table
// }

/*
  Документация API: https://github.com/trostinsky/users-api#users-api

  Просмотр всех записей: https://test-users-api.herokuapp.com/users/

  Написать функцию getUserByName, которая используя REST сервис
  по адресу https://test-users-api.herokuapp.com/users/
  посылает запрос с name введенным в input.

  Результатом fetch будет ответ от сервера,
  вывести содержимое всего ответа (id, name, age)
  или 'Такого пользователя в списке нет!'.
*/

const input = document.querySelector('input')
const postBtn = document.querySelector('.js-post')
const result = document.querySelector('.result')
const src = 'https://test-users-api.herokuapp.com/users/'

postBtn.addEventListener('click', getUserByName)

function getUserByName (evt) {
  evt.preventDefault()
  fetch(`${src}${input.value}`)
    .then(res => {
      if (res.ok) return res.json()
      throw new Error('Err')
    })
    .then(data => {
      if (data.status > 400) {
        return (result.innerHTML = 'Такого пользователя в списке нет!')
      } else {
      showUser(data)}
    })
}

const showUser = data => {
  if (data) {
    let user = data.data
    result.innerHTML = `
    <p>ID: ${user.id}</p>
    <p>Name: ${user.name}</p>
    <p>Age: ${user.age}</p>
    `
    input.value =''
  }
}
