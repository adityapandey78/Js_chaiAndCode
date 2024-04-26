//primitive
// 7 types: string, Number, boolean, null, undefined,Symbol, BigInt



/*  javascript is dynmaically typed language */

const score=100
const scoreValue=100.3

const outsideTemp=null
let userEmail;
//++++++++++++ Symbols +++++++++++++++++++
console.log("Symbols");
const id=Symbol('123');

const anotherId=Symbol('123')
console.log(id===anotherId); //result would be false coz this is the work of symbol even if you give same number it'll do not make it equal

//symbols are the only primitive data type that has reference identity (that is, you cannot create the same symbol twice), they behave like objects in some way.


const isLoggedIn=false

const bigNumber=23489075434539034590453n//peeche n lga dene se bigInt me change ho gya

//Reference (non-primitive)
//Arrays, Objects,Functions

const heros=["Shaktiman", "naagraj", "doga"];


let myObj={
    name: "aditya",
    age: 22,
};

const myFunction =function(){
    console.log("Aditya is inside this function");
}

//get the datatype sof all these datatypes
// https://262.ecma-international.org/5.1/#sec-11.4.3