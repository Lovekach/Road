// // const key = [1, 2, 3];

// // const value = 'Привет';
// // const obj = {
// //     value: 'value',
// //     value,
// // };

// // console.log(obj);
// // console.log(typeof obj);


// // const user = {
// //     name: 'Alex',
// //     age: 18,
// //     state: 123
// // };

// // console.log('age' in user); // true
// // console.log('id' in user); // false
// // console.log(user.hasOwnProperty('name')); // true
// // console.log(user.hasOwnProperty('id')); // false 

// // if(typeof user.state === "string" || typeof user.state === 'number') {
// //     console.log('пРивет');
// // } else {
// //     user.state === null;
// // }

// // const key = 'state';

// // console.log('state' in user);

// // const str = JSON.stringify(user) // конвертация из объекта в строчку
// // console.log(typeof str); // 'string'
// // console.log(JSON.parse(str)); // из строки в объект 
// // console.log(typeof JSON.parse(str)); // 'object'


// // for( let i in user) {
// //     const value = user[i];
// //     console.log(i);
// //     console.log(value);
// // }


// // console.log(Object.keys(user)); // key
// // console.log(Object.values(user)); // значение key
// // console.log(Object.entries(user)); // выводит ключ и значение


// // const entries = Object.entries(user);

// // for (let i = 0; i < entries.length; i++) {
// //     const entry = entries[i];
// //     const key = entry[0];
// //     const value = entry[1];


// //     console.log(key, value);
// // }


// // const obj1 = { test: 'hello'};
// // const obj2 = { test: 'hello'};

// // console.log(obj1 === obj2); // false тк выделили разные ячейки для хранения в  памяти 

// // const obj3 = { test: 'hello'};
// // const obj4 = obj3;

// // console.log(obj1 === obj2); // true тк одна ячейка для хранения в памяти



// const userInformation = {
//     name: 'Иван',
//     surname: 'Иванов',
//     age: 15,
//     family: {
//         dad: {
//             name: 'Александр',
//             surname: 'Иванов',
//             age: undefined,
//         },
//         mom: {
//             name: 'Наталья',
//             surname: 'Иванова',
//         },
//         brother: {
//             name: 'Константин',
//             surname: 'Иванов',
//             age: '10',
//         },
//     }
// }


// const listOfFamily = {
//     dad: 'Отец',
//     mom: 'Мать',
//     brother: 'Брат',
//     sister: 'Сестра',
// }


// function getInfo(info) {

//     let countFamily = 0;
//     for (let key in userInformation.family) {
//         countFamily++;
//     }


//     let str = `${"У"}  ${userInformation.name} ${userInformation.surname}  ${"В семье"}  ${countFamily} ${"члена"}`;
//     console.log(str);

//     // if (userInformation.family.dad) {
//     //     const dad = userInformation.family.dad;
//     //     str += `Отец - ${dad.name} ${dad.surname}`;

//     //     if (typeof dad.age === 'number') {
//     //         str += `(${dad.age} лет).`;
//     //     } else {
//     //         str += '(возраст не известен)';
//     //     }

//     // }

//     for (let familyMember in info.family) {
//         const data = info.family[familyMember];

//         str += ` ${listOfFamily[familyMember]}`;
//         str += ` - ${data.name} ${data.surname}`;

//         if (typeof data.age === 'number' || typeof data.age === 'string') {
//             str += `(${data.age} лет).`;
//         } else {
//             str += '(возраст не известен)';
//         }


//     }
//     return str;
// }
// const data = getInfo(userInformation);
// console.log(data);

const TYPE = {
    CR: 'critical',
    NE: 'not_exacttly',
    ST: 'standart',
};


const news = [
    {
        title: 'Я сегодня поел',
        date: 'Сегодня',
        price: 1001,
        type: 'critical',
        subtitle: 'Курицу',
        content: 'Сегодня был веселый день...',
        images: ['asdasd', 'xcbdf', 'xcbdfb'],
        links: ['xcsdg1234', '21dsfsdg'],
        partners: [{
            title: 'Мы за все хорошее, ',
            site: 'http://nfje21',
            keywords: ['Мы хорошее', 'Мы красивые'],
        }, {
            itle: 'Мы за все хорошее2, ',
            site: 'http://nfje21',
            keywords: ['Мы хорошие2', 'Мы красивые2'],
        }],
    },
    {
        title: 'Я сегодня поел3',
        subtitle: 'Курицу',
        type: 'not_exactly',
        content: 'Сегодня был веселый день...3',
        images: ['asdasd', 'xcbdf', 'xcbdfb'],
        links: ['xcsdg1234', '21dsfsdg'],
        partners: [{
            title: 'Мы за все хорошее, ',
            site: 'http://nfje21',
            keywords: ['Мы хорошее', 'Мы красивые'],
        }, {
            itle: 'Мы за все хорошее2, ',
            site: 'http://nfje21',
            keywords: ['Мы хорошие2', 'Мы красивые2'],
        }],
    },
];

if (!news || news.length === 0) {
    console.log('Новостей нет');
} else {
    // const firsNews = news[0];
    // const secondNews = news[0];


    // for (let i = 0; i < news.length; i++) {
    //     const newsItem = news[i];
    //     if (newsItem.type === TYPE.CR) {
    //         continue;
    //     }
    //     console.log(newsItem.title);

    // for(let j = 0; j < news.partners.length; j++) {
    //     const partnersItems = newsItem.partners[j];
    // }
    // console.log(partnersItems);

    let hasCriticalNews = false;
    
    for (let i = 0; i < news.length; i++) {
        const newsItem = news[i];

        console.log(newsItem);

        if (newsItem.type === TYPE.CR) {
            hasCriticalNews = true;
            break;
        }
      
    }

}
if (hasCriticalNews) {
    console.log('Danger');
}



