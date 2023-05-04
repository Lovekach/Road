// in, hasOwnProperty
// .toString, JSON.stryngify, JSON.parse
// Ключи обьекта
// for in
// Object.keys, Object.entries, Object.values
// {} === {} - false 


// const user = {
//     name: 'alex',
//     age: null,
//     state: 0,
// }

// console.log('name' in user); // true
// console.log('age' in user); // true
// console.log('surname' in user); // false


// или другая запись 

// console.log(user.hasOwnProperty('name')); // true
// console.log(user.hasOwnProperty('surname')); //false


// .toString, JSON.stryngify, JSON.parse

// str = JSON.stringify(user);
// console.log(JSON.stringify(str)); // конвертация объекта в строчку
// console.log(JSON.parse(str)); // конвертация строчки  в  объект


// for ( let key in user) {
//     const value = user[key];
//     console.log(value);
//     console.log(key);
// }

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// const entries = Object.entries(user);

// for (let i = 0; i < entries.length; entries++) {
//     const value = entries[i];
//     console.log(value);
// }

const userInformation = {
    name: 'Иван',
    surname: 'Иванов',
    age: 15,
    family: {
        dad: {
            name: 'Александр',
            surname: 'Иванов',
            age: undefined,
        },
        mom: {
            name: 'Наталья',
            surname: 'Иванова',
        },
        brother: {
            name: 'Денис',
            surname: 'Иванов',
            age: '10',
        },
    }
}

const listOfFamily = {
    dad: 'Отец',
    mom: 'МАть',
    brother: 'Брат',
}

function getInfo(info) {
    let person = info.name + ' ' + info.surname;
    let countFamily = Object.keys(info.family);
    let str = (`У ${person} ${countFamily.length} членов(-а/-ов) семьи`);

    for (let familyMember in info.family) {
        const data = info.family[familyMember];


        str += ` - ${ listOfFamily[familyMember]}`;

        if (typeof data.age === 'number' || typeof data.age === 'string') {
            str += `(${data.age} лет)`

        } else {
            str += ` (возраст неизвестен)`
        }

    }
}
return str;


const data = getInfo(userInformation);
console.log(data);

getInfo(userInformation);