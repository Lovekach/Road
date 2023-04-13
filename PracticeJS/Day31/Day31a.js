// Задачи



// function printNumbers(from, to) {
//     let current = from;

//     let timerId = setInterval(function() {
//       console.log(current);
//       if (current == to) {
//         clearInterval(timerId);
//       }
//       current++;
//     }, 1000);
//   }

// printNumbers(0, 5);

// function printNumbers(from, to) {
//     let current = from;

//     setTimeout(function go() {
//         console.log(current);
//         if (current < to) {
//             setTimeout(go, 1000);
//         }



// let timerId = setTimeout(() => console.log('hi'), 2000,);
// clearTimeout(timerId);

// let timerId = setInterval(() => console.log('hi'), 2000,);
// setTimeout(() => { clearInterval(timerId); console.log('stop');}, 5000);



// let timerId = setTimeout(function tick() {
//     console.log('tick');
//     timerId = setTimeout(tick, 2000);
// }, 2000);