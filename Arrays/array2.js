const marvel = ["thor" , "ironman" , "spiderman"]
const dc = ["flash" , "batman" , "superman"]

//marvel.push(dc) // dc become an element in marvel array inside array 
//console.log(marvel) // [ 'thor', 'ironman', 'spiderman', [ 'flash', 'batman', 'superman' ] ]

//console.log(marvel[3][0]) // flash  for nested arrays 

const newArr = marvel.concat(dc) ;// concate returns a new array 
//console.log(marvel) //[ 'thor', 'ironman', 'spiderman' ]
//console.log(newArr) // [ 'thor', 'ironman', 'spiderman', 'flash', 'batman', 'superman' ]

// Spread operator

const all_new_heroes = [...marvel, ...dc] // spread operator breaks an array into individual elements . you may add more then 2 arrays .
//console.log(all_new_heroes) //[ 'thor', 'ironman', 'spiderman', 'flash', 'batman', 'superman' ]

const another_arr = [1 , 2 , 3 , [4,5,6] , 7 , [1,2,[4,5]]] 

const real_another_arr = another_arr.flat(Infinity) // Give infinity as we dont now the depth .
//console.log(real_another_arr) // [
//     1, 2, 3, 4, 5,
//     6, 7, 1, 2, 4,
//     5
//   ]

console.log(Array.isArray("Sonam")) //false as it is string 
console.log(Array.from("Sonam")) // [ 'S', 'o', 'n', 'a', 'm' ]
console.log(Array.from({name: "Sonam"})) // [] return empty array you have to specify which kind of array do you want .

let score1 = 100
let score2 = 200
let score3 = 300 
console.log(Array.of(score1 , score2 , score3))// [ 100, 200, 300 ]




