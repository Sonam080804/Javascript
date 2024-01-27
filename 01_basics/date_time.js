// Dates calculated in mili seconds

// Temporal API (Global Object) 

// let myDate = new Date()
// console.log(myDate) ;// 2024-01-27T19:18:47.958Z
// console.log(myDate.toString()) ;//Sat Jan 27 2024 19:18:47 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()) ; // Sat Jan 27 2024
// console.log(myDate.toLocaleString()) ; //  1/27/2024, 7:18:47 PM

//console.log(typeof myDate) // Object

let myCreatedDate = new Date(2024 , 0,23)// Months start from 0 in javascript .
//console.log(myCreatedDate.toString());

let myTimeStamp = Date.now() 

// console.log(myTimeStamp)//1706383716044  Gives value in mili second easily comparable .
// console.log(myCreatedDate.getTime())//1705968000000

console.log(Math.floor(Date.now()/1000)) // Get value in seconds 

let newDate = new Date() 
console.log(newDate.getMonth()) // jan -> 0
console.log(newDate.getDay()) // sunday -> 6

newDate.toLocaleString('default' , {weekday: "long"})