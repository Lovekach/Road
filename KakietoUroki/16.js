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


// let cards = [{
//     id:1, balance: 5000, currency: 'USD'
// } , {
//     id:2, balance: 3000, currency: 'EUR'
// }, {
//     id:3, balance: 6000, currency: 'RUB'
// }];

// function clickHandler() {
//     cards.forEach(card => {
//         console.log(`Card ID: ${card.id}, Balance: ${card.balance}, Currency: ${card.currency}`);
//     });
// }

// document.getElementById('button').addEventListener('click', clickHandler);

// var message = 'Hi';

// function printMessage() {
//     console.log('Message');
// }

// console.log(window.message);
// console.log(window.printMessage);

// console.log(window.innerWidth);


// window.setTimeout(() => {
//     window.document.body.style.color = 'green'
// }, 1000);

// window.setTimeout(() => {
//     window.document.body.style.background = 'red'
// }, 2000);

// window.setTimeout(() => {
//     window.document.body.style.fontSize = '30px';
// },3000)


// window.setTimeout(() => {
//     window.document.body.style.fontFamily = 'sans-serif';
// },4000);  

// const secondNode = document.documentElement.childNodes[4];
// console.log(secondNode);

// const body = document.body;
// console.log(body.parentNode === document.documentElement);


// const body = document.documentElement.children;
// console.log(body);

// DOM 2

// const div1 = document.getElementById('.div1');
// console.log(div1);

// const divs = document.querySelectorAll('.div');
// console.log(divs);

// setTimeout(() => {
//     divs.forEach((div) => {
//         div.style.fontSize = '30px'
//     })
// }, 3000);


// const div2 = document.querySelectorAll('.diva');

// setTimeout(() => {
//     div2.forEach((div2) => {
//         div2.style.color = 'red'
//     })
// }, 2000);

// const heroDiv = document.querySelectorAll('.hero');

// setTimeout(() => {
//     heroDiv.forEach((div3) => {
//         div3.style.opacity = .2;
//     })
// }, 4000);


// const body = document.body;
// const firstElement = body.firstChild;
// console.log(firstElement);
// console.log(firstElement.tagName);
// console.log(firstElement.nodeName);


// const header = document.querySelector('header');

// console.log(header.outerHTML);

// setTimeout(() => {
//     header.innerHTML += '';
// }, 2000); 

// const body = document.body;
// const firstElement = body.firstChild;

// console.log(firstElement.nodeValue);
// console.log(firstElement.data);


// const link = document.querySelector('.a');
// const input = document.querySelector('.input');

// console.log(link.href);
// console.log(input.value);



// const div = document.getElementById('div1');

// console.log(div.id);
// console.log(div.getAttribute('rrr'));
// console.log(div.hasAttribute('rrr'));
// div.removeAttribute('rrr');

// console.log(div.dataset.ageAge2);

// const newDiv = document.createElement('div');
// const newDivText = document.createTextNode('Какой то текст');

// newDiv.prepend(newDivText);
// // newDiv.innerHTML = 'Какой то текст';

// // console.log(newDiv);

// const body = document.body;

// body.prepend(newDiv)

// newDiv.className = 'divok'


// const newLink = document.createElement('a');
// const textLink = document.createTextNode('Наша ссылка');

// newLink.className = 'tag-link'
// newLink.prepend(textLink);

// const body = document.body;

// body.prepend(newLink)

// const div = document.getElementById('divId')
// const wrapperItem = document.querySelector('.wrapper_item');

// // setTimeout(() => {
// //     div.className ="divClass3"; 
// // }, 2000); 

// setTimeout(() => {
//     // div.classList.add('cssClass'); // добавление css класса
//     // div.classList.remove('cssClass'); // удаление css класса
//     // div.classList.contains('cssClass'); // проверяет наличие класса(есть ли он или нет) css класса
//     // div.classList.toggle('cssClass'); // удаляет класс(если он есть) и добавляет класс(если его нету) 
// }, 2000);

// console.log(div.classList);




// const wrapper = document.querySelector('.wrapper');

// console.log(wrapper.offsetLeft);





// const wrapper = document.querySelector('.wrapper');
// const wrapperItem = document.querySelector('.wrapper_item');

// const google = document.querySelector('a')

// const printHello = () => {
//     alert('Hello');
// };

// const printHello2 = () => {
//     alert('Hello2');
// };


// const printWrapper = (event) => {
//     alert("Wrapper");
// }


// const printWrapperItem = (event) => {
//     event.stopPropagation()
//     alert('WrapperItem');
// }


// const toggleActiveItem = (event) => {
//     event.target.classList.toggle('active')
//     // console.log('event.target',event.target);
//     // console.log('event.currentTarget',event.currentTarget);
// };

// const privetLink = (event) => {
//     event.preventDefault();
//     console.log(event);
// }

// // wrapperItem.onclick = printHello;

// // wrapperItem.addEventListener('click', printHello);
// // wrapperItem.removeEventListener('click', printHello2);


// // wrapper.addEventListener('click', printWrapper);
// // wrapperItem.addEventListener('click', printWrapperItem);


// wrapper.addEventListener('click', toggleActiveItem);
// google.addEventListener('click', privetLink);






const button = document.querySelector('button');

// button.addEventListener('click', clickHandler);

// let i = 0;

// function clickHandler() {
//     i++;

//     console.log('click');

//     switch(i) {
//         case 1:
//             button.style.background = 'red';
//             break;
//         case 2:
//             button.style.background = 'pink';
//             break;
//         case 3:
//             button.style.background = 'green';
//             break;
//         case 4:
//             button.style.background = 'blue';
//             break;
//         case 5:
//             button.style.background = 'yellow';
//             button.removeEventListener('click', clickHandler)
//             break;
//     }

// }


// const input = document.querySelector('[name="my_input"]');

// input.addEventListener('input', function_name);

// let prevValue = input.value;
// console.log(prevValue);
// console.dir(input);


// function function_name(event) {

//     const userData = event.target.value;

//     if (userData.includes === ('(') || userData.includes === (')')) {
//         input.value = prevValue;
//         return;

//     }

//     input.value = userData;
//     prevValue = userData;
// }


// document.addEventListener('scroll', (event) => {
//     console.log(event.target.scrollingElement.scrollTop);
// });



// document.addEventListener('keydown', (event) => {
//     console.log(event);
// });


// window.addEventListener('resize', (event) => {
//     console.log(event);
// });



// button.addEventListener('mouseenter', (event) => {
//     console.log(event);
// });


// button.addEventListener('mouseleave', (event) => {
//     console.log(event);
// });