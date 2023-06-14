const printHello = (text) => {
    console.log(text);
};

setTimeout(() => {
    printHello('НАш текст')
}, 3000)

let timerId = setTimeout(printHello, 2000, 'Привет');

clearTimeout(timerId);


let timerId2 = setInterval(printHello, 2000, 'Интервал');

const customSetInterval = (func, interval, params) => {
    setTimeout(() => {
        func(params);
        customSetInterval = (func, interval, params);
    }, interval);
};

customSetInterval();