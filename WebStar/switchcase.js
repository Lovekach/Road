let x = 'value1';

switch (x) {
    case 'value': // if(x === 'value')
        console.log('Мы попали в условие value');
        break;
    case 'value1': // if(x === 'value1')
        console.log('Мы попали в условие value1');
        break;
    case 'value2': // if(x === 'value2')
        console.log('Мы попали в условие value2');
        break;
    default: console.log('Мы не попали ни в 1 из условий')

}


let a = 2 + 2;

switch (a) {
    case 3:
        console.log(3);
        break;
    case 4:
        console.log(4);
        break;
    case 5:
        console.log(5);
        break;
    case 6:
        console.log(6);
        break;
    default: console.log('Мы не попали ни в 1 из кейсов');
}


//Сокращение конструкции case
let b = 5;

switch (b) {
    case 4:
        console.log(4);
        break;
    case 3:
    case 5:
        console.log('Значение равно 3 или 5');
        break;
    case 6:
        console.log(6);
        break;
    default: console.log('Не попали ни в одно и из чисел')
}