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


const MIN_AGE = 18;

const userData = {
    name: 'Alex',
    age: 30,
    marriied: true,
    sex: 'male',
};

// if (userData.age < MIN_AGE && userData.sex === 'male' && !userData.marriied) {
//     console.log('нельзя');
// } else if (userData.age > MIN_AGE) {
//     console.log('можно');
// }

// if (userData.name !== 'John' || userData.marriied !== true) {
//     console.log('Вам доступен контент');
// }

if (!(userData.age === MIN_AGE && userData.name === 'John')) {
    console.log('Доступен');
}


const name1 = 'Alex';

switch (name1) {

    case 'Alex':
        console.log('Привет Alex');
        break;
    case 'Rate':
        console.log('Привет Rate');
        break;
    default:

        console.log('Привет');


}





name2 === 'Jonh' ? console.log('true') : console.log('false');




const cicl = [1, 0, 55, 10, 531, 12, 12];

for (let i = 0; i < cicl.length; i++) {
    // if (cicl[i] === 55) {
    //      break; // Прерывает цикл при i === 55
    // }

    if (cicl[i] === 55) {
        continue; // Пропускает этот цикл при i === 55
    }
    console.log(cicl[i]);
}
console.log('end');





const cart = [{

    name3: 'Арбуз',
    price: 100,
    count: 1,
}, {
    name3: 'Хлеб',
    price: 100,
    count: 1,

}, {
    name3: 'Молоко',
    price: 100,
    count: 1,
}];

let finalPrice = 0;

for (let l = 0; l < cart.length; l++) {
    const product = cart[l];

    const price = product.price * product.count;

    finalPrice = finalPrice + price;
}

console.log(finalPrice);


const name4 = 'Valery';

if (name4 === 'Valery') {
    const dept = 150;
    for (let l = 0; l < cart.length; l++) {
        const product = cart[l];

        const price = product.price * product.count;

        finalPrice = finalPrice + price;
    }
    finalPrice += dept;

} else if (name4 === 'Vitaly') {
    const dept = 50;
    for (let l = 0; l < cart.length; l++) {
        const product = cart[l];

        const price = product.price * product.count;

        finalPrice = finalPrice + price;
    }
    finalPrice += dept;

} else {
    for (let l = 0; l < cart.length; l++) {
        const product = cart[l];
    
        const price = product.price * product.count;
    
        finalPrice = finalPrice + price;
    }
}






