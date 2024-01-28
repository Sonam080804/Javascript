const myArray = [0 , 1, 2, 3, 4, 5 , true , "Sonam"]

// Array is an object you may put diffrent data type element under a single name .
// Resizeable 
// They are not associative
//  based indexing 
// Array make shallow copy (same reference)

const myHeros = ["Ram" , "Krishna" , 'Hanuman'] 

// console.log(myArray[1]) // 1
// console.log(myHeros.length) // 3

// Array Methods

//myArray.push(8) // Add element at last 
// console.log(myArray) // [ 0, 1, 2, 3, 4, 5, true, 'Sonam', 8 ]
// myArray.pop() // Removes last element
// console.log(myArray) // [ 0, 1, 2, 3, 4, 5, true, 'Sonam']

myArray.unshift('abc') // Insert element at start
//console.log(myArray) // [ 'abc', 0, 1, 2, 3, 4, 5, true, 'Sonam']

myArray.shift() // Remove element at start 
//console.log(myArray) // [  0, 1, 2, 3, 4, 5, true, 'Sonam']

// console.log(myArray.includes(4)) // True
// console.log(myArray.indexOf(90)) // -1 (indicates not present)
// console.log(myArray.indexOf(5)) // 5

const newArr = myArray.join()
// console.log(myArray) // [ 0, 1, 2, 3, 4, 5, true, 'Sonam' ]
// console.log(newArr) // type --> string  0,1,2,3,4,5,true,Sonam

// Slice , Splice

console.log("A " , myArray)

const myn1 = myArray.slice(1,3) // extracts array or string portions, creating a new one without altering the original, using start and optional end indices

//console.log(myn1) // [1, 2] incluedes all index except last 
//console.log(myArray) // [ 0, 1, 2, 3, 4, 5, true, 'Sonam' ] Doesn't modify original array creates a new one .

const myn2 = myArray.splice(1,3) // JavaScript's splice() alters arrays by adding/removing elements at a given index. Parameters: Start Index, Elements to Remove, Optional Elements to Add. Unlike slice(), splice() modifies the original array.

console.log(myn2) // [1, 2 , 3] incluedes all index including last 
console.log(myArray) // [ 0, 4, 5, true, 'Sonam' ] (trim) modify original array creates a new one .









