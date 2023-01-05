function calculatepricewithdiscount ( initialPrice, isalreadyonsale) {
    let priceWithDiscount;
    if(isalreadyonsale === true) {
        priceWithDiscount = initialPrice;
    } else {
        priceWithDiscount = initialPrice - 10;
    }

    if(priceWithDiscount < 0.5 * initialPrice) {
        priceWithDiscount = 0.5 * initialPrice;
    }

    const finalPrice = priceWithDiscount;

    return finalPrice;

}


console.log(calculatepricewithdiscount(15, false));
