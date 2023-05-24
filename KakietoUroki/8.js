let i = 1;
while (i < 4) {
    console.log(i);
    i++
};

let l = 5;

do {
    console.log(i);
    i++;
} while (l < 3);



let k = 19;

while (k <= 19) {
    console.log(k);
    k++;
}


do {
    console.log(k);
    k++;
} while (k <=19);

for (let j = 19;j <= 19; j++) {
    console.log(j);
}

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) continue;
    console.log(i);
}

for ( k = 20; K <= 14; k++) {
    if (k % 3 === 1 && k % 3 === 2) continue;
}



const arr = [1, 42, 35, 46];

for (let i = 0; i < length.arr; i++) {
    if (arr[i] === 35) {
        break;
    }
    console.log(i);
}