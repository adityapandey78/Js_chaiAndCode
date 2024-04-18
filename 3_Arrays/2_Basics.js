const marvel_Heros=["thor", "IronMan","spiderman"];
const dc_Heros=["superman","flash","batman"];

//marvel_Heros.push(dc_Heros);

//it pushes the dc_Heroes into the marvel heroes but as it pushes , the marverl heroes takes the whole array at its single element
console.log(marvel_Heros);
//=>Output= [ 'thor', 'IronMan', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//it is taking the array as its data 

//console.log(marvel_Heros[3][1]); //to get the output as flash

//++++++++++++ Concat Function+++++++++++
const allheroes=marvel_Heros.concat(dc_Heros);
//it also adds the two array but here also it takes as the array of two
//It not just adds two array but also makes a new array and gives the o/p

console.log(marvel_Heros);
console.log(allheroes);

//+++++++++++++ Spread Operator+++++++++++++++
//stand operator also concats the arrays and it is used more 
const allNewHeros= [...marvel_Heros, ...dc_Heros];
console.log(allNewHeros);

//++++++++ Flat Function +++++++++

//It concats the array and its subarrays into a flat array including all 
const another_array=[1,2,3,4,5,6,[4,6,9],[9,3,6,[6,8],5]]

const real_another_array=another_array.flat(Infinity) //infinity is for depths of the array By defaluts it takes all
console.log(real_another_array);



//+++++++Some General cases of array and its functions+++++++++

console.log(Array.isArray("Hitesh"));//will check if it is array or not

console.log(Array.from("Aditya"));//it makes array from given attribute

console.log(Array.from({name:"hitesh"})); //interesting
//Array.from() is a static method in JavaScript that creates a new Array instance from an array-like or iterable object.



let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3)); //.of makes an array from a set of elements

