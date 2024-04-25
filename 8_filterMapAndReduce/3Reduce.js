//Array.reduce()
const myNums=[1,2,3,4]
const myTotal=myNums.reduce(function (acc,currVal){
    console.log(`acc: ${acc} and currVAl: ${currVal}`);
    return acc+currVal;
},0)
//Explicit retrun 
//idhr sbse last me '0' acc ki intiial value hai

//Implicit return
const myTotal2=myNums.reduce((acc,curr)=> acc+curr,0);

//we can set it other nums as well
console.log(myTotal)
console.log(myTotal2)

const ShoppingCart=[
    {
        itemName:"js Course",
        price:999
    },
    {
        itemName:"data Science",
        price:10000
    }
]
const price=ShoppingCart.reduce((acc,item)=> acc+item.price,0)
console.log(price);
