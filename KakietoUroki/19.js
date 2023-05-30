
function showVerticalMessage(str) {
    if (str.charAt(0) === 's') {
        str = str.charAt(0).toUpperCase() + str.slice(1, 6)
        console.log(str);
    }
    if (str.length > 7) {
        str = str.slice(0, 7)
    }
    for( let i = 0; i < str.length; i++) {
        console.log(str.charAt(i));
    }
}


showVerticalMessage('strada');