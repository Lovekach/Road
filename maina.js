// Операторы сравнения

// a >= b
// a <= b
// a != b
// a == b // не строгое равенство
// a === b // не строгое равенство

// let result = 'saa' > 1;
// console.log(result);
// console.log(Boolean(result));


// Ветвление и логические операторы


// let main = 'Сколько вам лет?';
// let age = 31;
// let age1 = 20;
// if (age == 31) {
//     console.log('Вам 31 год');
// } if (age1 == 20) {
//     console.log('Вам 20 лет');
// }

// Блок else

// let car = promt('Какая у меня машина?', 'Mazda');


// if(car == 'BMW') {
//     console.log('Ваша машина BMW');
// } else if (car == 'Audi') {
//     console.log('Ваша машина Audi');
// } else {
//     console.log('У вас нет машины');
// }



//Тернарынй оператор



// let message = (car == 'BMW') ? 'Ваша машина BMW' : 
// (car == 'Audi') ? 'Ваша машина Audi' :
// '';

// console.log(message);




//Функции
// let model = 'Tesla'

// function myCar(model) {
//     let model = 'Opel';
//     console.log(model);
// }

// console.log(model);
// // myCar('Bmw');
// myCar('Audi');
// myCar('Mazda');

// Switch/case

// let sum = 10 + 20;

// switch (sum) {
//     case '10':
//         console.log('10');
//         break;
//     case '20':
//         console.log('20');
//         break;
//     case '30':
//         console.log('30');
//         break;
//     default: 
//     console.log('нет значений');
// }


//Циклы
let i = 1;

while (i <= 19) {
    console.log(i);
    i++;
}


do {
    console.log(i);
    i++;
} while (i <= 19);
