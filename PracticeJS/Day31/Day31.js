// setTimeout и setInterval

let timerId = setTimeout(func | code, [delay], [arg1], [arg2], ...); // Синтаксис

// Пример

function sayHi() {
    alert('Привет');
}
setTimeout(sayHi, 1000); // Вызов функции спустя одну секунду. (1000 мс = 1с)

// Пример с аргументами

function sayHi(phrase, who) {
    alert(phrase + ', ' + who);
}
setTimeout(sayHi, 1000, 'Привет', 'Джон');


// Отмена через clearTimeout
// Синтаксис
let timerId = setTimeout(...);
clearTimeout(timerId);

// Пример
let timeId = setTimeout(() => alert('ничего не происходит', 1000));
alert(timeId); // идентификатор таймера

clearTimeout(timeId);
alert(timeId); // тот же идентификатор (не принимает значение null после отмены)


//setInterval
// Синтаксис
let timerId = setInterval(func | code, [delay], [arg1], [arg2], ...);

// Пример

let timerId = setInterval(() => alert('tick'), 2000); // повторит с интервалом в 2 секунды 

setTimeout(() => { clearInterval(timeId); alert('stop'); }, 5000); // остановит вывод через 5 секунд

// Вложенный setTimeout (2 способа)

//** вместо: (1ый способ)
// let timerId = setInterval(() => alert('tick'), 2000); 

// (2ой способ)

let timerId = setTimeout(function tick() {
    alert('tick');
    timerId = setTimeout(tick, 2000); // (*)
}, 2000);

// Например, необходимо написать сервис, который отправляет запрос для получения данных на сервер каждые 5 секунд, но если сервер перегружен, то необходимо увеличить интервал запросов до 10, 20, 40 секунд… Вот псевдокод:

let delay = 5000;

let timerId = setTimeout(function request() {
    ...отправить запрос ...

    if (ошибка запроса из - за перегрузки сервера) {
    delay *= 2;
}
timerId = setTimeout(request, delay);
}, delay);



