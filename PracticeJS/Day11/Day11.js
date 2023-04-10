function checkAge(age) {
    if (age < 18) {
       console.log('you are not allowed');
    } else {
        console.log('you are welcome');
    }
}
checkAge(17);
checkAge(18);
checkAge(20);

// Задача
function calc(operation, a, b) {
  if (operation === 'add') {
    return a + b;
  } else if (operation === 'multi') {
    return a * b;
  } else if (operation === 'subtract') {
    return a - b;
  } else {
    console.log('Нет данных для операции');
  }
}

console.log(calc('add', 1, 2));
console.log(calc('multi', 1, 2));
console.log(calc('subtract', 3, 2));


