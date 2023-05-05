// find() => {}
//some() => true/false
// filter() => [1,2,3,4] => [1,2,3]
//map() => ['15', '123'] => [15, 123]


// const prefix = 'PREF_';
// const myArray = ['hi', 'hello'];

// const newArr = myArray.map((elem) =>{
//     return prefix + elem.length ;
// })
// console.log(newArr);

// const myArray = [{
//     name: 'alex123',
//     hasAccount: true,
// }, {
//     name: 'john',
//     hasAccount: false,
// }];


// const newArr = myArray.map((elem) => {
//     if (elem.hasAccount) {
//         return true
//     }

// });

// console.log(newArr);


// const newArr = myArray.filter((elem) => {
//     if (elem.name.length > 4) {
//         return true;
//     }

// })
// console.log(newArr);



// const myArray2 = [1, 2, '3', { hello: 'world'}];

// const elem = myArray.find((value) => {
//     if (value.name === 'alex123'){
//         return true
//     }

// });
// console.log(elem);

// console.log(myArray2.includes({ hello: 'world'})); //false 

// find(true/false) => { hello: 'world'}; возвращает элемент
// some(true/false) => true/false; возвращает булевое значение 


// const data = [{
//     id: 1,
//     title: 'Новость дня',
//     author: 'Alex',
//     likes: 50,
// }, {
//     id: 2,
//     title: 'Важная новость',
//     author: 'Anna',
//     likes: 150,
// }, {
//     id: 2,
//     title: 'Важная новость #2',
//     author: 'John',
//     likes: 140,
// }];

// const data1 = data.filter((elem) => {
//     if (elem.likes > 100) {
//         return true;
//     }
// });

// const data2 = data1.map((elem) => {

//     return {
//         id: elem.id,
//         title: elem.title,
//     }
// });

// const data3 = data1.map((elem) => {
//     const name = elem.author;
//     return name;
// });

// console.log(data1);
// console.log(data2);
// console.log(data3);


// Задача 2
// const task1 = [1, 2, 3, 4, 5];


// let result = 0;
// const arrayTask1 = task1.forEach((elem) => {
//     result += elem;
// });

// console.log(result); 

//Задача 3

// const str = ['my', 'name', 'is', 'Alex'];

// let result = '';
// ['my', 'name', 'is', 'Alex'].forEach((name) => {
//     result += ' ' + name; 
// })

// console.log(result);

//Задача 4

// const badAge = 21;

// const array = [15, 10, 20, 30];

// console.log(array.includes(badAge));

// const result = array.find((number) =>{
//     if(number === badAge) {
//         return true;
//     }
// });

// let resultBoolean = false;

// if(result !== undefined) {
//     resultBoolean = true;
// }
//  console.log(resultBoolean);

// const result = array.some((number) => {
//     if( number === badAge) {
//         return true;
//     }
// });

// console.log(result);

// Задача 5

const users = [{
    name: 'Alex',
    age: 20,
}, {
    name: 'Anna',
    age: 30,
}, {
    name: 'John',
    age: 10,
}];

// const names = [];
// users.forEach((user) => {
//     if (user.age > 18) {
//         names.push(user.name);
//     }

// });

// console.log(names);


const filtered = users.filter((user) => {
    if (user.age > 18) {
        return true;
    }
});

console.log(filtered);


const names = filtered.map((user) => {
    return user.name
})

console.log(names);