// Числа
  
Math
isNaN
parseInt
toFixed

// Math

//возвращает случайное число от 0 до 1
console.log(Math.random());

//Возвращает минимальное число
console.log(Math.min(1, 2)); // 1

//Возвращает максимальное число
console.log(Math.max(1,3)); // 3

//Возвращает число возведенное в степень
console.log(Math.pow(2, 8)); // 256




// Округление

Math.floor
Math.ceil
Math.round
Math.trunc

//Округление в меньшую сторону
Math.floor(2.3); // 2
Math.floor(2.9); // 2

// Округление в большую сторону 
Math.ceil(1.2); // 2
Math.ceil(0.2); // 1

// Окргуление до ближайшего числа
Math.round(2.4); // 2
Math.round(2.5); // 3

// Отбрасываем дробную часть числа и округляем до целого
Math.trunc(5.4); //5
Math.trunc(9.9); //9
Math.trunc(-1.1); // -1


// Метод toFixed

let num = 12.34;
console.log( num.toFixed(1)); // '12.3' - возвращает строковое значение 

let nim = 12.36;
console.log( nim.toFixed(1)); // '12.4'

let nam = 12.34;
console.log( nam.toFixed(5)); // '12.34000'- добавляет недостающие нули


// isFinite и isNaN

console.log( isNaN(NaN)); // true
console.log( isNaN('str')); // true

console.log( NaN === NaN); // false


// isFinite(value)
console.log( isFinite('15')); // true
console.log( isFinite('str')); // false
console.log( isFinite(Infinity)); // false



// Number.isNaN и Number.isFinite

console.log( Number.isFinite(123)); // true
console.log( Number.isFinite(Infinity)); // false
console.log( Number.isFinite(2 / 0)); // false


// Обратите внимание на разный результат
console.log( Number.isFinite('123')); // false
console.log( isFinite('123')); //



// parseInt и parseFloat

console.log( +'100px'); // NaN

console.log( parseInt('100px')); // 100
console.log( parseFloat('12.5em')); // 12.5


console.log( parseInt('12.3')); // 12
console.log( parseFloat('12.3.4')); // 12.3


// вернут NaN

console.log( parseInt('a123')); // NaN


// Способы записи числа

let billion = 1e9; // 1миллиард, буквально: 1 и 9 нулей
console.log( 7.3e9); // 7.3 миллиардов