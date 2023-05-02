const str = 'qwe';

console.log(str);
console.log( typeof str);

const one = 'one';
const two = 'two';

const result = one + ' ' + two;
console.log(result);

console.log(`${one} - ${two}`); // конкатенация

const channel = 'Какие то уроки';
console.log(channel.length); // 14
console.log(channel.toLocaleLowerCase); // 'какие то уроки'
console.log(channel.toUpperCase); // 'КАКИЕ ТО УРОКИ'
console.log(channel.indexOf('-')); // 5 - тк порядковый номер 5 у -
console.log(channel.indexOf('*')); // -1 тк нет в строке такого символа
console.log(channel.charAt(0)); // K 
console.log(channel.charAt(1)); // a


const splitExample = '[12, 41, 12, 010, 24]';
console.log(splitExample.split(' ')); // 

const test = '*'.repeat(5);
console.log(test);

const tel = '8(900)555-35-35';
console.log(tel.replaceAll('-', ''));
console.log(tel.replaceAll('(', ''));
console.log(tel.replaceAll(')', ''));

// ИЛИ В ОДНУ СТРОЧКУ

console.log(tel
    .replaceAll('-', '')
    .replaceAll('(', '')
    .replaceAll(')', '')
);
