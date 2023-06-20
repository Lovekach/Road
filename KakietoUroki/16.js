// Браузерное окружение , DOM - дерево

// var message = 'Hi';

// function printMessage() {
//     console.log('Message');
// }

// console.log(window.message);
// console.log(window.printMessage);

// console.log(window.innerWidth);

// window.setTimeout(() => {
//     window.document.body.style.background = 'green';
//     window.document.body.style.color = 'red';

// }, 1000);


// window.setTimeout(() => {
//     window.location.href = "https://google.com"; 

// }, 3000);


// console.log(document.documentElement.lastChild.previousSibling);


// console.log(document.body.parentElement);

// let result = document.getElementById('ulika');
// ulika.style.color = 'red'
// console.log(result);


let cards = [{
    id:1, balance: 5000, currency: 'USD'
} , {
    id:2, balance: 3000, currency: 'EUR'
}, {
    id:3, balance: 6000, currency: 'RUB'
}];

function clickHandler() {
    cards.forEach(card => {
        console.log(`Card ID: ${card.id}, Balance: ${card.balance}, Currency: ${card.currency}`);
    });
}

document.getElementById('button').addEventListener('click', clickHandler);