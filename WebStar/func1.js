let userName = 'Петя'

function showMessage() {
   let userName = 'Вася';
    let message = 'Привет ' + userName;
    console.log(message);
}
showMessage();
console.log(userName);

function sum(a, b) {
    return a + b;
}
let result = sum(3, 4);

console.log(result);





//function Declaration and function Expression
let alertMessage = function() {
    alert('Привет');
}

console.log(alertMessage);

// function alertMessage() {
//     alert('Привет');
// }


function promtMessage() {
    alert('Привет тебе');
}

let newFunc = promtMessage;

promtMessage();
newFunc();


//Разница между Declaration и Expression
sum(3, 7);

// function sum(a, b) {   // Declaretion
//     alert(a + b);
// }

let sum = function(a, b) { // Expression
    alert(a + b);
}


//Стрелочная функция
const arrow = (a, b) => a + b;

// let som = function(a, b) {
//     return a + b;
// }