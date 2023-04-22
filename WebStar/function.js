const name = 'Alex';
let final = 0;


if (name === 'Alex') {
    const product = createProduct('Арбуз', 100, 1);
    const alexCart = [product];

    const debt = 150;

    final = calculateFinalPrice(alexCart);
    final += debt;

} else if (name === 'Jonh') {
    const product = createProduct('Хлеб', 10, 2);
    const jonhCart = [product];

    console.log(jonhCart);

    const debt = 50;

    final = calculateFinalPrice(jonhCart);
    final += debt;

} else {
    const product = createProduct('Молоко', 50, 1);
    const uSerCart = [product];
    
    final = calculateFinalPrice(uSerCart);
}
console.log(final);

function createProduct(name, price, count) {
    if (name === '') {
        name = 'Неизвестный продукт';
        console.log('Вы задали неправильное имя продукта');
    }
    if (typeof price !== 'number') {
        price = 0;
        console.log('Вы задали неправильную цену');
    }
    if (typeof count !== 'number') {
        count = 0;
        console.log('Вы задали неправильное количество');
    }
    return {
        name,
        price,
        count,
    };
}

function calculateFinalPrice(cart) {
    let finalPrice = 0;

    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];

        finalPrice += (product.price * product.count);

    }
    return finalPrice;
}
calculateFinalPrice();

