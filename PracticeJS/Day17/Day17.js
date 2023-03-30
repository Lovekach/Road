//Динамическое имя свойства


const phoneBook = {
    list: {
        'John': 123,
        'Jane Doe': 456,
        'Jim Smith': 789,
    },
    add(name, number) {
        this.list[name] = number;
    },
    delete(name) {
        this.list[name];
    }
};



const lastName = 'Jane Doe';
console.log(phoneBook.list[lastName]); // 456

phoneBook.add('Sarah Johnson', 1234577771);
console.log(phoneBook.list['Sarah Johnson']);

phoneBook.delete('John');
console.log(phoneBook.list['John']);

console.log(phoneBook.list);


// Оператор in

const task = {
    list1: {
        'read book': true,
        'make a bed': false,
        'make a breakfast': true,
    }
};

console.log('take a shower' in task.list1);
console.log('make a bed' in task.list1);

// Цикл for  ....   in

const investBag = {
    coin: {
        'BTC': 100,
        'LTC': 200,
        'XRP': 300,
        'MANA': 400,
    },
};

for(const name in investBag.coin) {
    console.log(`${name} - ${investBag.coin[name]}`);
}