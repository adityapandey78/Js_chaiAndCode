 function addTwoNumbers(number1, number2){
    console.log(number1+number2);
}
//here number1 and number2 is called function parameters
const result= addTwoNumbers(3,5);
//here the values which we are passing are called arguments

//-------- the work of function is to do its operation which is summing in this case-----------
console.log("result: ",result);
//but the when we print the result then we get undefined as output!
// o/p=> result:  undefined

function addTwoNumbers(number1, number2){
    let result= number1+number2;
    return result;
}

console.log("Result:",result); //now this result will get printed

function loginUserMessage(username){
    if(username===undefined){
        console.log("Please Enter a Username!");
        return;
    }
    return `${username} just logged in !`
}
 //console.log(loginUserMessage("Aditya"))
console.log(loginUserMessage());

 //=> Note: When we pass the values we get the desired output, what if no value is passed?????
 //Then we get undefined as output!
 