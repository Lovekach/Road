let toDoList = ['почитать', 'помыть посуду', 'помыть машину'];
let taskCount = toDoList.length; // получение длины массива
console.log(taskCount);
let firstElement = toDoList[0];// получаем первый элемент массива
console.log(firstElement);
console.log(toDoList[toDoList.length - 1]); // получаем второй элемент массива

// let toDoList1 = Array.of('почитать', 'помыть посуду', 'помыть машину'); иной способ записи массива
// let toDoList2 = new Array('почитать', 'помыть посуду', 'помыть машину'); и еще один способ записи массива



//Замена элемента в массиве

let toDoList1 = ['почитать', 'помыть посуду', 'помыть машину'];
toDoList1[1] = 'прогуляться';
console.log(toDoList1);


// Методы pop, push, shift, unshif, slice, splice

const toDoList5 = ['почитать', 'помыть посуду', 'помыть машину'] ;
toDoList5.unshift('сходить в зал'); // метод добавления элемента в начало массива
console.log(toDoList5); // ['сходить в зал', 'почитать', 'помыть посуду', 'помыть машину']


const toDoList2 = ['почитать', 'помыть посуду', 'помыть машину'];
toDoList2.push('сходить в магазин'); // метод добавления элемента в конец массива
console.log(toDoList2); // ['почитать', 'помыть посуду', 'помыть машину', 'сходить в магазин']


const toDoList3 = ['почитать', 'помыть посуду', 'помыть машину'];
const lastItem = toDoList3.pop(); // удаляет последний элемент в массиве
console.log(toDoList3); // ['почитать', 'помыть посуду']
console.log(lastItem); //  'помыть машину'



const toDoList4 = ['почитать', 'помыть посуду', 'помыть машину'];
let firstItem = toDoList4.shift(); // удаление первого элемента в массиве
console.log(toDoList4); //  ['помыть посуду', 'помыть машину']
console.log(firstItem); //  'почитать'



//Метод slice и splice 

const toDoList6 = ['почитать', 'помыть посуду', 'помыть машину'];
let firstTwoTask = toDoList6.slice(0, 2); // метод помогает выбрать определенные элементы в массиве
console.log(firstTwoTask); // ['почитать', 'помыть посуду']


const toDoList7 = ['почитать', 'помыть посуду', 'помыть машину', 'посадить цветы'];
let deleteTask = toDoList7.splice(1, 1); // удаляет элемент массива по индексу 
console.log(toDoList7); // ['почитать', 'помыть машину' , 'посадить цветы']
console.log(deleteTask); // 'помыть посуду'




// Метод splice который позволяет добавлять элементы в массив


const toDoList8 = ['почитать', 'помыть посуду', 'помыть машину', 'посадить цветы'];
let addTask = toDoList8.splice(2, 0, 'убраться в доме', 'приготовить еду', 'постирать вещи');
console.log(toDoList8);

for (const task of toDoList8) { // Вывод массива с помощью этого цикла
    console.log(task);
}


// Задание 

const taskForToday = ['сделать зарядку', 'приготовить завтрак', 'почитать книгу', 'сделать задание по массивам'];
taskForToday.unshift('проснутсья в 7:00'); // добавление элемента в начало массива
console.log(taskForToday);

const taskForToday1 = ['сделать зарядку', 'приготовить завтрак', 'почитать книгу', 'сделать задание по массивам'];
let deleteFirstTask = taskForToday1.shift(); // удаление первого элемента в массиве
console.log(taskForToday1);


const taskForToday2 = ['сделать зарядку', 'приготовить завтрак', 'почитать книгу', 'сделать задание по массивам'];
taskForToday2.push('проснутсья в 7:00'); // добавление элемента в конец массива
console.log(taskForToday2);


const taskForToday3 = ['сделать зарядку', 'приготовить завтрак', 'почитать книгу', 'сделать задание по массивам'];
let deleteFirstTask1 = taskForToday3.pop('проснутсья в 7:00'); // удаление последнего элемента в массиве
console.log(taskForToday3);


const taskForToday4 = ['сделать зарядку', 'приготовить завтрак', 'почитать книгу', 'сделать задание по массивам'];
let firstTwoTaskToday = taskForToday4.slice(1, 3);
console.log(firstTwoTaskToday);


const taskForToday5 = ['сделать зарядку', 'приготовить завтрак', 'почитать книгу', 'сделать задание по массивам'];
let deleteOneTwoTask = taskForToday5.splice(0, 2); // метод удаления элементов из массива 
console.log(taskForToday5);




const taskForToday6 = ['сделать зарядку', 'приготовить завтрак', 'почитать книгу', 'сделать задание по массивам'];
taskForToday6.splice(3, 0, 'погулять вечером', 'посмотреть фильм');
console.log(taskForToday6);

