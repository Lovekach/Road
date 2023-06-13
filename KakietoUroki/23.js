// const test = ['Апельсин', 'Банан', 'Персик'];

// const result = test.reduce((acc, elem) => {
//     acc[`name - ${elem}`] = elem;
//     return acc;
// }, {});

// const result = test.reduce((acc, item) => {
//     acc += item; 
//     return acc;
// },'Фрукты: ');

// console.log(result);



// const test = [1, 2, 3, 4, 5];

// const result = test.reduce((acc,elem) => {
//     acc += elem; 
//     return acc;
// }, 0)


// const result = test.reduce((acc, elem) => {
//     acc.push(elem.toString());
//     return acc;
// }, []);

// const result = [];

// test.forEach((elem) => {
//     result.push(elem.toString());
// });

// console.log(result);


// const test2 = [
//     ['Apple'],
//     ['Pineapple'],
//     ['Orange'],
// ];

// const result2 = [];
// test2.forEach((elem) => {
//     result2.push(elem[0]);

// })


// const result2 = test2.reduce((acc, elem) => {
//     acc.push(elem[0]);
//     return acc;
// }, []);




// console.log(test2.flat());
// console.log(result2);


// const goodProduct = ['Салат', 'ВОда', 'Шоколад', 'Булка']

// const test3 = [{
//     tittle: 'Сникерс',
//     composition: ['Шоколад', 'Сахар', 'Нуга', 'Что-то еще'],
// }, {
//     tittle: 'Бургер',
//     composition: ['Булка', 'Котлета', 'Салат', 'Другие овощи'],
// }, {
//     tittle: 'Липтон',
//     composition: ['Вода', 'Сахар', 'Сок лимона', 'Щепотка магии'],
// }];

// const result = [];

// test3.forEach((product) => {

//     const composition = [];

//     product.composition.forEach((item) => {
//         composition.push({
//             name: item,
//         });
//     });

//     result.push({
//         tittle: product.tittle,
//         composition,
//         // composition: [],
//     })
// });

// const result = test3.reduce((acc, product) => {

//    const composition =  product.composition.reduce((acc2, item) => {
//         acc2.push({
//             name: item,
//             good: goodProduct.includes(item),
//         })

//         return acc2;
//     }, []);

//     acc.push({
//         tittle: product.tittle,
//         composition,
//     })
//     return acc;
// }, []);

// console.log(result);


const countries = [{
    country: 'Гана',
    weather: 19,
    warm: true,
    cities: ['Анкара', 'Тамале', 'Кумаси'],
}, {
    country: 'Гренландия',
    weather: 20,
    warm: false,
    cities: ['Нуук', 'Какорток'],
}, {
    country: 'Мали',
    weather: 25,
    warm: true,
    cities: ['Мопти', 'Бамако', 'Джене'],
}, {
    country: 'Дания',
    weather: 5,
    warm: false,
    cities: ['Копенгаген'],
}];


const result = countries.reduce((acc, countryData) => {

    const city = `В составе такие города: ${countryData.cities.join(', ')}`;
    const coldOrHot = countryData.warm === true ? '+' : '-'
    const string = `В стране ${countryData.country} ${coldOrHot}${countryData.weather} градусов. ${city}`

    acc.push(string);
    return acc;
}, []);

console.log(result);

const hotCounty = countries.reduce((acc, data) => {

    if (data.warm === true && data.weather > acc.temp) {
        acc = {
            temp: data.weather,
            result: `Самая жаркая страна ${data.country}`
        }
    }

    return acc;
}, {
    temp: 0,
    result: '',
});

console.log(hotCounty.result);

const coldCountry = countries.reduce((acc2, data2) => {

    if (data2.warm === false & acc2.temp2 < data2.weather) {
        acc2 = {
            temp2: data2.weather,
            result2: `Самая холодная страна ${data2.country}`
        }
    }


    return acc2;
}, {
    temp2: 0,
    result2: '',
});

console.log(coldCountry.result2);