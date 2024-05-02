// // document.getElementById('owl').onclick=function(){
// //     alert('Owl clicked!')
// // } 
// /*
// ->1st approach:-

// Get trigger the alert or any function in the HTML tag itself
// ---But not scalable---

// ->2nd Approach:-
// use the getEWLementbyId and then its onclick function then we can perform the operation but this function does not give us much feature and would be problematic in the long go.

// ->3rd Approach:-
// ->Adding the `event listners`: coz it can read many events like typing, ,ouse , click , scroll, drag,etc etc

// */
// //3rd approach
// document.getElementById('owl').addEventListener('click',function(){
// alert("Owl clicked Again!")
// },false)
// //here in the addeventListner thing there are three parameter 
// // [1]. click(or any event)
// // [2]. function
// // [3]. third parmeter is default false coz in many cases there are the some function where we have to pass true or false in them so it is used there!
// //

// //4th approach:- attachEvent -> It was used back in the days in the old days

// //5th approach:-  jQuery-> it was also used in good old days!!

// //-----Event Object-----
// document.getElementById('river').addEventListener('click',function(e){
//     //here [e] is the event object
//     console.log(e);//go and check in the console of the browser 
//     //there we can get hell lot of BROWSER EVENTS and ENVIRONMENT EVENT
//     //isse hum event object ki help se bahut saari cheijen access kr dekt hain like - timestanp,-location,-browser height and width,-
    
//     //-> Eg:- I fwe want to inser a circle at the point where user has clicked then we can getch the location using the event object and attach another event of creating a circle there!

//     //some important events
//     /*
//     1.) type
//     2.) timestamp
//     3.) Default Prevented //we can stop the default 
//     4.) target
//     5.) toElement
//     6.) srcElement
//     7.) currentTarget
//     8.) clientX,clientY , screenX,screeY, tiltX, tiltY etc etc 
//     9.) altKey,ctrlKey,shiftkey,keyCode
//     */
// },false)

// // -----Event Propagation-----

// /*
// The last parameter true or false in the event function
// -> event Capturing and Event Bubbling
// ->Event Capturing:- the propagation of event takes place from the outside to inside , so first the outside event will occur and then the inside event will take place
// **Note** if you activate the third parameter of the event  i.e if you make it true then the it takes place


// ->Event Bubbling:- The propagation of event takes place from the inside of the event to the outside of the event
// **Note:-** the default value is false and the event bubbling takes place

// */

// // document.getElementById('images').addEventListener('click',function (e) {
// //     //images is the outer part
// //     console.log("Clicked Inside the ul")
// // },false)

// // document.getElementById('river').addEventListener('click',function(e){
// //     console.log("river clicked");
// // })//since default value is also true that's why did not write false
// //from abpve code when we click on te images we get the console as clicked inside the ul but if i click on the river I am getting the river printed first -> clicked inside the 


// document.getElementById('images').addEventListener('click',function (e) {
//     //images is the outer part
//     console.log("Clicked Inside the ul")
// },true)

// document.getElementById('river').addEventListener('click',function(e){
//     console.log("river clicked");
//     e.stopPropagation()//isse event bhi rukk skta hai uska propagation
//     //its just like the prevent default
// },true)//its propagting outside 

// document.getElementById('google').addEventListener('click',function(e){
//     e.preventDefault(); //isse default stopped
//     e.stopPropagation();
//     console.log("Google clicked");
// })

//------------------need to comment the above to get the result
//want to hide all the images when we click upon that
document.querySelector('#images').addEventListener('click',function(e){
console.log(e.target.parentNode);
if (e.target.tagName==='IMG') {
    console.log(e.target.id);
    let removeIt=e.target.parentNode;
    removeIt.remove();//1st method to remove 
}
//removeIt.parentNode.removeChild(removeIt)//second method
//but if we click on the Li item e.g. google then all the images get removed since the Ul is the child node of all #images 
//to prevent hatt we have to apply some checks and balances that's we have applied the if 


},false)

