/* multilevel condition*/


const price = 100;
if (price >= 100) {
    const discount = price*20/100;
    const finalPrice = price - discount;
    console.log('You will get 20% discount. The final price is ' + finalPrice);
} else if (price >= 50) {
    const discount = price*10/100;
    const finalPrice = price - discount;
    console.log('You will get 10% discount. The final price is ' + finalPrice);
} else {
    console.log('You will not get any discount. The final price is ' + price);
}