let billion = 1000000000; // == 1e9
console.log(billion);


let c = 1.4e5;
console.log(c);

let ms = 1e-5; // 0.00001
console.log(ms);


let n = 500;
console.log(typeof n);
console.log(n.toString()); // строка

console.log( 13..toString()); // если нет объявленной переменной то число можно написать через ..toString

// Округление чисел
let q = 5.121414;

console.log(Math.floor(q)); // 5 округление в меньшую сторону
console.log(Math.ceil(q)); // 6 округление в  большую строну
console.log(q.toFixed(2)); // 5.12 округление до n числа знаков после запятой


