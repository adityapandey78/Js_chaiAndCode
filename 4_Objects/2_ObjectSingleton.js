  //Singleton Objects

  const tinderUser={};
  tinderUser.id="123User";
  tinderUser.name="Sammy";
  tinderUser.isLoggedIn=false;

//console.log(tinderUser); now putput of all three


//++++++++++ Nested Objects ++++++++++++
const regularUser= {
    email:"adity@gmail.com",
    fullname:{
         userfulname:{
            firstName:"Aditya",
            lastName:"Pandey"
         }
    }
}

console.log(regularUser.fullname.userfulname.lastName);//This is how we can acess the instancesof nested objects

//Multiple Objects
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:"e",6:"f"}

//concatenating of objects
//++++ Methods of Concatenate+++++

const obj4={obj1,obj2} //but this will create a problem and result in inserting the object under the object

const obj5=Object.assign({},obj1,obj2,obj3);//blank braces in case of resulting the merge in a single braces

//++++++Spread Around Method +++++++
const obj6={...obj1, ...obj2,...obj3};

console.log("Concate of the objects");
console.log(obj4);
console.log(obj5);
console.log(obj6);


const users=[
    {
        id:1,
        email:"email1@gmail.com"
    },
    {
        id:1,
        email:"email2@gmail.com",
    },
    {
        id:1,
        email:"email3@gmail.com",
    },
    
]
//+>>>>>>>>>//
users[1].email; //by this method I can access the elements of same IDs
                    //+>>>>>>


//Again talking about the tinderUser object 

console.log(tinderUser);
console.log(Object.keys(tinderUser));// keys=>Returns the names of the enumerable string properties and methods of an object.

console.log(Object.values(tinderUser));
//aise keys use krke saari keys ko access kr skte hain and uspe operations kr skte hain
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));//Ans if the object has a propert or not!


// => Object.keys(Object_Name)  gives the keys of the objects
// => Object.value(Object_name)   gives the value of teh objects
//=> Object.entries(tinderUser)  gives the entries of the object
//=>(ObjectName.hasOwnProperty('property')
