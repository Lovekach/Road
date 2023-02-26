// Условия if, else if, else.

let age = 27;

if (age == 30) {
    console.log('Ваш возраст 30');
} else if (age == 29) {
    console.log('Ваш возраст 29');
} else if (age == 28 ) {
    console.log('Ваш возраст 28');
} else {
    console.log('Ни один из вариантов не подходит условию задачи');
}




let accessAllowed;
let count = 13;

if (count >= 23) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}
console.log(accessAllowed);

//Тернарный оператор.

let count1 = 23;
let accessAllowed1 = count1 > 23 ? true : false;

console.log(accessAllowed1);

let ageBoy = 18;

let findAge = ageBoy == 18 ? 'Мальчику 18 лет' :
age == 19 ? 'Мальчику 19 лет' : 
age == 20 ? 'Мальчику 20 лет' : 
'Мне не 18, 19, 20 лет';
console.log(findAge);



let promt = number;

if (number > 0) {
    console.log(1);
} else if (number < 0) {
    console.log(-1);
} else {
    console.log(0);
}


let result = a + b < 4 ? 'Malo' : 'Mnogo';


let message = (login == 'Sootrundik') ? 'Privet' :
(login == 'Director') ? 'Zdarova' :
(login == '') ? 'Net logina' :
'';




