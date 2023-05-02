// const key = [1, 2, 3];

// const value = 'Привет';
// const obj = {
//     value: 'value',
//     value,
// };

// console.log(obj);
// console.log(typeof obj);


// const user = {
//     name: 'Alex',
//     age: 18,
//     state: 123
// };

// console.log('age' in user); // true
// console.log('id' in user); // false
// console.log(user.hasOwnProperty('name')); // true
// console.log(user.hasOwnProperty('id')); // false 

// if(typeof user.state === "string" || typeof user.state === 'number') {
//     console.log('пРивет');
// } else {
//     user.state === null;
// }

// const key = 'state';

// console.log('state' in user);

// const str = JSON.stringify(user) // конвертация из объекта в строчку
// console.log(typeof str); // 'string'
// console.log(JSON.parse(str)); // из строки в объект 
// console.log(typeof JSON.parse(str)); // 'object'


// for( let i in user) {
//     const value = user[i];
//     console.log(i);
//     console.log(value);
// }


// console.log(Object.keys(user)); // key
// console.log(Object.values(user)); // значение key
// console.log(Object.entries(user)); // выводит ключ и значение


// const entries = Object.entries(user);

// for (let i = 0; i < entries.length; i++) {
//     const entry = entries[i];
//     const key = entry[0];
//     const value = entry[1];


//     console.log(key, value);
// }


// const obj1 = { test: 'hello'};
// const obj2 = { test: 'hello'};

// console.log(obj1 === obj2); // false тк выделили разные ячейки для хранения в  памяти 

// const obj3 = { test: 'hello'};
// const obj4 = obj3;

// console.log(obj1 === obj2); // true тк одна ячейка для хранения в памяти



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
            name: 'Константин',
            surname: 'Иванов',
            age: '10',
        },
    }
}



