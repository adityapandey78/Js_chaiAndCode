//arrays
const myArr=[0,1,2,3,4,5];
const myHeros=["Aditya","khushi"];
const myNewArr=new Array (4,5,6,78,89,8); //This does not require any sq brackets
console.log(myArr[0]);


//Array Methods
myArr.push(6);
console.log(myArr);

myArr.pop(6);
console.log(myArr);

myArr.unshift(10);//it adds the element at the starting of the array
console.log("Unshift", myArr);


//delete the first element
myArr.shift()
console.log( "Shifted Array",myArr);

console.log(myArr.indexOf(5)); //prints the element at the index 5

const NewArr=myArr.join(); //it converts the elements into the string
console.log(myArr);
console.log(typeof NewArr);


//++++++++++++++++++++ Slice and Splice++++++++++++++++++++++++
//interview question , diff b/w slice and splice
console.log("Slice and Spice");

console.log("A",myArr);
const myn1=myArr.slice(1,3);
console.log(myn1);

 console.log("B",myArr);

 const myn2=myArr.splice(1,3);
 console.log("C",myArr);
 console.log(myn2);

 //=> Slice = the outer range in the slice is not included  and it does not change the initial array

 //=> Splice= the outer range in the splice is included and it does change the array, it just takes the chunk of the array as per its limits and puts  it in the new array and it remaining items remains in the original array