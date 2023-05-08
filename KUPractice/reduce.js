// reduce


const test = ['Апельсин', 'Банан', 'Персик'];

const result = test.reduce((acc, item) => {
    acc += item;
    return acc;

}, {});

console.log(result);



// Такая же запись только при методе forEach        
// const result = [];



// const test2 = [
//     ['Апельсин'],
//     ['Персик'],
//     ['Банан']
// ];





// const goodProducts = ['Салат', 'Вода', 'Шоколад', 'Булка'];

// const test3 = [{
//     title: 'Сникерс',
//     composition: ['Шоколад', 'Сахар', 'Нуга', 'Что-то еще'],
// }, {
//     title: 'Бургер',
//     composition: ['Булка', 'Котлета', 'Салат', 'Другие овощи'],
// }, {
//     title: 'Липтон',
//     composition: ['Вода', 'Сахар', 'Сок лимона', 'Щепотка магии'],
// }];





//   ТОЖЕ САМОЕ ТОЛЬКО С .reduce
