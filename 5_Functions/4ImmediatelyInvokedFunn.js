//(IIFE)=> Immediately Invoked Function Expressions
//When there are hell lot of global variables so to deal with their pollution we need to execute the function immediately

//()() => 1st Paranthesis is used for functionm definition and the seconn one  is used for the excution of the function

//eg.
(function chai(){
    //this is also called Named IIFE
    console.log("Aditya here!");
})(); //here it is necessary to end such type of functions with semi-colon to deal with tbhe error and stop the function 

((name)=>{
    console.log(`Hii! ${name} is using the arrow function`);
})("Aditya"); //isme second wale me mai arg bhi pass kr skta hun

//ternary operator
//