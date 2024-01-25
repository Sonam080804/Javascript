// console.log(2 > 1) // Boolean value output => true 

// console.log("2" > 1) // true 
// console.log("02" > 1)// true

// console.log(null > 0) // false
// console.log(null == 0) // false
// console.log(null >= 0) // true


/* The reason is that check == and comparisons > , < , >= ,
 <= work differently .  
 Comparison convert null to a number , treating it as 0 
 thats why null >= 0 is true and null > 0 is false . */

/* Undefined 
   Undefined < 0 // false
   Undefined == 0 // false
   Undefined >= 0 // false
*/

// strict check === (check datatypes too)

console.log("2" === 2) // false , bcaz datatypes is not same 

