// Замыкание 

let count = 0;

function logCount() { // функция
    let localCount = 1; // объявим перменную в функции logCount
    console.log(localCount); // локальная переменная
    console.log(count); // внешняя переменная
}

logCount(); // 1 // 0


// Задача



function createCounter() {
   let count = 0;
   return function() {
    count++;
    return count;
   }
    
}

let counterA = createCounter();
let counterB = createCounter();

console.log(counterA());
console.log(counterA());
console.log(counterA());

console.log(counterB());
