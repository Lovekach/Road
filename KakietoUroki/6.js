let name = 'Valeriy'

if (name === 'Valeriy') {
    console.log('Его имя Валерий');
} else {
    console.log('Его не зовут Валерий');
}


let userName = 'Vasya'
let answer = userName === 'Vitaly' ? 'вы правы, его имя Виталий' : 'вы не правы, его имя не Виталий'
console.log(answer);



let age = 18;

let result = age < 3 ? 'Ты еще малыш':
age < 18 ? 'Ты тоже еще малыш':
age >= 18 ? 'Ты уже совершеннолетний':
age > 90 ? 'Ты уже слишком старый' :
'Ты уже не желец, Вась'
console.log(result);


const a = 1;
const b = 1;

if (a > b) {
    console.log('test');
} else if (a === b) {
    console.log('test2');
} else if (a !== b) {
    console.log('test3');
} else {
    console.log('test4');
}


if ( a === 0 && a === b) {
    console.log('hello');
}

if ( a === 0 || a === b) {
    console.log('hello');
}


if (!(a === 0)) { // !false = true
    console.log('hello');
}



const MIN_AGE = 18;

const userData = {
    name: 'Alex',
    age: 20,
    married: true,
    gender: 'male',
};


if (userData.age >= MIN_AGE && userData.gender === 'male' && !userData.married) {
    console.log('Вам доступен контент');
}


if (userData.name === 'John' || userData.age <= MIN_AGE || userData.gender !== 'male'  ) {
    console.log('Вам контент не доступен');
}


if (!(userData.age === MIN_AGE) && userData.name === 'John') {
    console.log('Вам доступен контент');
} 

function hero(bullets, dragons){
    if (bullets >= dragons * 2) {
      return true;
    } else {
      return false;
    }
  }
  

  function chromosomeCheck(sperm) {
    if (sperm === 'XY') {
      return("Congratulations! You're going to have a son.")
    } else {
      return("Congratulations! You're going to have a daughter.")
  
    }
  }


  function checkForFactor (base, factor) {
    return !(base % factor);
  }


  function opposite(number) {
    return -number;
  }

  function checkage(age) {
    if (age < 18) {
      console.log('you are not allowed');
    } else {
      console.log('you are welcome');
    }
  }

  checkage(17);


  let user = 'Миша';
  function changeUserName() {
    user = 'Гриша';
    console.log(user);
  }

  changeUserName();


  function sum(a,b) {
    return a + b;
  }

  let resul = sum(1,2);
  console.log(resul);


  function calc(a,b,operation) {
    if (operation === 'add') {
      return a + b
    }
    if (operation === 'multi') {
      return a * b
    }
    if (operation === 'subtract') {
      return a - b
    }
  }

  calc(1,2, 'add')
  calc(1,2, 'multi')
  calc(1,2, 'subtract')