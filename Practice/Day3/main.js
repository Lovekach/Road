// Условия if, else if, else.

let age = 27;

if (age == 30) {
    console.log('Ваш возраст 30');
} else if (age == 29) {
    console.log('Ваш возраст 29');
} else if (age == 28 ) {
    console.log('Ваш возраст 28');
} else {
    console.log('Ни один из вариантов не подходит условию задачи');
}




let accessAllowed;
let count = 13;

if (count >= 23) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}
console.log(accessAllowed);

//Тернарный оператор.

let count1 = 23;
let accessAllowed1 = count1 > 23 ? true : false;

console.log(accessAllowed1);
