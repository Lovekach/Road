// function calc(operation, a, b) {
//     if (operation === 'add') {
//         return a + b;
//     } else if (operation === 'multi') {
//         return a * b;
//     } else if (operation === 'subtract') {
//         return a - b;
//     } else {
//         console.log('Нет данных для операции');
//     }
// }

// console.log(calc('add', 1, 2));
// console.log(calc('multi', 1, 2));
// console.log(calc('subtract', 3, 2));

function calc(operation, a, b) {
    switch (operation) {
        case 'add':
            return a + b;
        case 'multi' :
            return a * b;
        case 'subtract':
            return a - b;
        default: console.log('Нет операций');
    }
}
console.log(calc('add', 1, 2));
console.log(calc('multi', 1, 2));
console.log(calc('subtract', 3, 2));
console.log(calc('asdt', 4, 1)); 


// Конструкциия switch / case

let a = 2 + 2;

switch(a) {
    case 3:
        console.log('Malo');
        break;
    case 4:
        console.log('V tochku');
        break;
    case 5:
        console.log('Perebor');
        break;
    default:
        console.log('Net znacheniy');
}


const numbers = 'Введите число между 0 и 3';

switch(numbers) {
    case 0:
    case 1:
        console.log('Вы выбрали число 0 или 1');
        break;
    case 2:
        console.log('Вы выбрали число 2');
        break;
    case 3:
        console.log('Вы выбрали число 3');
        break;
    default:
        console.log('Вы не выбрали ни одного числа');
}