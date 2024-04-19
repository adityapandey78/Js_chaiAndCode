//singleton
//object Literals

//Object.create  //iske baare me baad me baat krenge

//how to use symbol
const mySym= Symbol("myKey1")//declaration of symbol

//=> Now to use symbol we have to declare symbol in the sq brackets  in the objects and same method is used in case you want to access that.


//+++++Symbol(interview Important)+++++
const JsUser={
    name: "Hitesh",
    "full name":"Aditya Pandey",
    age: 18,
    [mySym]:"myKey1",//this is the correct method to use symbol in the object
    //mySym:"myKey1", in case of the datatype remains the string 
    location:"Ranchi",
    email: "aditya@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","saturday"]

}
console.log(JsUser.name); //this is the general representation to call the objects' instances
console.log(JsUser["full name"]); //this method can be used eben if we define the instances in the char form
console.log(JsUser.Symbol);

JsUser.email="aditya@gmail.com";
//Object.freeze(JsUser)//Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
JsUser.email="lucky@gmail.com";
console.log(JsUser);


////++++++++++Functions+++++++++++
JsUser.greeting=function () {
    console.log("Hello Js user!");
}
console.log(JsUser.greeting());


JsUser.greetingTwo=function () {
    console.log(`Hello js user,${this.name}`);//ye same object ko ref krr rha hi to that's why
}

console.log(JsUser.greetingTwo());


//access krne ke liye do methods hain,
// 1.) . opeeator use krke
//2.) [] use krke