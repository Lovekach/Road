// Логические операторы
// || - или
// && - и
// ! - не
// ?? - оператор нулевого слияния
//

let a = true;
let b = false;

let result = a || b;
console.log(result); // true

let hour = 12;
let isWeekend = true;

if(hour < 10 || hour > 18 || isWeekend) {
    console.log('Офис закрыт');
} else {
    console.log('Офис открыт');
}


let value1 = '';//false
let value2 = 0;//false
let value3 =  'Слово';//true

let result1 = value1 || value2 || value3;
console.log(result1);// 'Слово'


let value4 = '';//false
let value5 = 0;//false
let value6 =  null ;//false

let result2 = value1 || value2 || value3;
console.log(result1);// null


// &&
let hour1 = 12;
let minute = 30;

if(hour === 12 && minute === 30) {
    console.log('Сейчас 12:30');
} else {
    console.log('Сейчас другое время');
}


let a1 = true; // true
let b1 = 'слово'; // true
let c = false; // false
let d = 0; // false

let result3 = a1 && b2 || c && d;
console.log(result3);// 'слово'


//Логический оператор !(не), ??

let m = 0;//false

let result4 = !!m; //Boolean(m)
console.log(result4);// true

// ?? (оператор нулевого слияния)

let r = 0;
let t = 'слово';

const result5 = r ?? t;
console.log(result5);// 0

