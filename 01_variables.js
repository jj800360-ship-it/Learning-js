const accountId = 123456789;
var accountEmail = "jj800360@gmail.com";
let accountName = "Jyoti ";
let accountPassword = "password123";
let accountCity = "Hyderabad";
let accountState ;
//accountId = 987654321;//
// This will not work because const cant be re declared or re assigned//
accountEmail = "jyotiprakashsethi091@gmail.com";
accountName = "Jyoti Prakash Sethi";
accountPassword = "123";
accountCity = "Bangalore";

console.log(accountId);

console.table([accountEmail, accountName, accountPassword, accountCity, accountState]);
 
/*prefer to not use var due to scope issues 
Block Scope and Function Scope */