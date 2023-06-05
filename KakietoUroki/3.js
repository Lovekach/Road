let toDolist = ['приготовить завтрак', 'почитать книгу с утра', 'медитация', 'журнал благодарности'];
let lastTask = toDolist.push('изучить все про массивы');
console.log(lastTask);
console.log(toDolist);


let toDolist1 = ['приготовить завтрак', 'почитать книгу с утра', 'медитация', 'журнал благодарности'];
let deleteLastTask = toDolist1.pop();
console.log(toDolist1);
console.log(deleteLastTask);


let toDolist2 = ['приготовить завтрак', 'почитать книгу с утра', 'медитация', 'журнал благодарности'];
let firstTask = toDolist2.unshift('проснутсья в 6:56');
console.log(toDolist2);
console.log(firstTask);



let toDolist3 = ['приготовить завтрак', 'почитать книгу с утра', 'медитация', 'журнал благодарности'];
let deleteFirstTask = toDolist3.shift();
console.log(toDolist3);
console.log(deleteFirstTask);



let toDolist4 = ['приготовить завтрак', 'почитать книгу с утра', 'медитация', 'журнал благодарности'];
let newMethod = toDolist4.slice(1, 3); // вырезает элементы из массива и создает новый массив с вырезанными элементами
console.log(newMethod);


let toDolist5 = ['приготовить завтрак', 'почитать книгу с утра', 'медитация', 'журнал благодарности'];
let deleteAnyTask = toDolist5.splice(1, 2);
console.log(deleteAnyTask);
console.log(toDolist5);


let toDolist6 = ['приготовить завтрак', 'почитать книгу с утра', 'медитация', 'журнал благодарности'];
let addAnyTask = toDolist6.splice(3, 0, 'встать с кресла и пойти за стол');
console.log(toDolist6);
console.log(addAnyTask);


let toDolist7 = [
    'приготовить завтрак',
    'почитать книгу с утра',
    'медитация',
    'журнал благодарности'];

for (const element of toDolist7) {
    console.log(element);
}


let toDolist8 = ['приготовить завтрак', 'почитать книгу с утра', 'медитация', 'журнал благодарности'];
console.log(toDolist8.at(-1));


let toDolist9 = [ 'медитация',];
toDolist9.push( 'журнал благодарности');
toDolist9.unshift('приготовить завтрак', 'почитать книгу с утра')
console.log(toDolist9);