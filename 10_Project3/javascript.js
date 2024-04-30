const clock=document.getElementById('clock');
//const clock=document.querySelector('#clock'); //this is the method 2 of getting the element

//now applying function for the clock

setInterval(() => {
    let date=new Date();
    clock.innerHTML=date.toLocaleTimeString();
}, 1000);


/*
-> to inner HTML se usme push kr diya
->setInterval ek function hota  hai time set krne ka
*/