const expect = require('chai').expect;
const hello = require('../app').hello;
const sumArray = require('../app').sumArray;
const minTemp = require('../app').minTemp;

describe('hello_func', function() {
    it('show hello', function() {
        const result = hello();
        expect(result).to.be.a('string');
        expect(result).equal('hello')
    })
});


describe('sumArray', function() {
    it('empty Array', function() {
        const result = sumArray([]);
        expect(result).to.be.a('number');
        expect(result).equal(0);
    });

    it('one element', function() {
        const result = sumArray([12]);
            expect(result).to.be.a('number');
            expect(result).equal(12)
    });

    it('many arr elements', function() {
        const result = sumArray([1,10,50,100]);
        expect(result).to.be.a('number');
        expect(result).equal(161);
    });
});

describe('temp', function() {
    it('one', function() {
        const result = minTemp(1, -2, -8, 4, 5);
        expect(result).to.be.a('number');
        expect(result).equal(1);
    });

    it('minus', function() {
        const result = minTemp(-12,-5,-137);
        expect(result).to.be.a('number');
        expect(result).equal(-5);
    });

    it('equal numbers', function() {
        const result = minTemp(-10, -5, -3, 3, 12, 45);
        expect(result).to.be.a('number');
        expect(result).equal(3);
    })

    it('different numbers', function() {
        const result = minTemp(-10, -5, -1, 3, 12, 8);
        expect(result).to.be.a('number');
        expect(result).equal(-1);
    })
})