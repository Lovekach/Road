//while
let i = 5;

while(i < 0) {
    console.log(i);
    i--;
}

// do while

let k = 5;

do {
    console.log(k);
    k--;
} while(k > 0);


// For

for(let i = 0; i <= 10 ; i++) {
    console.log(i);
}

let initialValue = 500;
let counter = 0;

while(true) {
    if(initialValue < 10) {
        break;
    } else {
        counter++;
        initialValue /=2;
    }
}
console.log(counter);

// continue

for(let j = 0; j < 10; j++) {
    if( j % 2 === 0) {
        continue;
    }
    console.log(j);
}


//Задача

let n = 1;
let m = 3;

let result = 0;

while(n <= m) {
    result+=n;
    n++;
}

console.log(result);

