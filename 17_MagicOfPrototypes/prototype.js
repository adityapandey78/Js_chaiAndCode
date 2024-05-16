// let myName="Aditya       ";
// let myChannel="Chai       ";
// console.log(myName.truelength);


let myHeroes=["thor",'Spiderman'];
let heroPower={
    thor:"hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.aditya=function(){
    console.log("Aditya is present in all objects");
}
heroPower.aditya(); //isse ye hum saare objects me inject kr skte hain
myHeroes.aditya();
//yhn humne upar sbsse upar ki hierarchy me hi inject kr diya
//to bydefault hi sbme push kr diya

//for other case , agar uske neeche level ki hierarchy ya alag path ko power du to uske path ko milta hai


Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}
myHeroes.heyHitesh() //isse ye array me chala gya but ye function me ni jaayyega
//heroPower.heyHitesh()


// ++++++++++++Inheritance++++++++++++
const User={
    name:'Aditya',
    email:"aditya@google.com"
}
const Teacher={
    makeVideo:true
}
 const TeachingSupport ={ 
    isAvailable:false
 }
 const TASupport={
    makeAssignment:'JS Assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__= User;//old method
//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)//Sets the prototype of a specified object o to object proto or null. Returns the object o

let anotherUsername='chaiAurCode    '
String.prototype.trueLength =function(){
    console.log(`${this.name}`);
    console.log(`True Length is: ${this.trim().length}`);
}
anotherUsername.trueLength();
"Adityaaa  ".trueLength();