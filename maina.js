function printNumbers(from, to) {
    let current = from;
    let timerId = setInterval(function() {
        console.log(current);
        if (current == to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
    }



function secCount(second) {
   let timerID =  setInterval(function() {
        console.log(second++);
    }, 1000);
}

secCount(0);






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
