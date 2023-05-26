const phoneBook = {
    list: {
        'John': 1234,
        'Jane Doe': 9834,
        'Jim Smith': 111111,
    }
    
};
console.log('John' in phoneBook.list );

for (let key in phoneBook.list) {
    console.log(`${key} - ${phoneBook.list[key]}`);
}



// phoneBook['Jim Carry'] = 6574839;
// phoneBook.John = 190807;
// delete phoneBook['Jim Smith'];
// console.log(phoneBook);

// const phoneBook1 = {
//     list: {
//         'John': 1234567,
//         'Jane Doe': 987654,
//         'Jim Smith': 1111111111,
//     },
//     add(name, number) {
//         this.list[name] = number;
//     },
//     delete(name) {
//        delete this.list[name] = number;
//     }
// };
// phoneBook1.add('Sarah Johnson', 444555666);
// console.log(phoneBook1.list['Sarah Johnson']);

// phoneBook1.delete('John', 1234567);
// console.log(phoneBook1);


// const myPhoneBook = {
//     spisok: {
//         'Mama': 1234,
//         'Papa': 5678,
//         'Brat': 9876,
//     },
//     add(name, number) {
//         this.spisok[name] = number;
//     },

//     delete(name) {
//         delete this.spisok[name];
//     }
// };
// myPhoneBook.add('Sestra', 12312564000);
// console.log(myPhoneBook.spisok);

// myPhoneBook.delete('Brat');
// console.log(myPhoneBook.spisok);

// console.log('Mama' in myPhoneBook.spisok);

// for(let key in myPhoneBook.spisok) {
//     // console.log(key);
// }
// console.log(`${myPhoneBook.spisok} - ${myPhoneBook.spisok[key]}`);


// const cart = {
//     money: {
//         sum: 500,
//         currency: 'Руб',
//         allowCurrency: ['Рубли', 'Евро'],
//         discount: {
//             hasDiscount: true,
//             value: 30,
//         },
//     },
//     items: [{
//         title: 'Ручка',
//         count: 2,
//         price: 100,
//     }, {
//         title: 'Книга',
//         count: 1,
//         price: 300,

//     }],
// };

// console.log(cart['money']['sum']); // === console.log(cart.money.sum)
// console.log(cart.items[1].title);