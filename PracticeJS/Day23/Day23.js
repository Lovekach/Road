// Перебрал строку посимвольно



function showVerticalMessage(string) {
    if (string[0] === 's') {
        string = string[0].toUpperCase() + string.slice(1);
    }

    if (string.lenght > 7) {
        string = string.slice(0, 6);
    }

    for (let char of string) {
        console.log(char);
    }

}
showVerticalMessage('strada');
