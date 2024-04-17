const score=400;

const balance=new Number(100); //isse striclty define ho gya ki8 ye number hai hai

console.log(balance);

console.log(balance.toString().length); //prints length
console.log(balance.toFixed(2));//it sets upto the digits after digital

const otherNumber= 234.98503

console.log(otherNumber.toPrecision(3)) //Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.


//if wer put the prfecison value upto the digits 1 then it gives upto 1 only and after that it gove sin exponential 
//-> check output

const hundreds =100000000000
console.log(hundreds.toLocaleString()); //changes in the indian number system

//++++++++++++++++++++++ Maths ++++++++++++++++++++++++
console.log(Math);

console.log(Math.abs(-4)); //gives the absolute value
console.log(Math.round(67.98)); //gives the round value

console.log(Math.floor(67.98)); //gives the lower value
console.log(Math.ceil(67.121)); //gives the upper value
console.log(Math.min(4,3,6,8,9)); //gives the min value
console.log(Math.max(4,3,6,8,9)); //gives the max value


console.log(Math.random()); //gives the random number between range 0-1
console.log((Math.random()*10)+1); //isse 1 se to  upar hi aayega and  coz in worst case agar zero aaya to bhi one aayega

console.log(Math.floor(Math.random()*10)+1); //ye uski bs floor value hi dega


const max=20;
const min =10;
//matlab 10 se 20 ke bich me number chaiye
console.log(Math.floor(Math.random()*(max-min+1))+min);
//(max-min+1) => + 1 taaki zero case avoid ho and baad me +min taaki min se jyada aye
