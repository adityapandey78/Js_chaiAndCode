let score= "33abc"

console.log(typeof score);
console.log(typeof (score));
//value conversion 
let valueInNumber= Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber)
/* 
->here the score is kinda alphanuemric
-> `Number` converts the score into number data type
-> but the output value is NaN => NotANumber
*/

// "33"=>33
//"33abc"=>NaN
//true=>1 false=> 0

//Boolean Conversion
let isLoggedIn="Aditya"
let booleanIsLogedIn= Boolean (isLoggedIn)
console.log("boolean Conversion");
console.log(booleanIsLogedIn);


//1=> true
//""=> false ("Empty string")
//"aditya"=>true


//string conversion
