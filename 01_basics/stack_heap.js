// Memory 2 types 

// Stack and Heap types 

// Stack memory --> primitive datatypes(get a copy of variable) 

// Heap memory --> Non-primitive datatypes(get a reference of original value)

let myValue = 1234 // This stores in stack memory

let anotherValue = myValue // Copy of value passed to anotherValue

anotherValue = 109456 

console.log(myValue) // Output --> 1234
console.log(anotherValue) // Output --> 109456

let userOne  = {
    email: "user@gmail.com" ,
    upi: "user@ybl" 
}

let userTwo = userOne 

userTwo.email = "sonam@gmail.com"


/* UserOne (name of object stored in stack memory with the reference(address)
of actual object but the object has allocated memory in heap )
So when you have declare UserTwo = userOne means is that you have pass the
reference of userOne in userTwo . Now if you change email of userTwo it will
change email of UserOne also */

console.log(userOne.email)// output -->  sonam@gmail.com
console.log(userTwo.email)// output -->  sonam@gmail.com







