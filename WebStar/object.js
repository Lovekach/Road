const user = {
    name: 'Valery',
    age: 31,
    "height pool": 181,
};

user.lastName = 'Zubov';


console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user["height pool"]);

function creatuser(name, age)  {
    return {
        name: name,
        age: age,
    }
}

const userr = creatuser('Valeo', 30);
const user2 = creatuser('Valery', 31);

console.log(userr);
console.log(user2);


const uses = {
    name: 'Val',
    age: 33,
    lastName: "Zubov",
}

for(let key in uses) {   // Цикл for in
    console.log(key);
    console.log(uses[key]);
}

const land = {
    brazil: "football",
    italy: "spagetti",
    russia: "vodka",
    germany: "Bmw",
    34: '34',
    10: 10,
}

for(let key in land) {
    console.log(key);
    console.log(land[key]);
    console.log(land.brazil);
    console.log(land.brazil);
    console.log(land.brazil);
    console.log(land.italy);
    console.log(land["russia"]);
}



//Методы объекта


let useer = {
    name: 'Valeriy',
    age: 35,
    sayHi() {
        console.log('Hello' + this.useer);  //this === useer
    }
    
}
// useer.sayHi = function() {
//     console.log('Hello');
// }


// useer.sayHi = sayHi

// console.log(useer);

useer.sayHi()


