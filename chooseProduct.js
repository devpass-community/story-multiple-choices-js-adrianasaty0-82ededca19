function chooseProduct(segment) {
    const segmentsProduct = {
        'Beverage': 'Soda',
        'Fruit': 'Apple',
        'Hygiene': 'Soap'
    }
    return segmentsProduct[segment]
}

module.exports = chooseProduct;
