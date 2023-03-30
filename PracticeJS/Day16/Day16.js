const myPhoneBook = {
    'Mother': 123,
    'Father': 456,
    'Sister': 789,
    'Unknow': 09863,
}

myPhoneBook['Brother'] = 13579;
myPhoneBook['Mother'] = 1234;
delete myPhoneBook['Unknow'];

console.log(myPhoneBook);
console.log(myPhoneBook['Father']);
console.log(myPhoneBook.Mother);

const crypto = {
    list: {
        'BTC': 100,
        'LTC': 200,
        'AVAX': 300,
    },
    log() {
        console.log(this.list);
    }
};

crypto.log();