'use strict';

const products = {
	bread: 10,
	milk: 15,
	apples: 20,
	chicken: 50,
	cheese: 40
};

const order = {
	bread: 2,
	milk: 2,
	apples: 1,
	cheese: 1
};

const mango = new Cashier('Mango', products);

function Cashier(name, productDatabase) {
	this.name = name;
	this.productDatabase = products;
	this.customerMoney = 0;
	this.getCustomerMoney = function(value) {
		this.customerMoney = value;
		return this.customerMoney;
	};
	this.countTotalPrice = function(order) {
		const entriesName = Object.entries(order);
		const entriesPrice = Object.entries(this.productDatabase);
		this.totalOrderItem = 0;
		for (const entryOrder of entriesName) {
			const productOrderName = entryOrder[0];
			const productOrderPrice = entryOrder[1];
			// console.log(productOrderName)

			for (const entryPrice of entriesPrice) {
				const productName = entryPrice[0];
				const productPrice = entryPrice[1];
				// console.log (productName)
				// console.log (productPrice)
				if (productOrderName === productName) {
					this.totalOrderItem += productOrderPrice * productPrice;
				}
			}
		}
		return this.totalOrderItem;
	};
	this.countChange = function(totalPrice) {
		if (this.customerMoney >= this.totalOrderItem) {
				totalPrice = this.customerMoney - this.totalOrderItem;
				return this.onSuccess(totalPrice);
			} else {
			return this.onError();
		}
	};

	this.onSuccess = function(change) {
		return `Спасибо за покупку, ваша сдача ${change}!`;
	};

	this.onError = function() {
		return 'Очень жаль, вам не хватает денег на покупки';
	};

	this.reset = function() {
		this.customerMoney = 0;
	};
}

console.log(mango); // Mango
// console.log(mango.productDatabase); // ссылка на базу данных продуктов (объект products)
// console.log(mango.customerMoney); // 0

const totalPrice = mango.countTotalPrice(order);
console.log(totalPrice);
mango.getCustomerMoney(300);
console.log(mango.customerMoney);
const change = mango.countChange();
console.log(change);
/* if (change !== null) {
	// При успешном обслуживании вызываем метод onSuccess
	mango.onSuccess(change); // Спасибо за покупку, ваша сдача 190
} else {
	// При неудачном обслуживании вызываем метод onError
	mango.onError(); // Очень жаль, вам не хватает денег на покупки
} */
mango.reset();
console.log(mango.customerMoney);
