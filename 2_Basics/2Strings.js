const  name="Aditya"
const repoCount= 50

// avoid this kind of concatenation
//console.log(name + repoCount + "Value");

//string interpolation 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//new use krne se ye ek string name ka object bnata hai and isse keys and  prototypes ka access bhi milta hai
const gameName=new String('Aditya-Pande')

console.log(gameName); 

console.log(gameName[0]);
console.log(gameName.__proto__); //will gives object 

console.log(gameName.length);
console.log(gameName.toUpperCase()); 

console.log(gameName.charAt('2')); //will give the position of char
console.log(gameName.indexOf('y'));

const newString= gameName.substring(0,4); //it can give substring and the last index is not counted
console.log(newString);




const anotherString= gameName.slice(-1,4);
console.log(anotherString); //it can take even -negative index as well


const newString1="    hitesh  "
console.log(newString1);
console.log(newString1.trim());
//see the documentation of trim

const url="https://aditya.com/hitesh%chaoudhary"
url.replace('%20', '-'); //replace kr dega %20 ko - se 


//can ask some questions as well
console.log(url.includes('aditya')); //o/p=> true 

console.log(gameName.split('-')); //[ 'Aditya', 'Pande' ]
//it splits the strings with the help of parameters 

