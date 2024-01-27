// # Primitive 

/* 7 types (call by value -> change incopy not in reference)
Number , String , Boolean , null , Undefinedd , Symbol , BigInt */

// Js is an dynbamically typed language bcaz it chooses its datatype in initialisation */

let a = "sonam" // String datatype but Nowhere we declare its a string datatype
a = 12 // And we further change it too

// Reference type ( Non Primitive )

/* Array , Objects , Function */

const bignumber = 12345678998763456n // BigInt

// Array
const heroes = ["peyu" , "hema" , "simo"] ;

// Object 

let myObj = {
    name: "Sonam" , 
    age : 19 ,
}
// Function
const myFunction = function(){
    console.log("Hello world") ;
}

const scorevalue = 123 ;

console.log(typeof scorevalue) 

// null is a object type .

// function is a type function (object function) .



