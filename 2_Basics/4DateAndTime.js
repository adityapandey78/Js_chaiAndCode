let myDate=new Date();
console.log(myDate.toDateString());//Wed Apr 17 2024
console.log(myDate.toISOString()); //2024-04-17T06:06:46.160Z
console.log(myDate.toLocaleString());//17/4/2024, 11:36:46 am

console.log(typeof myDate);

//let myCratedDate= new Date(2023,0,23,5,3); //month 0 se start hote hain Js me coz hmne CVS me likha hai toh
let myCratedDate= new Date("02-22-2002");  //month-day-year
console.log(myCratedDate.toDateString());
console.log(myCratedDate.toLocaleDateString());


//time stamps
let myTimeStamp= Date.now();
console.log(myTimeStamp);
console.log(myCratedDate.getTime()); //get the time from the created date

console.log(Math.floor(Date.now()/1000)); //gives sec

let newDate =new Date();
console.log(newDate);

console.log(newDate.getDate());

newDate.toLocaleString('default',{
weekday:"long"
})

console.log(newDate);