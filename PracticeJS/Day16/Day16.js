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



