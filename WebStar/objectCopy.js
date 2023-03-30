//Отличие менжду объектами и примитивами

let message = 'text';
let cloneMessage = message;

console.log(cloneMessage); // text

cloneMessage = 'text 2';
console.log(cloneMessage); // text


//объекты 

const user = {
    name: 'Valeo',
}

const newUser = user;

newUser.name = 'new name';

console.log(user);
console.log(newUser);


// Сравнение обэектов
const a = {};
const b = a;

console.log(a == b); // true
console.log(a === b); // true


const c = {};
const t = {};

console.log(c == t); // false
console.log(c === t); // false


// Клонирование объектов

const person = {
    name: 'Valeriy',
    age: 31,
}

const clone = {};

for(let  key in person) {
    clone[key] = person[key];
}

clone.age = 30;
console.log(person);
console.log(clone);

// Второй способ клонирования объектов Object.assign

const person2 = {
    name: 'Valeriy',
    age: 31,
    size: {
        height: 180,
        weight: 80,
    }
}

const person3 = {
    lastName: 'Zubov',
}

const clone2 = Object.assign({}, person2, person3);

console.log(person2);
console.log(clone2);


