class User{
    constructor(usernamme){
        this.usernamme=usernamme;
    }
    logMe(){
        console.log(`Username is ${this.usernamme}`);
    }
}
class teacher extends User{
    constructor(usernamme,email,password){
        super(usernamme) //ye pure username ko hi inherit kr rha hai
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`New course was added by ${this.usernamme}`);
    }
}
const chai=new teacher("chai","chai@teacher.com","123");
chai.addCourse();
const masalaChai=new User("Aditya");
//masalaChai.addCourse() //masal chai k epaass iska acces ni hai
masalaChai.logMe(); //so masal chai ke paas accces hai as wo function hi uske andar tha

console.log(chai===masalaChai); //ye dono equal ni hai and wo same ni hai 
//coz User and teacher same ni hai
console.log(chai instanceof User); //ye batat ahai ki wio iska instance hai ki nahi