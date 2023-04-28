// const news = [
//     {
//         title: 'Я сегодня поел',
//         subtitle: 'Я сегодня планирую лечь спать',
//         content: 'Сегодня был веселый день',
//         images: ['http:// asdasd', 'http://zxczxc'],
//         links: ['http:// htgn', 'http://tyutyityixc'],

//         partners: [{
//             title: 'Мы за все хорошее',
//             sute: 'http://sazvtrhter2',
//             keywords: ['Мы хорошие', 'МЫ красивые'],
//         }, {
//             title: 'Мы за все хорошее',
//             sute: 'http://sazvtrhter2',
//             keywords: ['Мы хорошие', 'МЫ красивые'],
//         }],

//     },
//     {
//         title: 'Я сегодня поелaf',
//         subtitle: 'Я сегодня планирую лечь спать',
//         content: 'Сегодня был весfелый день',
//         images: ['http:// asdasd', 'http://zxczxc'],
//         links: ['http:// htgn', 'http://tyutyityixc'],

//         partners: [{
//             title: 'Мы за все хорошее',
//             sute: 'http://sazvtrhter2',
//             keywords: ['Мы хорошие', 'МЫ красивые'],
//         }, {
//             title: 'Мы за все хорошее',
//             sute: 'http://sazvtrhter2',
//             keywords: ['Мы хорошие', 'МЫ красивые'],
//         }],

//     },
// ];
// const title = news[0].title;
// const subtitle = news[0].subtitle;

// const kewords = news[0].partners[1].keywords;
// console.log(keywords);

// const images = news[0].images[1];
// console.log(images);

// const links = news[0].links[1];
// console.log(links);


// const titles = new[1].title;
// const partners = new[1].partners[0].keywords[1];
// console.log(title, partners);



// const cryptoList = [{
//     lowRisk: [{
//         avax: '10',
//         atom: '20',
//         xch: '30',
//         dot: '40',
//     }],

// }, {
//     middleRisk: [{
//         mina: '50',
//         algo: '60',
//         xtz: '70',
//         vega: ['80', '90'],
//     }],

// } , {

//     highRisk: [{
//         hook: '90',
//         syn: '100',
//         imx: '110',
//         aurora: '120',
//     }],
// }
// ];

// const valueCoin = cryptoList[1].middleRisk[0].vega[1];

// console.log(valueCoin);


// -----------------------------------------------------

// Операторы + условия


// const news = [
//     {
//         title: 'Я сегодня поел',
//         date: 'Сегодня',
//         subtitle: 'Я сегодня планирую лечь спать',
//         content: 'Сегодня был веселый день',
//         images: ['http:// asdasd', 'http://zxczxc'],
//         links: ['http:// htgn', 'http://tyutyityixc'],

//         partners: [{
//             title: 'Мы за все хорошее',
//             sute: 'http://sazvtrhter2',
//             keywords: ['Мы хорошие', 'МЫ красивые'],
//         }, {
//             title: 'Мы за все хорошее',
//             sute: 'http://sazvtrhter2',
//             keywords: ['Мы хорошие', 'МЫ красивые'],
//         }],

//     },
// ];


// if (!news || news.length === 0) {
//     console.log('нет новостей');
// } else {


//     const firstNews = news[0];
//     const secondtNews = news[1];

//     if ('date' in firstNews) {
//         console.log('Опубликовано' + firstNews.date + '-' + firstNews.title);
//     };
//     if (!('date' in secondtNews)) {
//         console.log('Опубликовано' + secondtNews.title);
//     }

// }


// --------------------------------------

//  SWITCH CASE & ТЕРНАРЫНЙ ОПЕРАТОР 
const TYPE = {
    CR: 'critical',
    NE: 'not_exactly',
    ST: 'standart,'
}


const news = [
    {
        title: 'Я сегодня поел',
        subtitle: 'Я сегодня планирую лечь спать',
        content: 'Сегодня был веселый день',
        type: 'critical',
        images: ['http:// asdasd', 'http://zxczxc'],
        links: ['http:// htgn', 'http://tyutyityixc'],

        partners: [{
            title: 'Мы за все хорошее',
            sute: 'http://sazvtrhter2',
            keywords: ['Мы хорошие', 'МЫ красивые'],
        }, {
            title: 'Мы за все хорошее',
            sute: 'http://sazvtrhter2',
            keywords: ['Мы хорошие', 'МЫ красивые'],
        }],
    },
    {
        title: 'Я сегодня поелaf',
        subtitle: 'Курицу',
        type: 'not_exactly',
        content: 'Сегодня был весfелый день',
        images: ['http:// asdasd', 'http://zxczxc'],
        links: ['http:// htgn', 'http://tyutyityixc'],

        partners: [{
            title: 'Мы за все хорошее',
            sute: 'http://sazvtrhter2',
            keywords: ['Мы хорошие', 'МЫ красивые'],
        }, {
            title: 'Мы за все хорошее',
            sute: 'http://sazvtrhter2',
            keywords: ['Мы хорошие', 'МЫ красивые'],
        }],

    },
];


if (!news || news.length === 0) {
    console.log('нет новостей');
} else {


    const firstNews = news[0];
    const secondtNews = news[1];
}


if (firstNews.type === TYPE.CR) {
    console.error(firstNews.title);
} else if (firstNews.type === TYPE.NE) {
    console.warn(firstNews.title);
}


switch (firstNews.type) {
    case TYPE.CR:
        console.error(firstNews.title);
        break;
    case TYPE.NE:
        console.warn(firstNews.title);
        break;
}


let num = 7;

(num = 6) ? 'verno' : 'ne verno';

console.log(num);