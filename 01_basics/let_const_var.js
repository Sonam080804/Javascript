const accountId = 144553 
let accountEmail = "abcd@gmail.com"
var accountPassword = "123456"
// We can declare a variable without using literal .
accountCity = "Lucknow" 
  

//accountId = "234" // Not allowed due to const throw error

console.log(accountId);

accountEmail = "acds@gmail.com"
accountPassword = "0956"
accountCity = "Aligarh"

console.table([accountId ,accountEmail , accountPassword , accountCity]) ;

/*We use let rather than var bcaz var is
globally scoped and let is block scoped*/
 
// Default value is undefined if the variable is not initialised .

let accountName ;
