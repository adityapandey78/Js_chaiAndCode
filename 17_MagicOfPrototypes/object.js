function multipleBy5(num){
    return num*5;
}
multipleBy5.power=2;
console.log(multipleBy5(5));
console.log(multipleBy5.power);

console.log(multipleBy5.prototype);


function createUser(username,score){
this.username =username;
this.score=score
}
//hum apna khud ka prototype bhi bna skte hain jisse jo chahe wo sk skte hain
createUser.prototype.increment= function(){
 this.score++; 
}

createUser.prototype.printMe= function(){
    console.log(`Score is ${this.score}`);//jisne bulaya uske pqaas jaayega
}
// for ease of use baar baar prototype use rne ki jegeh hum seddeh ban skte hai ,, xoz the js to hr method ka ek prototype to rakhta hi hai na
const chai= new createUser("chai",25); //new user create hone se upar  wale prototypes vegera inject honeg and reflect honge 
//otherwise error aayewga sine bydefault  use ni honge
const tea= new createUser("tea",250);
chai.printMe()
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/