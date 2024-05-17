// in the window the this fucntion gives the window where in the node enviroment it return empty array
function SetUserName(username) {
    //complex DB calls
    this.username= username;
}
 function createUser(username,email,password){
    //SetUserName(username); //ye call ni ho raha //hu, chahte the ki picchle function se hi ismer call ho jaaye but hua ni ye
    //so call krne ke liye 
    //SetUserName.call(username) //.call se call hoga and refrence hold hoga toh wo use kr skte hain

    //but idhr .call se call toh hoga but not hat useful
    SetUserName.call(this,username) //ye wala t6his current execution context kis aur function ko pass kr deta hai
    //i.e yhn waka this ke bass pe baat ho ri hai
    
    this.email= email;
     this.password=password;
 }

 const chai= new createUser("chai","Adityta@google.com","123");
 console.log(chai);
