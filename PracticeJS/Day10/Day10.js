let year = alert('В каком году я родился');

if ( year == 1992) {
    console.log('Ты угадал');
} else {
    console.log('Попытайся еще раз');
}

// Несколько условий:"else if"

let number = alert('Угадай число от 1 до 3');

if (number == 2 ) {
    console.log('Попытайся еще раз');
} else if (number == 1) {
    console.log('Снова не угадал, даю еще попытку');
} else {
    console.log('Молодец, у тебя получилось');
}
