// Про this еще подробнее


const phoneBook = {
    list: {
        "John": 123456789,
    },
    add(name, number) {
        phoneBook.list[name] = number; // изменения ищите на этой строке
    }
};

// создадим копию книги
const phoneBookCopy = Object.assign({}, phoneBook);
// очистим список контактов
phoneBookCopy.list = {};
// list пуст
console.log(phoneBookCopy); // { list: {}, add: [Function: add] } 

// добавим новый контакт
phoneBookCopy.add('Art', '123');
// и увидим что он не добавился в phoneBookCopy
console.log(phoneBookCopy); // { list: {}, add: [Function: add] }
// он добавился в phoneBook
console.log(phoneBook); // { list: { John: 123456789, Art: '123' }, add: [Function: add] } 


// this не фиксирован

function addRecord(key, value) { // функция принимает ключ и значение
    this.list[key] = value; // у объекта, который вызвал функцию, в свойстве list свойству [key] присваиваем value 
}

const phoneBook = { // создадим книгу контактов
    list: {
        "John": 123456789,
        "Jane Doe": 987654321,
    },
    addRecord // добавляем объекту функцию addRecord
};

const toDoList = {  // создадим туду лист
    list: {
        "make a video": "open",
    },
    addRecord // добавляем объекту функцию addRecord
}

// теперь можно вызвать toDoList.addRecord с аргументами key и value
toDoList.addRecord('do something', 'open'); // в этот момент в addRecord - this === toDoList
console.log(toDoList.list); // { 'make a video': 'open', 'do something': 'open'} 


