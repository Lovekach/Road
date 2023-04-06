// Методы массива 

// Перебрать массив по списку(вывести в консоль массив) через метод forEach
const users = ['Ivan', 'Petr', 'Anna'];

users.forEach(users => { // метод forEach
    console.log(users);
});


// Задача перебрать массив методом forEach
const numbers = [1, 2, 3];
numbers.forEach(number =>{
    console.log(`Number is ${number}` );
});


// Метод find(позволяет найти первый массив согласно заданному условию)
const numbers1 = [1, 11, -2, 3, -10, 4]; // -2
const firstNegativeNumber = numbers1.find(number1 => number1 < 0);
console.log(firstNegativeNumber);

const numbers2 = [ 3, 1, 0, -22, -13, 13, 5, 6, -5, -7]; // 13
const firstPositiveNumber = numbers2.find(number2 => number2 > 4);
console.log(firstPositiveNumber);


const users1 = [
    { name: 'Ivan', age: 18},
    { name: 'Petr', age: 25},
    { name: 'Anna', age: 20},
];

const user1 = users1.find(user => user.name === 'Petr');
console.log(user1);

// метод findIndex 

const numbers3 = [1, 11, 3, -2, 3, -10, 4];
const firstNegativeNumberIndex = numbers3.findIndex(number => number < 0); // метод находит число по условию и возвращает ИНДЕКС этого числа
console.log(firstNegativeNumberIndex); //3 тк первое отрицательное число в массиве -2 с ИНДЕКСОМ 3!
console.log(numbers3[firstNegativeNumberIndex]); // -2



//Метод indexOf

const animals = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
const lionIndex = animals.indexOf('lion'); // нашли индекс первого вхождения строки lion  в массив
console.log(lionIndex); // 4

const animals1 = ['cat', 'dog', 'elephant', 'lion', 'tiger', 'lion'];
const secondLionIndex = animals1.indexOf('lion', 4); // нашли индекс второго вхождения строки lion  в массив
console.log(secondLionIndex); // 5 



//Метод includes

const animals2 = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
const isElephantIncluded = animals2.includes('elephant'); // метод проверяет наличие элемента в массиве 
console.log(isElephantIncluded); // true


// Задача №2

const animals3 = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
const longName = animals3.find(animal => animal.length > 7); // метод поиска элемента в массиве с количеством символов больше 7
console.log(longName);


// метод filter

const animals4 = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
const longWords = animals4.filter(word => word.length > 4); // метод позволяет фильтровать элементы по заданному условию
console.log(longWords); // ['elephant' , 'tiger']


const users2 = [
    {name: 'Ivan', age: 18},
    {name: 'Petr', age: 25},
    {name: 'Anna', age: 20},
    {name: 'Inna', age: 13},
    {name: 'Ulya', age: 17},
];

const adults = users2.filter(user2 => user2.age > 18); // Тот же метод filter позволяет найти объекты в массиве согласно заданному условию
console.log(adults);


// Задание №3

const numbers4 = [1, 11, -2, 3, -10, 5];
const newNegativenumber = numbers4.filter(number4 => number4 < 0); // метод filter позволяет найти объекты в массиве по заданному условию
console.log(newNegativenumber);

// метод map

const animals5 = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
const upperCaseAnimals = animals5.map(word => word.toUpperCase()); // метод примает функцию и подставляет ее к каждому элементу массива
console.log(upperCaseAnimals);


const users3 = [
    {name: 'Ivan', age: 18},
    {name: 'Petr', age: 25},
    {name: 'Anna', age: 20},
];

const userNames = users3.map(user3 => user3.name); // также метод map может использоваться для преобразования объектов в массиве
console.log(userNames); // [ 'Ivan', 'Petr', 'Anna' ]


//Задача №4

const avax = [1, 11, -2, 3, -10, 4];
const newAvax = avax.map(absol => Math.abs(absol)); // метод map берет каждое число и выводит по условию в АБСОЛЮТНОЕ ЗНАЧЕНИЕ - Math.abs() (модуль от числа)
console.log(newAvax); // [ 1, 11, 2, 3, 10, 4 ]





// метод sort

const numbers5 = [1, 11, -2, 3, -10, 4];
const sortedNumbers = numbers5.sort((a, b) => a - b); // метод сортирует элементы массива по заданному условию 
console.log(sortedNumbers); //[ -10, -2, 1, 3, 4, 11 ]


const users4 = [
    {name: 'Ivan', age: 18},
    {name: 'Anna', age: 25},
    {name: 'Inna', age: 20},
];

const sortedUsers = users4.sort((user1, user2) => user1.age - user2.age); // метод сортировки объектов в массиве по условию( возраст по возрастанию)
console.log(sortedUsers); 


// Задача №5

const dot = [1, 11, -2, 3, -10, 4];
const polkadot = dot.sort((num1, num2)=> num2 - num1);
console.log(polkadot);

