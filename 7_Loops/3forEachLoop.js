const coding =["js","c++","ruby","java","python"]

//for reach loop
// method 1 for representing it
// coding.forEach( function(val){
//     console.log(val);
// })
//method to using arrow function
coding.forEach((item) => {
    console.log(item);
});


function printMe(item){
    console.log(item);
}

//passing the function into a 
//coding.forEach(printMe);

//for reach can have multiple paramteres as well
//it 
// coding.forEach((item,index,arr) => {
//     console.log(item,index,arr);
// });


//+++++++Object in the array++++++

const myCoding=[
   { 
    languageName:"Javascript",
    LanguageFileName:"js"
    },
   { 
    languageName:"Java",
    LanguageFileName:"java"
    },
   { 
    languageName:"Python",
    LanguageFileName:"py"
    },
   { 
    languageName:"C++",
    LanguageFileName:"cpp"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})

//idhr mene object ko access kr liya for-each me