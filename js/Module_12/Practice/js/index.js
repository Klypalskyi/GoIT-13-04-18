'use strict'

const calc = (function () {
    
    const calcSum = (...args) => {
        const total = args.reduce((acc, args) => acc + args, 0) 
        return total
    };

    const calcMin = (...args) => {
        const total = args.reduce((acc, args) => acc - args, 0)
        return total
    }

    const calcProd = (...args) => {
        const total = args.reduce((acc, args) => acc * args, 1)
        return total
    }

    return {sum: calcSum,
            min: calcMin,
            prod: calcProd}
})();

console.log(calc.sum(5,5,9))
console.log(calc.min(5,5,9))
console.log(calc.prod(5,5,9))


const converter = {};

(function (conv) {

    conv.getFt = (val) => {
        const total = val * 3.28084
        return 'Feet:' + total;
    }

    conv.getInch = (val) => {
        const total = val * 39.37008
        return 'Inches:' + total;
    }

    conv.getMiles = (val) => {
        const total = val * 0.0006213712
        return 'Miles:' + total;
    }

    conv.getNautMiles = (val) => {
        const total = val * 0.0005399568
        return 'Naut Miles:' + total;
    }

    conv.getYards = (val) => {
        const total = val * 1.093613
        return 'Yards:' + total;
    }
    
    

})(converter);


(function (conv) {

    conv.getMm = (val) => {
        const total = val * 1000
        return 'Mm:' + total;
    }

    conv.getSm = (val) => {
        const total = val * 100
        return 'Sm:' + total;
    }

    conv.getDm = (val) => {
        const total = val * 10
        return 'Dm:' + total;
    }

    conv.getKm = (val) => {
        const total = val / 1000
        return 'Km:' + total;
    }
    

})(converter);




console.log(converter.getMm(1))
console.log(converter.getSm(1))
console.log(converter.getDm(1))
console.log(converter.getKm(1))


console.log(converter.getFt(1))
console.log(converter.getInch(1))
console.log(converter.getMiles(1))
console.log(converter.getNautMiles(1))
console.log(converter.getYards(1))