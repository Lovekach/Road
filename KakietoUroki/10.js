// const printHello = (text) => {
//     console.log(text);
// };

// setTimeout(() => {
//     printHello('НАш текст')
// }, 3000)

// let timerId = setTimeout(printHello, 2000, 'Привет');

// clearTimeout(timerId);


// let timerId2 = setInterval(printHello, 2000, 'Интервал');

// const customSetInterval = (func, interval, params) => {
//     setTimeout(() => {
//         func(params);
//         customSetInterval = (func, interval, params);
//     }, interval);
// };

// customSetInterval();

// const timer = setTimeout(function() {
//     console.log('Прошло 2 секунды');

// }, 2000);

// function logger() {
//     console.log('Прошло 3 секунды');
// }

// const nimerId = setTimeout(logger, 3000);

// let secunda = 0;
// function secundomer(secunda) {
//     console.log(secunda++);
// }

// setInterval(secundomer, 1000)

// let timerId = setInterval(() {
//     console.log('tick');
// },2000);

// setTimeout(() {
//     clearInterval(timerId);
//     console.log('Stop');
// },5000);


// function printNumbers(from, to) {
//     let current = from;

//     let timerId = setInterval(function() {
//         console.log(current);
//         if (current === to) {
//             clearInterval(timerId);
//         }
//         current++
//     }, 1000);
// }

// printNumbers(0, 10);

setTimeout(function go() {
    console.log(current);
    if (current < to) {
        setTimeout(go, 1000)
    }
    current++;

}, 1000);

printNumbers(0, 10);