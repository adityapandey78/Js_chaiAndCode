//************** Operations*************** */
let value=3;
let negValue= -value;
console.log(negValue);

//some examples

console.log("1"+2); //=> 12
console.log(1+"2"); //=> 12
console.log("1"+2+2); //=> 122
//*****/
console.log(1+2+"3"); //=>33
 
//now checking the null
console.log(null>0); //false
console.log(null==0); //false
console.log(null>=0);//true

//Equality check == ad comparisos < > >= <= work differently. 
//Comparisons convert null to a number , treating it as a zero
//that's why (3)>=0 is true and null> 0 false

console.log(undefined==0);


//=== is strict check, It not only check the value but the data type as well

console.log("2"===2); //it will give false