// Задачи



function printNumbers(from, to) {
    let timerId = setTimeout(function() {
       console.log(from++);
        printNumbers(from, to);
    }, 1000);
    clearTimeout(timerId);
    
}

printNumbers(0, 10);
dasd