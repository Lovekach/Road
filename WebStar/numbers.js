let billion = 1000000000; // == 1e9
console.log(billion);


let c = 1.4e5;
console.log(c);

let ms = 1e-5; // 0.00001
console.log(ms);


let n = 500;
console.log(typeof n); // string
console.log(n.toString()); //'500' строка

console.log( 13..toString()); // если нет объявленной переменной то число можно написать через ..toString

// Округление чисел
let q = 5.121414;

console.log(Math.floor(q)); // 5 округление в меньшую сторону
console.log(Math.ceil(q)); // 6 округление в  большую строну
console.log(q.toFixed(2)); // 5.12 округление до n числа знаков после запятой


let w = 5.2;
console.log( +w.toFixed(3)); // '5.200' - 3 знака после запятой

//Неточные вычисления дробных чисел

//В JS любое число представлено в виде 64-битного формата, 52 отводится для хранения значения, если число становится размером 53 бита и более , то число представляется  в тип BigInt




// Infinity - МАТЕМАТИЧЕСКАЯ БЕСКОНЕЧНОСТЬ
console.log(1e1000); // Infinity

let sum = 0.1 + 0.2;  // 0.300000000000000000000004
console.log(sum.toFixed(1)); // 0.3




// Проверка данных на числовые значения
// isNaN и isInfinity

console.log(isNaN(NaN)); // true
console.log(isNaN('str')); // true

console.log(isFinite('asdasd')); // false - происходит преобразование строки к числу
console.log(isFinite('52')); // 52, true - преобр строки в число

console.log(Number.isNaN(34)); // false число не является NaN
console.log(Number.isNaN('asda')); // false строка не является NaN


console.log(Number.isFinite('asdas')); // false
console.log(Number.isFinite('23')); // false
console.log(Number.isFinite(23)); // true


// Получение числа из строки

const price = '100$';
console.log( parseInt(price)); // 100

const price1 = 'r100$';
console.log( parseInt(price1)); // NaN т.к первый символ 'r' а не число!


const price2 = '100.0034$';
console.log(parseFloat(price2)); // 100.0034