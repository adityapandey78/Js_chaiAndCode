gsap.to("#page2 img",{
    width:"100%",
    scrollTrigger:{
        trigger:"#page2", //usually trigger use krte hain jise target krte hain but in the case of trigger we shold trigger the element parent
        scroller:"body",
        markers:false,
        start:"top 0",
        end:"top -100%",
        scrub:2,
        pin:true,

    }
})