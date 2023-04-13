// Планирование: setTimeout и setInterval

const printHello = (text) => {
    console.log(text);
};

// setTimeout(printHello, 2000,'Нaш текст' ); // Корректный вариант
                                                

                                                // либо

// setTimeout(() => {
//     printHello('Параметр');                //    второй вариант 
// }, 3000);


let timerId = setTimeout(printHello, 1000, 'Наш текст');
clearTimeout(timerId); // остановка нашей ассинхронной операции


const customSetInterval = (func, interval, ...params) => {
    setTimeout(() => {
        func(...params);
        customSetInterval(func, interval, ...params);
    }, interval);
}