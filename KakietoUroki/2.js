const discounts = [
    [5, { value: 100, cond: 150 }],
    [5, 50],
    [10, 200],
    [15, 300],
    [20, 500],
];

const games = [{
    id: 1,
    name: '  death stranging    ',
    price: '1000rub',
    description: 'Компьютерная игра в жанре action с открытым миром, разработанная...',
    link: 'hhtp:wqdqwd.com',
    discountType: null,
    hashTags: ['Шутер', '', ['Приключения, Доставка еды']],
}, {
    id: 2,
    name: 'the last of us  ',
    price: 300,
    description: 'Компьютерная игра в жанре action-adventure с элементами survival horror...',
    link: 'hhtp:wqdqasdasdwd.com',
    discountType: 20,
    hashTags: ['Стелс', 'Экшен', 'Приключения'],
}, {
    id: 3,
    name: 'death stranging',
    price: null,
    description: null,
    discountType: null,
    hashTags: [],
}, {
    id: 4,
    name: 'SHREK 2: THE GAME',
    price: '321',
    description: 'Игра про зеленого мужика, который всем нравится',
    discountType: 5,
    hashTags: [['Шутер, Приключения'], 'Хоррор', 'Криминал'],
}, {
    id: 5,
    name: 'GTA3',
    price: 20.511221414,
    description: 'Игра про безумного мужика, который всем нравится',
    discountType: 5,
    hashTags: undefined,
},
];

const formattedGames = [];
const problemGames = [];



games.forEach((game) => {
    const price = !game.price ? 0 : parseFloat(game.price);

    const discountData = discounts.find((discount) => {
        const discountValue = discount[1];

        if (typeof discountValue !== 'number' && discountValue.cond > price) {
            return false;
        }
        if (discount[0] === game.discountType) {
            return true;
        }
    });

    console.log();

    const discountValue = Array.isArray(discountData) ? discountData[1] : 0;

    const numericDiscount = typeof discountValue === 'number' ? discountValue : discountValue.value;

    console.log(game.id, numericDiscount);


    const newGame = {
        id: game.id,
        name: game.name.trim(),
        finalPrice: parseFloat(price.toFixed(2)) - numericDiscount,
    };


    if (newGame.finalPrice < 0) {
        const reasons = ['Цена уходит в минус']
        problemGames.push(newGame);
        return;
    }
    const isDublicate = formattedGames.some((formattedGame) => {
        if (newGame.name.toLocaleLowerCase() === formattedGame.name.toLocaleLowerCase()) {
            return true
        }
    });

    if (isDublicate) {
        const reasons = ['Дубликат']
        problemGames.push(newGame);
    } else {
        formattedGames.push(newGame);
    }

})

console.log(formattedGames);