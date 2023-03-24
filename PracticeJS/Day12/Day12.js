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
  