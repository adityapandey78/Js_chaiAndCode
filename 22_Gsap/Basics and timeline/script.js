// gsap.to("#box",{ //gsap.to=> initial se final ki taraf le jaata hai
//     x:1000,
//     duration:2,
//     delay:1,
//     rotate:270,
//     backgroundColor:"violet" 

// })
gsap.from("#box",{ //gsap.from => fianlse initial le jaatahai
    x:1000,
    duration:2,
    delay:1,
    rotate:270,
    backgroundColor:"violet" 

})
var tl=gsap.timeline() //timelin ehi set kr liya jiise ki me sbka individually setr kr sku time
tl.to("#box1",{
    x:1200,
    rotate:360,
    scale:0.5,
    duration:2,
    //delay:1,
})
tl.to("#box2",{
    x:1200,
    rotate:360,
    scale:1.5,
    duration:2,
    //delay:3, //meko pehle upr wala ho jaaye tb ye wala ho chaiye tha
    //so delay add kr diya isme upar wale ka count krke
})
//timeline hone se ek animation ho jaane ke baad dusra hota hai
tl.from("#box3",{
    x:500,
    rotate:750,
    scale:0.75,
    duration:3
})