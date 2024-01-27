const name = "Sonam"
const age = 19

//console.log(name + " " + age)

// String Interpollation

//console.log(`Hello my name is ${name} ans my age is ${age} .`)


const gameName = new String("Hello-World")

// console.log(gameName[0]) ; // H
// console.log(gameName.__proto__) // {} empty object

// console.log(gameName.length) // 11
// console.log(gameName.toUpperCase()) // These Functions Doesn't change original value 
// console.log(gameName) // Hello World

console.log(gameName.charAt(3)) ;
console.log(gameName.indexOf('l')) ;

const newString = gameName.substring(0 , 4) ;
console.log(newString) // Output Hell (4th not include) 

const anotherString = gameName.slice(-2 , 4) 
console.log(anotherString) // 

const newStringOne = "   sonam    "
console.log(newStringOne) ; //    sonam    
console.log(newStringOne.trim()) ;//sonam 

const url = "https://sonam.com/sonam%20sonam"

console.log(url.replace('%20' , '-')) //https://sonam.com/sonam-sonam

console.log(url.includes('sonam')) // true 

console.log(gameName.split('-'))
