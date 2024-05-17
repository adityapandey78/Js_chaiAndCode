//this is talking after the coming of ES6
class user{
 constructor(username,email,password){
    this.email=email;
    this.username=username;
    this.password=password;
 }
 encryptPassword(){
    return `${this.password} abc`
 }
 changeUsername(){
    return `${this.username.toUpperCase()}`
 }
 
}
const chai= new user("chai","Aditya@google.com","123")
console.log( chai.encryptPassword());
console.log(chai.changeUsername());


//behind the scenes using the old method]
function user2(username,email,password){
    
    this.email=email;
    this.username=username;
    this.password=password;

}
user2.prototype.encryptPassword=function(){
    return `${this.password} abc`
}
user2.prototype.changeUsername=function(){
    return `${this.username.toUpperCase()}`
}
const tea= new user2("tea","tea@google.com","123")
console.log(tea.encryptPassword());
console.log(tea.changeUsername());

//kaam dono hi method se ho rahe hain
