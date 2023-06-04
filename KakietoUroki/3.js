// let toDolist = ['приготовить завтрак', 'почитать книгу с утра', 'медитация', 'журнал благодарности'];
// let lastTask = toDolist.push('изучить все про массивы');
// console.log(lastTask);
// console.log(toDolist);


// let toDolist1 = ['приготовить завтрак', 'почитать книгу с утра', 'медитация', 'журнал благодарности'];
// let deleteLastTask = toDolist1.pop();
// console.log(toDolist1);
// console.log(deleteLastTask);


// let toDolist2 = ['приготовить завтрак', 'почитать книгу с утра', 'медитация', 'журнал благодарности'];
// let firstTask = toDolist2.unshift('проснутсья в 6:56');
// console.log(toDolist2);
// console.log(firstTask);



// let toDolist3 = ['приготовить завтрак', 'почитать книгу с утра', 'медитация', 'журнал благодарности'];
// let deleteFirstTask = toDolist3.shift();
// console.log(toDolist3);
// console.log(deleteFirstTask);



// let toDolist4 = ['приготовить завтрак', 'почитать книгу с утра', 'медитация', 'журнал благодарности'];
// let newMethod = toDolist4.slice(1, 3); // вырезает элементы из массива и создает новый массив с вырезанными элементами
// console.log(newMethod);


// let toDolist5 = ['приготовить завтрак', 'почитать книгу с утра', 'медитация', 'журнал благодарности'];
// let deleteAnyTask = toDolist5.splice(1, 2);
// console.log(deleteAnyTask);
// console.log(toDolist5);


// let toDolist6 = ['приготовить завтрак', 'почитать книгу с утра', 'медитация', 'журнал благодарности'];
// let addAnyTask = toDolist6.splice(3, 0, 'встать с кресла и пойти за стол');
// console.log(toDolist6);
// console.log(addAnyTask);


// let toDolist7 = [
//     'приготовить завтрак',
//     'почитать книгу с утра',
//     'медитация',
//     'журнал благодарности'];

// for (const element of toDolist7) {
//     console.log(element);
// }


// let toDolist8 = ['приготовить завтрак', 'почитать книгу с утра', 'медитация', 'журнал благодарности'];
// console.log(toDolist8.at(-1));


// let toDolist9 = [ 'медитация',];
// toDolist9.push( 'журнал благодарности');
// toDolist9.unshift('приготовить завтрак', 'почитать книгу с утра')
// console.log(toDolist9);


const users = ['Ivan', 'Petr', 'Anna'];

users.forEach(user => {
    console.log(user);
})


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(num => {
    console.log(`number is ${num}`);
})


const numbers2 = [1, 2, -3, -4, 5, 6];
const firstNegativeNumber = numbers2.find(number => number < 0);
console.log(firstNegativeNumber);


const animals = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
const firstLargeWord = animals.find(word => word.length > 7);
console.log(firstLargeWord);

const ani = ['cat', 'lion', 'dog', 'elephant', 'tiger', 'lion'];
const secondLion = ani.indexOf('lion', 4)
console.log(secondLion);

const anim = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
const searchWordInArr = anim.includes('dog');
console.log(searchWordInArr);


const count = [1, 11, -2, -3, -10, 0, 4, 3, -9];
const onlyNegative = count.filter(num => num < 0);
console.log(onlyNegative);

const diary = [
    { name: 'Anna', age: 25},
    { name: 'Any', age: 35},
    { name: 'Bob', age: 15},
] 

const youngPerson = diary.filter(pers => pers.age < 18);
console.log(youngPerson);


const numbe = [1, 11, -2, -3, 4, -10, 5, 8];
const plusNumber = numbe.filter(numbr => numbr > 0);
console.log(plusNumber);

const person = ['cat' , 'dog', 'monkey', 'horse', 'bird'];
const upperName = person.map( pers => pers.toUpperCase());
console.log(upperName);


const coun = [1, 11, 3, 5, 66, 24, -12, - 13, -10 , 4, 86, 23, 32];
const sortedNum = coun.sort((a,b) => a -b);
console.log(sortedNum);