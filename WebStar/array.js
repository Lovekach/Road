let array2 = ['стол','стул','шкаф'];

// метод перебора массива через цикл

for (let i = 0; i < array2.length; i++) {  // цикл for
    console.log(array2[i] + ' asd');
}

for( let arrayItem of array2) { // цикл for...of
    console.log(arrayItem);
}


let a = [];
let b = [];

console.log(a === b); // false потому что массивы под капотом имеют объекты, а эти объекты имеют разные ссылки 
console.log(typeof a); // object


let array = ['дом','квартира','комната'];

// ТА ЖЕ ЗАПИСЬ ТОЛЬКО ЧЕРЕЗ ОБЪЕКТ

// let array = {
//     0: 'дом',
//     1: 'квартира',
//     2: 'комната',
// }
//console.log(array[0]); // дом 
//console.log(array[1]); // квартира
//console.log(array[2]); // комната