// ✅ টার্নারি অপারেটর ব্যবহার করে ভোটিং এলিজিবিলিটি চেক
const age = 15;
console.log(age >= 18 ? 'You are eligible for a vote.' : 'You are not eligible for a vote.');

// ✅ টার্নারি অপারেটর ব্যবহার করে ডিসকাউন্ট চেক
let price = 100;
const isLeader = true;

price = isLeader ? price - price * 20 / 100 : price - price * 10 / 100;

console.log('Final price:', price);


// ✅ টার্নারি অপারেটর ব্যবহার করে প্রথম সংখ্যাটি বড় কিনা তা চেক
const firstNumber = 50;
const secondNumber = 100;
const message = firstNumber > secondNumber ? 'First number is greater than second number' : 'Second number is greater than first number';
console.log(message); // Second number is greater than first number                 