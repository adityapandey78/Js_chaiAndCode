var tl= gsap.timeline();

tl.from("#nav h3",{
    y:-50,
    opacity:0,
    delay:0.5,
    duration:1,
    stagger:0.2, //jitna secc ka time liya utne sec ke interval me leke aayega
})

tl.from("#main h1",{
    x:-50,
    opacity:0,
    duration:0.8,
    stagger:0.3,
})
tl.from("img",{
    x:100,
    rotate:45,
    opacity:0,
    duration:0.5,
    stagger:0.4,
})