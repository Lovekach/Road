// reduce


// const test = ['Апельсин', 'Банан', 'Персик'];

// const result = test.reduce((acc, item) => {
//     acc[item] = item;
//     return acc;
// }, {});

// console.log(result);


// const test = [1, 2, 3, 4, 5];

// const result = test.reduce((acc, number) =>{
//     acc += number; 
//     return acc;
// }, 0);


// Такая же запись только при методе forEach        
// const result = [];

// test.forEach((number) => {
//     result.push(number.toString());
// })

// console.log(result);

const test2 = [
    ['Апельсин'],
    ['Персик'],
    ['Банан']
];

// const result = [];
// test2.forEach((fruit) => {
//     result.push(fruit[0]);
//     return fruit
// });

// console.log(result);

// const result = test2.reduce((acc, friut) => {
//     acc.push(friut[0]);

//     return acc;
// }, []);

// console.log(result);



// const result = test2.reduce((acc, friut) => {
//     acc += ' ' + friut[0];

//     return acc;
// }, '');

// console.log(result);


const goodProducts = ['Салат', 'Вода', 'Шоколад', 'Булка'];

const test3 = [{
    title: 'Сникерс',
    composition: ['Шоколад', 'Сахар', 'Нуга', 'Что-то еще'],
}, {
    title: 'Бургер',
    composition: ['Булка', 'Котлета', 'Салат', 'Другие овощи'],
}, {
    title: 'Липтон',
    composition: ['Вода', 'Сахар', 'Сок лимона', 'Щепотка магии'],
}];


const result = [];
test3.forEach((product) => {

    const composition = [];

    product.composition.forEach((item) => {
        composition.push({
            name: item,
        })

    })

    result.push({
        title: product.title,
        composition: [],
    });
    return product;
})

console.log(result);






//   ТОЖЕ САМОЕ ТОЛЬКО С .reduce

// const result = test3.reduce((acc, product) => {

//     acc.push({
//         title: product.title,
//         composition: [],
//     })

//         return acc;
//     }, []);

//     console.log(result);
