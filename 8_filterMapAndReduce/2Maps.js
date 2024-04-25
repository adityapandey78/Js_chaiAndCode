let myNumbers=[1,2,3,4,5,6,7,8,9,10]

const newNums=myNumbers.map((num)=> num+10)
console.log(newNums);

myNumbers.forEach(indexed => {
    console.log(indexed);
});

for (const index of myNumbers) {
    console.log(newNums);
}

for (const key in myNumbers) {
    if (Object.hasOwnProperty.call(myNumbers, key)) {
        const element = myNumbers[key];
        console.log(key);
    }
}

//+++++++++++ Chaining ++++++++++++
//By chaining method we can use multiple mathods in chain  
const newNum=myNumbers
            .map((num)=> num*10)
            .map((num)=>num+1)
            .filter((nums)=>nums>=40)
console.log(newNum);            
