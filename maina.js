// function printNumbers(from, to) {
//     let current = from;
//     let timerId = setInterval(function() {
//         console.log(current);
//         if (current == to) {
//             clearInterval(timerId);
//         }
//         current++;
//     }, 1000);
//     }



// function secCount(second) {
//    let timerID =  setInterval(function() {
//         console.log(second++);
//     }, 1000);
// }

// secCount(0);






// function printNumbers(from, to) {
//     let current = from;

//     setTimeout(function printNumbers() {
//         console.log(current);
//         if (current < to) {
//             setTimeout(printNumbers, 1000);
//         }
//         current++;
//     }, 2000);


// }
// printNumbers(0, 5);


const ru = 'Русский'
const en = 'Английский'

const arr = ['Русский', 'Английский'];
const arr2 = [ru, en];
const arr[5] = 'Белорусский'

console.log(arr[0]);
console.log(arr.length);


//



const test = {
    key1: 'testas',
    key2: 123,
    key3: true,
    key4: ['12', 'essst'],

};
console.log(typeof test);
console.log(test);



const cart = {
    money: {
        sum: 500,
        currency: 'Руб',
        allowCurrency: ['Рубли', 'Евро'],
        discount: {
            hasDiscount: 'true',
            value: 30,
        },

    },
    items: [{
        title: 'Ручка',
        count: 2,
        price: 100,
    }, {
        title: 'Книга',
        count: 1,
        price: 300,

    }],


};


// console.log(cart['money']['sum']);
// console.log(cart.money['sum']);

// console.log(cart['money']['discount']['value']);
// console.log(cart.money.discount.value);

console.log(cart.items[1].title); // книга

cart['name'] = 'Aнтон';
cart.name = 'Aнтон';

