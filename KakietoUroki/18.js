// console.log(Number('str'));
// console.log(isNaN(Number));

const test = 0.2 + 0.4;
console.log(Number(test.toFixed(3))); 
console.log(test.toFixed(0)); 

console.log(Math.ceil(0.2));
console.log(Math.ceil(0.5));
console.log(Math.ceil(0.9));

console.log(Math.floor(0.9));
console.log(Math.floor(0.5));
console.log(Math.floor(0.1));

console.log(Math.round(0.1));
console.log(Math.round(0.5));
console.log(Math.round(0.9));


console.log(Number('9.99'));
console.log(+'9.99');


console.log(Number.parseInt('9.9px'));
console.log(Number.parseFloat('9.9px'));


const age = 33;
console.log(age.toString());

console.log(7.3e9);