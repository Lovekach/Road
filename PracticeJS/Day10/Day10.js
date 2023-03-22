let year = console.log('В каком году я родился');

if (year == 1992) {
    console.log('Ты угадал');
} else {
    console.log('Попытайся еще раз');
}

// Несколько условий:"else if"

let number = console.log('Угадай число от 1 до 3');

if (number == 2) {
    console.log('Попытайся еще раз');
} else if (number == 1) {
    console.log('Снова не угадал, даю еще попытку');
} else {
    console.log('Молодец, у тебя получилось');
}

//Тернарный оператор ?

let age = console.log('Возраст?, 18');

let message = (age < 18) ? 'Привет малолетка' :
    (age < 3) ? 'Привет молокосос' :
        (age > 18) ? 'Привет совершеннолетний' :
            'Какой необычный возраст';

console.log(message);

//Задачи
let answer = promt('Какое оф название JavaScript?', '');

if (answer == 'ECMAScript') {
    console.log('Верно!');
} else {
    console.log('Не знаете?"ECMAScript"')
}

// Задача 2
let costNumber = promt('Какое число?', '');

if (costNumber > 0) {
    console.log(1);
} else if (costNumber < 0) {
    console.log(-1);
} else {
    console.log(0);
}

//Задача 3 
let result = (a + b < 4) ? 'Мало' : 'Много';

//Задача 4
let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
        (login == '') ? 'Нет логина' :
            '';

//Операторы || (ИЛИ), && (И), !(НЕ)
let age1 = promt('Входит ли данное число в диапазон от 14 до 90?', '');

if (age1 >= 14 || age1 <= 90) {
    console.log('Число входит в данный диапазон');
} else {
    console.log('Число не входит в данный диапазон');
}


//Задача
let frofile = promt('Введите свой логин');

if (login == 'Admin') {
    console.log('Введите пароль');
} else if (login == '' || login == 'Escape') {
    console.log('Отменено'); 
} else {
    console.log('Неверный пароль');
}

