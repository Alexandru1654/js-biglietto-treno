// number of km
let km = parseFloat(prompt());

// age
let age = parseInt(prompt());

// price km
const priceKm = 0.21;
let = finalPrice = km * priceKm;

// age discount 
if (age < 18) {
    finalPrice *= 0.8;
}

// age over
else if(age > 65) {
    finalPrice *= 0.6;
}

const formattedPrice = new let.NumberFormat (
    `it-IT`, {
        style: 'currency',
        currency: `EUR`
    }).format(finalPrice);

    alert(`${formattedPrice}`)

    'minimumFractionDigits'; 2;


