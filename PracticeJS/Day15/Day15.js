//While(циклы)

let i = 1;

while(i <= 19) {
    console.log(i);
    i++;
}

let j =1;

//Перезапись while на for

// 1)
for(i = 1; i <= 19; i++) {
    console(i);
}

// 2)
let i = 0;

for(; i <= 19; i++) {
    console.log(i);
}

// 3)
let i = 0;

for(; i<= 19;) {
    console.log(i);
    i++;
}


//Задача переписать while на do while
do {
    console.log(j);
    j++;
} while (j<=19);



//For

for( let k = 1; k < 4; k++) {
    console.log(k);
}

for( let l = 0; l < 3; l++) {
    console.log(l);
}

let l = 0;
for(; l < 3; l++) {
    console.log(l);
}

for(; l < 3;) {
    console.log(l);
    l++;
}

for(;;) {              // Никогда не остановится

}            