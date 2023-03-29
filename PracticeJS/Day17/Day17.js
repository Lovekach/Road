const phoneBook = {
    list: {
        'Mother': 123,
        'Father': 345,
        'Sister': 567,
    },
    add(name, number) {
       this.list[name] = number;
    },
    delete(name) {
        delete this.list[name];
    }

};

phoneBook.add('Brother', 789);
console.log(phoneBook.list);

phoneBook.delete('Sister');
console.log(phoneBook.list);

//Оператор in


const garage = {
    list1: {
        'mazda': 2020,
        'bmw': 2021,
        'honda': 2023,
    }
};
console.log('mazda' in garage.list1);
console.log('audi' in garage.list1);

// Оператор for ... in

const crypto = {
    list2: {
        'avax': 100,
        'atom': 200,
        'dot': 300,
    }
};
for( const name in crypto.list2) {
    console.log(name);
    console.log(crypto.list2[name]);
    console.log(`${name} - ${crypto.list2[name]}`);
}