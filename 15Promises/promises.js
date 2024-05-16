//we can create a new instance for the promises just like classs
const promiseOne= new Promise(function(resolve,reject){
    //promise do chijon ko intake krta hai resolve and reject
//do any async task
//DB Calls, Cryptography,Network
setTimeout(function(){
    console.log('Async Task is complete!');
    resolve(); //iske baad resolve connect kr diya aage steps ke liye
},1000)

})
// isse ab promise coonsume hoga
//here promiseOne.then -> Attaches callbacks for the resolution and/or rejection of the Promise.
promiseOne.then(function(){
    console.log("Promise Consumed!");
})






//🟡 Usko variable me store  krna imp ni hai

new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async task two!");
    }, 1000);
}).then(function(){ //isse direct resolve kr diya jyada jhanjhat ni hai
    console.log("Async 2 resolved ");
});





const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Chai aur code!", email:"aditya@gmail.com "})
        //resolve se hum data bhi pass kr skte hain,
        // usually hum object pass krte hain
    },1000)
})
promiseThree.then(function(user){ //.then se promise resolve hota hai and idhr ab data bhi le liya hai
        console.log(user); //isse ab user pass ho jaayega 
})

//extracting the data 
const promisefour =new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false; //we can keep it true or false ➡️
        if(!error){
            resolve({username:"Aditya",password:"123"})
        }
        else{
            reject('Error: Something Went Wrong');
        }
    },1000)
})

//ese data extract ni kr payege 
// promisefour.then((user)=>{
//     console.log(user);
//     return user.username;
// })
// console.log(username);

promisefour.then((user)=>{
    console.log(user);
    return user.username;
    //itne se user ka username fetch kr liya and ab iske baad change krange .then ki further deep down jaaye data ke
}).then((username)=>{
    console.log(username);
}).catch(function (error) { //.catch aaya huya data catch krega jo bhi aaya ho agar error aaya hai ya fir rejection aaya hai to
    console.log(error);
    //➡️jab upar error true rhega to error print hoga agar upar error false kr degnge to data catch krega
}).finally(()=> console.log("the promise is either resolved or rejected!"));

//.finally baad me dekhta hai ki promise resolevv huya ni nahi resolve hua ya reject hua but kucch to hua

//  ++++++Handling the promise using async await++++++++


//jaruri ni hai ki promise bs .then and .catch se hi karu
const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error = true; 
        if(!error){
            resolve({username:"PromiseFive",password:"123"})
        }
        else{
            reject('Error: JS Went Wrong');
        }
    },1000)
});

//promise is  an object so we don't handle it like function
// async function consumePromiseFive(){
//     const response=await promiseFive;
//     console.log(response);
// }
// consumePromiseFive();
//but here the async didnot handled the rejection
//so to resolve this issue we can use the try and catch method

async function consumePromiseFive2(){
    try {
        const response=await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive2();

//getting the data from the API 

async function getAllUsers(){
    try {
        const response =await fetch('https://jsonplaceholder.typicode.com/users');
        //isse ye reponse me data fetch krke storekrega
        //fetch krne me bhi time lgta hai isliye whn bhi await lgaya hai
        const data= await response.json() //convert hone me bhio time lgta hai islye yhni await likha hai otherwise ye conde work nji kr paata sahi se
        console.log(data);
    } catch (error) {
        console.log("E:",error);
    }
}

//getAllUsers(); //ab isse sara data print ho jaayega

//doing same thing with .then .catch method se
 fetch('https://jsonplaceholder.typicode.com/users')
 .then((response)=>{
    return response.json();
 })
 .then((data)=>{
    console.log(data);
 }).catch((error)=> console.log(error));

//here we can see that the fetch API is working at first and then other methods are executing   
/*
A fetch() promise will reject with a TypeError when a network error is encountered or CORS is misconfigured on the server-side, although this usually means permission issues or similar — a 404 does not constitute a network error, for example. An accurate check for a successful fetch() would include checking that the promise resolved, then checking that the Response.ok property has a value of true.

//=> Ye error ek response hi hota hai 
ye resolve me hi milta hai, reject me chijein tb milti hain jb wo pass on hi ni krta hai value, but idhar error wale me pass on ho ri hai hai value so ye resolve as as response me milta hai
*/

//https://developer.mozilla.org/en-US/docs/Web/API/fetch#syntax