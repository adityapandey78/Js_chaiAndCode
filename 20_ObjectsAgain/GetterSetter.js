class User{
     constructor(email,password){
        this._email=email;
        this._password=password;
    }

    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
        this._password=value.toUpperCase();
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email.toUpperCase();
    }
}
/* same hi name use krne se callstack full jaati hai, constructer and getter and setter sdono hi call kr ne lag jaate hain ek saath , that is why ye isme ek underscore lga dete hain 

 When you try to get or set the properties, it repeatedly calls the getter or setter methods, resulting in a stack overflow error.

 Q.) ye dono alag ni ho gye???
-> wese ye nya ek variable to bn jaata hai but stil since ye iski private entity hi hoti hai that's why ye same hi value ko represent kr rha hai , esa keh skte hain hum
*/
const Aditya= new User("Aditya@134","Aditya")
console.log(Aditya.password);
Aditya.email="Lucky@ai"
console.log(Aditya.email);
