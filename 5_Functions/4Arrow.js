const user={
    username:"hitesh",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);//->it's printing out the function
        //this keyword to used to point out to the variables inside the scope whether it it function or any var
    }
}

//user.welcomeMessage();
// user.username="sam";
// user.welcomeMessage(); now ab isse username update ho jayega

//console.log(this);//o/p={}   //windows ya Node ka default this NULL hota hai

// function chai()
// {
//     let username="Aditya"
//     console.log(this.username);//esa this objects ke andar hi kaam karega, functions ke undefined aa rha hai
    
// }
// chai()

// const chai=function(){  //even function ko ek constanat ke andr store krane ke baad bhi ni ho raha hai
//     let username="Aditya"
//     console.log(this.username);
// }
// chai();


//++++++++++Important+++++++++
// const chai=()=>{
//     let username="hitesh"
//     console.log(this);
// }
// chai();
//idhr arrow function use kr lene ke baad bhi undefined hi aa rha hai

//========= Arrow Function =======
//explicit return -> we have to use curly braces and return the value
const addTwo=(num1,nums2)=>{
    return num1+nums2;
}
console.log(addTwo(3,4));

//Implicit Return-> We don't have to return the value
const addtwo=(num1,num2) => (num1+num2) //usually written under "()"  and 
console.log(addtwo(7,9));