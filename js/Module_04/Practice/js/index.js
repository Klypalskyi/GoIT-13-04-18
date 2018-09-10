/* const hotel = {
    name : "Resort Hotel",
    stars: 5,
    capacity: 100,
    getName() {
      return hotel.name;
    }
    getStars() {
        return hotel.stars;
    }
    changeCapacity(num) {
        return hotel.capacity = num;
    }
  }; */

/* console.log ( hotel.getName() ); // Resort Hotel
  console.log ( hotel.getStars() ); // 5 */

/* hotel.changeCapacity(500);
  console.log ( hotel.capacity ); // 200 */

/* for (const key in hotel) {
      console.log ('Key:', key);
      console.log ('Value:', hotel[key]);
      console.log (key, hotel[key]);
  } */
/* const keys = Object.keys(hotel);
  console.log (keys)
  const values = Object.values(hotel);
  console.log (values) */
/*  const entries = Object.entries(hotel);
  console.log (entries)  */

/* for (const entry of entries) {
    const key = entry[0];
    const value = entry[1];

    console.log(`${key}: ${value}`)
  } */

//   console.log(hotel.name)

/* const tasksCompleted = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
}

let max = 0;
let maxSales = "";
for (let name in tasksCompleted) {
  if (max < tasksCompleted[name]) {
    max = tasksCompleted[name];
    maxSales = name;
  }
}

console.log(maxSales); */

// function countProps (obj) {
//   let counter = 0
//   const keys = Object.keys(obj)
//   for (let name in keys) {
//     if (String(name)) {
//       counter += 1;
//     }
//   }
//   return counter
// }

// console.log(countProps({})) // 0

// console.log(countProps({ a: 1, b: 3, c: 'hello'})) // 3

// function getAllPropValues(arr, prop) {
//     let answer = [];
//     for (const obj of arr) {
//       const entries = Object.entries(obj);
//       for (const name of entries) {
//         const key = name[0];
//         const value = name[1];
//         if (prop === key) (
//             answer.push(value)
//         )
//       }
//     }
//     return answer
//   }
  
//   const users = [
//     { name: 'Poly', age: 7, mood: 'happy' },
//     { name: 'Mango', age: 4, mood: 'blissful'},
//     { name: 'Ajax', age: 3, mood: 'tired' }
//   ];
  
//   // Вызовы функции для проверки
//   console.log(
//     getAllPropValues(users, 'name')
//   ); // ['Poly', 'Mango', 'Ajax']
  
//   console.log(
//     getAllPropValues(users, 'mood')
//   ); // ['happy', 'blissful', 'tired']
  
//   console.log(
//     getAllPropValues(users, 'active')
//   ); // []


// function User (name, age, friends) {
//     this.name = name;
//     this.isActive = true;
//     this.age = age;
//     this.friends = friends;
//     this.getUserInfo = function () {
//       return`User ${name} is ${age} years old and has ${friends} friends`
//     }
//   };
  
//   const misha = new User ("Misha", 26, 25);
//   console.log (misha);

//   const roman = new User ('Roman', 18, 100);
//   console.log (roman);
  
// const store = {
//   products: ['bread', 'cheese', 'milk', 'apples'],
//   managers: ['poly', 'mango', 'ajax'],
//   addManager(manager) {
//     this.managers.push(manager);
    
//     console.log(this.managers);
//   },
//   removeManager(manager) {
//     const idx = this.managers.indexOf(manager);
    
//     this.managers.splice(idx, 1);
    
//     console.log(this.managers);
//   },
//   getProducts() {
//     console.log(this.products);
    
//     return this.products;
//   }
// }

// store.addManager('chelsey'); // ['poly', 'mango', 'ajax', 'chelsey']

// store.removeManager('mango'); // ['poly', ajax', 'chelsey']

// store.getProducts(); // ['bread', 'cheese', 'milk', 'apples']

/*  
  Расставьте отсутствующие this в конструкторе объектов Account
*/

// function Account({ login, password, type = "regular" }) {
//     this.login = login;
//     this.password = password;
//     this.type = type;
  
//     this.changePassword = function(newPassword) {
//       password = newPassword;
  
//       return password;
//     };
  
//     this.getAccountInfo = function() {
//       console.log(`
//         Login: ${this.login}, 
//         Pass: ${this.password}, 
//         Type: ${this.type}
//       `);
//     };
//   }
  
//   const account = new Account({
//     login: "Mango",
//     password: "qwe123",
//     type: "premium"
//   });
  
//   console.log(account.login); // 'Mango'
//   console.log(account.password); // 'qwe123'
//   console.log(account.type); // 'premium'
  
//   console.log(account.changePassword("asdzxc")); // 'asdzxc'
  
//   console.log(account.getAccountInfo()); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'
  