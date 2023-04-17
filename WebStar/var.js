// КЛЮЧЕВОЕ СЛОВО var. ГЛОБАЛЬНЫЙ ОБЪЕКТ window. ОБЪЕКТ ФУНКЦИИ

// УСТАРЕВШЕЕ КЛЮЧЕВОЕ СЛОВО var

// const, let, var

const printMessage = () => {
    var message = 'Привет';
    console.log(message);
}

printMessage(); // Привет

console.log(message); // ошибка


if(true) {
    let message1 = 'Hello';
}

console.log(message1); // ошибка (можно только внутри функции вывести в log)

if(true) {
    var message2 = 'Hello';
}

console.log(message2); // 'Hello' (var всплывает за область лексического локального окружения)


// ГЛОБАЛЬНЫЙ ОБЪЕКТ window

window.alert('Text'); // Text

alert('Text'); // Text

var message3 = 'Hello';
console.log(window.message3); // Hello (работает только с var!)


let message4 = 'Hello';
console.log(window.message4); // undefined (не работает с const и let)



// ОБЪЕКТ ФУНКЦИИ

const  printMess = (a, b) => {
    console.log(a, b);

    printMess.counter = 0;
}

printMess();

console.log(printMess.name); // printMess
console.log(printMess.length); // 2 (количество параметров)
console.log(printMess.counter); // 0 

