//for of loop
//["","",""]//array containing  varian=bles
//[{},{},{}]//containing functions

// for (const num of arr) {//ye kispe loop lgana hai wo dekhte hain
//     console.log(num);
// }

const greetings="Hello World!";

for (const greet of greetings) {
   // console.log(`Each char is ${greet}`);
}
//ye greeting ke each char ko pass out krega

//Maps=> is an object and has key value and stores unique values
const map=new Map()
map.set('IN',"India")
map.set('UK',"United Kingdom")
map.set('Fr',"France")

console.log(map);
for (const key of map) {
    console.log(key);
}
//But above will print the value of keys only so to get the all value we have to write in the []
console.log(map);
for (const [key,value] of map) {
    console.log([key,':-',value]);
}

constmyObject={
    'game1':'NNFS',
    'game2':'Spiderman'

}
for (const [key,value] of myObject) {
    console.log(key,':-',value);
}

//Note=> maps are iteratable using the for of loop whereas thge objects are not.
