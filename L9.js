//const prices = [100,343,546,87,253,765,4536,7657,2435,647];

//for (const price of prices) {
    //const TVA = 0.19 * price;
    //console.log("TVA este in valoare de: " + TVA + " lei")
//}

//2 methods to implement this algorithm

function CalculateTVA(prices){
    for (const price of prices) {
        const TVA = 0.19 * price;
        console.log("TVA este in valoare de: " + TVA + " lei")
    }
}

CalculateTVA([213,124,2143,342]);
