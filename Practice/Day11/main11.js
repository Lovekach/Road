function sayHi(name) {
    const greeting = 'Привет, ' + name + '!';
    console.log(greeting);
}

sayHi('Миша');
sayHi('Гриша');


function checkAge(age) {
    if ( age < 18) {
        console.log('you are not allowed');
    } else {
        console.log('you are welcome');
    } 
}

checkAge(13);
checkAge(18);
checkAge(20);

let user = 'Миша';

function changeUserName() {
    user = 'Гриша';
    console.log(user);
}

changeUserName();

// function checkAge(age) {
//     if (age >= 18) {
//         return true;
//     } else {
//         return confirm('А родители разрешили?');
//     }
// }

function calc( operation, a, b) {
  if (operation == 'add') {
    return a + b;
  } else if (operation == 'multi') {
    return a * b;
  } else if (operation == 'subtract') {
    return a / b;
  } else {
    return 'Нет такой операции';
  }
    
}

const result1 =  calc('add', 1, 2);
console.log(result1);

const result2 = calc('multi', 1, 2);
console.log(result2);

const result3 = calc('subtract', 1, 2);
console.log(result3);