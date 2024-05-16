const user={
    username: "Aditya",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        //console.log("Got user details from database");
        console.log(`Username${this.username}`);//this isliye lgha rahe hai kyuki isse pta lagta hai ki ye wala hi chaiye
        console.log(this); //isse curent context log out hota hai
        //yhn local context me this ki value iske limit ke anadar ki hi chij hai
    }
}


console.log(user.username);
console.log(user.getUserDetails());
console.log(this);//yhn ye global contextme bat krta hai, jisse ye output window aaata hai in tehg browser environment 

//++++++++++++Constructor Function++++++++++++++
//const promiseOne=new Promise();
//constructure function allows to make multiple instance literal with the helpof same object 
//like we make new date or new promise and we name them another 
function Username(username,loginCount,isLoggedIn) {
this.username = username;
this.loginCount = loginCount;
this.isLoggedIn=isLoggedIn;
this.greetings=function(){
 console.log("Namaste sarkar");
}
return this;
}

const userOne= Username("Aditya",12,true);
const userTwo= new Username("Chai Aur Code",11,false); //isse values ovverride ho jaayegi 
console.log(userOne); //ye values override hua hi print hoga 
//that is the reason hum har baar new instance bnate hain
//new use krne se ovverride ni krega 
console.log(userTwo);
console.log(greetings());
//constructure function har baar new instance deta hai

//new usekrne se empty instance create hota hai jisme hum instance bolte hain anbd iske chalte consctructure function call hota hai -> saare variable mil jaate hain usk properties ke hisab se -> uske baad outpu milta hai
