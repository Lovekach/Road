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
console.log(this.list);

phoneBook.delete('Sister');
console.log(this.list);

//Оператор in


const garage = {
    list1: {
        'mazda': 2020,
        'bmw': 2021,
        'honda': 2023,
    }
};
console.log('mazda' in garage.list1); // true
console.log('audi' in garage.list1); // false

// Оператор for ... in

const crypto = {
    list2: {
        'avax': 100,
        'atom': 200,
        'dot': 300,
        'xrp': 400,
    }
};
for (const name in crypto.list2) {
    console.log(`${name} - ${crypto.list2[name]}`);
}


const country = {
    top: {
        'Russia': 123,
        'England': 345,
        'Brazil': 678,
    },
    add(key, year) {
       this.top[key] = year;
    },
    remove(key) {
      delete  this.top[key];
    }
};

// Оператор in
console.log('Russia' in country.top);
console.log('Crovatia' in country.top);

// Цикл for ... in

for ( const name in country.top) {
    console.log(name);
    console.log(country.top[name]);
}


country.add('Spain', 1234);
console.log(country.top);

country.remove('Brazil');
console.log(country.top);