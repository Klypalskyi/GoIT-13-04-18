'use strict';

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempts = 3;
let userInput;
let userPass = false;

do {
    if (userPass === true) {
        break;
    }
    console.log(attempts);
    userInput = prompt ('Введите пароль');
    attempts -= 1;
    if ( userInput === null) {
        alert ('Всего хорошего!');
        break;
    }

    for (let pass of passwords) {
        if (userInput === pass) {
            userPass = true;
            alert ('Добро пожаловать!');
            break;
        }  else if (userInput !== pass) {
            if (attempts === 0) {
                alert ('У вас закончились попытки, аккаунт заблокирован!');
                break;
            }
            alert(`Неверный пароль, у вас осталось ${attempts} попыток`);
            break;
        }
    } 
} while (
    userPass !== false 
    || userInput !== null 
    && attempts !== 0);