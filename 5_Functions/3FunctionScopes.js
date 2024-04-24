var c=300;
if (true) {
    let a =10;
    const b=20;
    var c=30;
    
}



//console.log(a);
//console.log(b);
console.log(c); //idhar const and let ke scope defined hain but Var ki scope defined ni hai
//even if we had made the value of c=300 in line 1 still the output will  be 30 due to scope conflict

// function one(){
//     console.log("I am into one")
//     one();
// }
// one(); //isse infinite loop me lga diya mene


//++++++++++++++++++Hoisting+++++++++++++++++++++
console.log(addone(6));

function addone (num){
    return num+1;
}//idhr bs function write kra tha toh ise acces kr skte hain an dkoi error ni aayega

//but herem, we can't acess the function as we have stored in it the  addtwo const.
addTwo(5);
const addTwo=function(num){
    return num+2;
}