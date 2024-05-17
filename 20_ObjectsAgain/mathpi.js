const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(Math.PI);
Math.PI=5;
console.log(Math.PI);
//sincer PI ek constant hai to uski value change ni hogi ese

console.log( descriptor); // property descriptor ka kaam hota haiki wo objects ki descriptions leke aaye
/*
{
  value: 3.141592653589793,
  writable: false, //PI me iski value false kr rakhi hai
  enumerable: false,
  configurable: false
}
*/

/*
We can set the properties of own objects as same as PI like whateber we try we cant modify its value as same way we can set some criterias for our objects as well 
*/

const chai ={
    name:'ginger chai',
    price:250,
    isAvailable:true
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
/*
ye mere object ki properties
{
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
//ab isse hum change kr diya iska

//=> id enumeration is false then we camn use loop over that object