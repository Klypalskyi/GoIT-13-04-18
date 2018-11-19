const globalVar = {};

(function (gv) {
    // Приватная функция, доступная только внутри замыкания
    const privateFn = () => console.log("Shhhh, this is private!");

    const movieFetch =() => {
         return fetch(url)
        .then(response => response.json())
        .then(data => data.sort())
    }

    // Откроем методы через интерфейс globalVariable,
    // закрыв имплементацию внутри замыкания
    gv.books = () => {
        privateFn();
        console.log("Hello, I am a global variable");
    };

    gv.music = ['sdfsd','sfsdfsdf0', 'sfsdfsdf'],

    gv.movies = () => {
        movieFetch()
    }
})(globalVar);
console.log('global',globalVar);
console.log(globalVar.music);



// Collapse 
// Message Input

// Message #random

// Thread
// #random

