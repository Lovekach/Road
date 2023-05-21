let name = 'Valeriy'

if (name === 'Valeriy') {
    console.log('Его имя Валерий');
} else {
    console.log('Его не зовут Валерий');
}


let userName = 'Vasya'
let answer = userName === 'Vitaly' ? 'вы правы, его имя Виталий' : 'вы не правы, его имя не Виталий'
console.log(answer);



let age = 18;

let result = age < 3 ? 'Ты еще малыш':
age < 18 ? 'Ты тоже еще малыш':
age >= 18 ? 'Ты уже совершеннолетний':
age > 90 ? 'Ты уже слишком старый' :
'Ты уже не желец, Вась'
console.log(result);


const a = 1;
const b = 1;

if (a > b) {
    console.log('test');
} else if (a === b) {
    console.log('test2');
} else if (a !== b) {
    console.log('test3');
} else {
    console.log('test4');
}


if ( a === 0 && a === b) {
    console.log('hello');
}

if ( a === 0 || a === b) {
    console.log('hello');
}


if (!(a === 0)) { // !false = true
    console.log('hello');
}



const MIN_AGE = 18;

const userData = {
    name: 'Alex',
    age: 20,
    married: true,
    gender: 'male',
};


if (userData.age >= MIN_AGE && userData.gender === 'male' && !userData.married) {
    console.log('Вам доступен контент');
}


if (userData.name === 'John' || userData.age <= MIN_AGE || userData.gender !== 'male'  ) {
    console.log('Вам контент не доступен');
}


if (!(userData.age === MIN_AGE) && userData.name === 'John') {
    console.log('Вам доступен контент');
} 