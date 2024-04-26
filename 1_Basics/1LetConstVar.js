const accountId=144567
let accountEmail="Aditya@shamlatech.com"
var accountPassword="12345"
let accountCity="Ranchi"
//cant change the `const` values
//accountId=2
console.log(accountId);
accountEmail="hc@aditya.com"
accountPassword="2121"
accountCity="kateya"

let accountState;

console.table([accountId,accountEmail,accountPassword,accountCity, accountState]);

//the problem with var is that it does not kk have defined scope or control over scope
//because it has issue over block scope and functional scope