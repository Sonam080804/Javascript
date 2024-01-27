// const score = 1235 
// console.log(score) // 1235

// const balance = new Number(123) 
// console.log(balance) // [Number: 123]

// console.log(balance.toString().length) // 3
// console.log(balance.toFixed(2)) // 123.00

// const otherNumber = 23.7894
// const otherNumber1 = 123.7894
// const otherNumber2 = 1123.7894

// // Here Priority is given before decimal
// console.log(otherNumber.toPrecision(3)) // 23.8
// console.log(otherNumber1.toPrecision(3)) // 124
// console.log(otherNumber2.toPrecision(3)) // 1.12e+3


// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // 10,00,000



//**************  Maths   ******************/


console.log(Math) ;

console.log(Math.abs(-4)) // abs value 4
console.log(Math.round(4.3)) // round value 4
console.log(Math.ceil(4.3)) // Ceiling value 5
console.log(Math.floor(4.9)) // floor value 4
console.log(Math.min(4 , 5 , 6 ,2 ,3)) // Min 2
console.log(Math.max(4 , 5 , 6 ,2 ,3)) // Max 6
console.log(Math.random()) // Generate a random value between 0 10 1 
console.log(Math.floor((Math.random()*10) + 1))

const min = 10 
const max = 20 

console.log(Math.floor((Math.random()*(max - min + 1)))+ min)
