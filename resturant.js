const age = 17;
const price = 100;

if (age >= 18) {  // বয়স ১৮ বা তার বেশি হলে ডিসকাউন্ট চেক করবে
    if (price >= 100) {
        const discount = price * 20 / 100;
        const finalPrice = price - discount;
        console.log('You will get 20% discount. The final price is ' + finalPrice);
    } else if (price >= 50) {
        const discount = price * 10 / 100;
        const finalPrice = price - discount;
        console.log('You will get 10% discount. The final price is ' + finalPrice);
    } else {
        console.log('You will not get any discount. The final price is ' + price);
    }
} else {  // **এখানেই else ব্লক আসবে**
    console.log('You are not eligible for a discount because you are under 18.');
}
