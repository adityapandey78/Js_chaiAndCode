//+++++++++++++++ Memory +++++++++++++++++++++++
//Stack->Primitive , Heap-> Non-Primitive

let myYoutubename="Hiteshchaudharydotcom"
let anothername=myYoutubename

anothername="chaiaurcode" //trying to rename
console.log(myYoutubename);
console.log(anothername);

//idhar stack me ek copy bn jaata hai, so jo bhi change hog aus copy ka hi hoga

let userOne={
    name:"Aditya",
    email:"aditya@gamil.com",
};

let userTwo= userOne;
userTwo.email="Lucky@gamil.com";
console.log(userOne.email);
console.log(userTwo.email);

//ab idhr do hi change ho gya coz not primitive store hote hain heaps and wo same hi memory ko point out krte hain