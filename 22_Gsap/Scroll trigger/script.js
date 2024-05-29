gsap.from("#page1 #circle",{
    scale:0,
    duration:2,
    rotate:480,
})
gsap.from("#page2 #circle",{
    scale:0,
    duration:2,
    rotate:480,
    //scrollTrigger:"#page2 #circle" //method 1
    scrollTrigger:{
        trigger:"#page2 #circle",
        scroller:"body",
        markers: true, //mtlb marker show krna hai
        start:"top 60%",//start ki location
        end:"top 30%", //end ki location
        scrub:2,

    }
})