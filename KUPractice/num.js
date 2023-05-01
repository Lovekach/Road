const test = 0.1 + 0.2;

console.log(test);
console.log(Math.ceil(test));


console.log(Math.ceil(0.1)); // 1
console.log(Math.ceil(0.5)); // 1
console.log(Math.ceil(0.9)); // 1


console.log(Math.floor(0.1)); // 0
console.log(Math.floor(0.5)); // 0
console.log(Math.floor(0.9)); // 0


console.log(Math.round(0.1)); // 0
console.log(Math.round(0.49)); // 0
console.log(Math.round(0.5)); // 1
console.log(Math.round(0.9)); // 1

console.log(test.toFixed(3)); // приводится к строке


console.log(Number('9.99'));
console.log(+('9.99'));

console.log(parseFloat('9.99px')); // 9.99
console.log(parseInt('9.99px')); // 9

test1 = 10;
console.log(test1.toString()); // '10'

console.log(Math.pow(2,5)); // 32
console.log(2 ** 5); // 32


const test2 = 133 / 'test2';

console.log(Number.isNaN(test)); // true
console.log(Number.isInteger(test)); // false
console.log(Math.random()); // 0 - 1

// случайное число 

console.log(Math.floor(Math.random() * 2 + 1)); //  случайное число от 1 - 2

console.log(Math.floor(Math.random() * 5 + 1)); //  случайное число от 5 - 2

console.log(Math.floor(Math.random() * 20 + 1)); //  случайное число от 1 - 20