let age = 20;

if(age == 30) {
    console.log('Вам 30 лет');
} else if(age > 30) {
    console.log('Вам более 30 лет');
} else {
    console.log('Вам менее 30 лет');
}

// Тернарный оператор ?
let age1 = 15;
let child = (age1 >= 16) ? 'Ребенку 16 или более лет' : 
(age1 <= 16) ? 'Ребенку 16 или менее лет':
(age1 == ' ') ? 'Ребенку неизвестно сколько лет' :
console.log(child);