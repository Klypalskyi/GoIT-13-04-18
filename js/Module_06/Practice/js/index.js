'use strict'

// let animal = {
//   canSleep: true,
//   canEat: true,
//   canBrathe: true
// }

// let dog = {
//     canBark: true,
//     canJump: true,
//     canBite: true,
// }

// let doberman = {
//   canFind: true,
//   canRun: true
// }

// console.log(animal)
// console.log(dog)
// console.log(doberman)

// let dog = Object.create(animal);
// dog.canBark = true;
// dog.canBite = true;
// dog.canJump = true;
// console.log(dog.canJump);
// console.log(dog.canSleep);
// console.log(dog);

// function Tank (x, y, name, hp, armor, amunition, speed) {
//   this.x = x
//   this.y = y
//   this.name = name
//   this.hp = hp
//   this.armor = armor
//   this.amunition = amunition
//   this.speed = speed
// }

// let panzar = new Tank(20, 20, 'Panzar', 150, 50, 8, 80)
// let leopard = new Tank(30, 48, 'Leopard', 120, 30, 10, 100)

// Tank.prototype.fire = function () {
//   this.canFire() ? (this.amunition -= 1) : prompt('Enter card number')
// }

// Tank.prototype.move = function (a, b) {
//   this.x = a
//   this.y = b
// }

// Tank.prototype.canFire = function () {
//   return this.amunition > 0
// }

// Tank.prototype.repair = function (size) {
//   if (this.canRepair()) {
//     if (this.hp + size > 100) {
//       this.hp = 100
//     } else {
//       this.hp += size
//     }
//   } else {
//     alert('you are have full hp')
//   }
// }

// Tank.prototype.canRepair = function () {
//   return this.hp < 100
// }

// ======================================================================

// function Stels (x, y, name, hp, armor, amunition, speed, camouflage) {
//   Tank.call(this, x, y, name, hp, armor, amunition, speed)
//   this.camouflage = camouflage
// }
// Stels.prototype = Object.create(Tank.prototype)

// Stels.prototype.inviseActivator = function () {
//   console.log('Invisible mode is ON')
// }



// class Tank {
//   constructor (x, y, name, hp, armor, amunition, speed) {
//     this.x = x
//     this.y = y
//     this.name = name
//     this.hp = hp
//     this.armor = armor
//     this.amunition = amunition
//     this.speed = speed
//   }

//   fire () {
//     his.canFire() ? (this.amunition -= 1) : prompt('Enter card number')
//   }

//   move (a, b) {
//     this.x = a
//     this.y = b
//   }

//   canFire () {
//     return this.amunition > 0
//   }

//   repair (size) {
//     if (this.canRepair()) {
//       if (this.hp + size > 100) {
//         this.hp = 100
//       } else {
//         this.hp += size
//       }
//     } else {
//       alert('you are have full hp')
//     }
//   }

//   canRepair () {
//     return this.hp < 100
//   }
// }

// let tiger = new Tank(10, 10, 'Tiger', 100, 100, 10, 50)

// class Stels extends Tank {
//   constructor (x, y, name, hp, armor, amunition, speed, camouflage) {
//     super(x, y, name, hp, armor, amunition, speed)
//     this.camouflage = camouflage
//   }
  
//   inviseActivator () {
//     console.log('Invisible mode is ON')
//   }
// }

// let snake = new Stels(50, 50, 'Snake', 120, 100, 10, 60, true);

// console.log(snake)
// console.log(tiger)
// console.log(panzar);
// console.log(leopard);


// class User {
//   constructor (name, gender, city) {
//     this._name = name;
//     this.gender = gender;
//     this.city = city;
//   }

//   static showPi () {
//     return Math.PI;
//   }

//   get name() {
//     return this._name;
//   }

//   set age(age) {
//     this._age = age;
//   }
//   get age() {
//     return this._age;
//   }

//   getFullInfo() {
//     return `My name is ${this.name}, I am ${this.gender}`;
//   }

//   showCity() {
//     return `My name is ${this.name}, I live in ${this.city}`;
//   }
// }


// let anton = new User('Anton', 'male', 'Odessa');
// let lera = new User('Lera', 'female', 'Kyiv');


// console.log(anton.getFullInfo())
// console.log(lera.showCity())

// console.log(anton.name);

// // anton.name = 'Johny';
// // console.log(anton.name);
// anton.age = 22;

// console.log(anton);
// console.log(lera);
// console.log(User.showPi())
// User.a = 5;
// // в гамбургере так добавлятьобЪект
// console.log(User.a)


// =================06-01==============
// function Account (login, email, friendsCount) {
//   this.login = login;
//   this.email = email;
//   this.friendsCount = friendsCount;
// }

// Account.prototype.getAccountInfo = function() {
//   // debugger
//   return `${this.login}, ${this.email}, ${this.friendsCount}`;
//   }

// const first = new Account('first', 'sdds@sdsd', 20);
// const second = new Account('second', 'sdds@sdddsd', 225);

// console.log(first.getAccountInfo());
// console.log(second.getAccountInfo());