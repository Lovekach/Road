const telegramContact = {
    Mother: 123,
    Father: 456,
    Sister: 789,
    Other: 4561,

};

telegramContact["Brother"] = 13579;
delete telegramContact["Other"];

console.log(telegramContact);
console.log(telegramContact.Mother);
console.log(telegramContact["Father"]);



const carList = {
    'Honda': 2020,
    'Bmw': 2021,
    'Audi': 2023,
    'Mercedes Benz': 2024,
};


carList['Mazda'] = 2022;
carList.Honda = 2022;
delete carList['Bmw'];

console.log(carList);
console.log(carList['Mercedes Benz']);
console.log(carList.Honda);
console.log(carList.Bmw);
console.log(carList.Audi);


// Методы объекта

const phoneBook = {
    list: {
        'Mother': 123,
        'Father': 345,
        'Sister': 567,
    },

    log() {
        console.log(this.list);
    }
};

phoneBook.log();