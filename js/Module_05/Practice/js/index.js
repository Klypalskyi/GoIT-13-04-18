'use strict';

// const scientist = [
//     { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
//     { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
//     { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
//     { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
//     { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
//     { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
//     { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
//     { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
//     { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
//     { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
//     { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
//     { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
// ];
// // 1) отримати масив вчених що народилися в 19 ст
// // 2) знайти суму років скільки прожили всі вченні
// // 3) Відсортувати вчених по алфавіту
// // 4) Відсортувати вчених по даті народження
// // 5) Відсортувати вчених по кількості прожитих років
// // 6) Видалити з масива вчених що родилися в 15 або 16 або 17 столітті
// // 7) Знайти вченого який народився найпізніше.
// // 8) Знайти рік народження Albert Einstein
// // 9) Знайти вчених прізвище яких починається на літеру С
// // 10) Видалити з масива всіх вчених імя яких починається на A

// const birthNineteen = (arr) => arr.filter(arr => arr.year >= 1800)
// const resultOne = birthNineteen(scientist);
// console.log(resultOne)

// const life = (arr) => arr.map(arr => arr.passed - arr.year).reduce((acc, value) => acc + value, 0);
// const resultTwo = life(scientist);
// console.log(resultTwo)

// const sortByName = (a, b) => a.first > b.first ? 1 : -1 ;
// const resultThree = scientist.sort(sortByName);
// console.log(resultThree);

// const sortByBdate = (a, b) => a.year - b.year;
// const resultFour = scientist.sort(sortByBdate);
// console.log(resultFour);

// const sortByLife = (a, b) => (a.passed - a.year) - (b.passed - b.year);
// const resultFive = scientist.sort(sortByLife);
// console.log(resultFive);

// const birthDown = (arr) => arr.filter(arr => arr.year >= 1800);
// const resultSix = birthDown(scientist);
// console.log(resultSix)

// const maxBirthSort = (a, b) => b.year - a.year;
// const resultSeven = scientist.sort(maxBirthSort)
// console.log(resultSeven[0])

// const findYear = (arr, name) => arr.find(arr => arr.last === name).year;
// const resultEight = findYear(scientist, "Einstein");
// console.log(resultEight)

// const findLastC = (arr) => arr.filter(arr => arr.last[0] === 'C');
// const resultNine = findLastC(scientist);
// console.log(resultNine);

// const removeNameA = (arr) => arr.filter(arr => arr.first[0] !== 'A');
// const resultTen = removeNameA(scientist);
// console.log (resultTen)

// =======================================

// const products = {
// 	bread: 10,
// 	milk: 15,
// 	apples: 20,
// 	cheese: 30,
// 	chicken: 40
// };

// const orderA = {
// 	bread: 2,
// 	apples: 4,
// 	chicken: 1
// };

// const orderB = {
// 	bread: 1,
// 	milk: 2,
// 	cheese: 3
// };

// const getTotalPrice = (products, order) => {
// 	const productsDB = [];
// 	const orderCount = [];
// 	const forSale = [];

// 	for (let item in products) {
// 		let product = {};
// 		product.name = item;
// 		product.price = products[item];
// 		productsDB.push(product);
// 	}

// 	for (let item in order) {
// 		let productSale = {};
// 		productSale.name = item;
// 		productSale.count = order[item];
// 		orderCount.push(productSale);
// 	}

// 	for (let elem of orderCount) {
// 		for (let item of productsDB) {
// 			if (elem.name === item.name) {
// 				elem.price = item.price;
// 				forSale.push(elem);
// 			}
// 		}
//     }
    
// 	const count = forSale.reduce((acc, value) => acc + value.price * value.count, 0);

// 	return count;
// };

// console.log(getTotalPrice(products, orderA)); // 140

// console.log(getTotalPrice(products, orderB)); // 130