function loadingAnimantion(){
    var tl=gsap.timeline();
    tl.from(".line h1",{
        y:150,
        stagger:0.25,
        duration:0.6,
        delay:0.5,
    })
    
    tl.from("#line1-part1",{ //isse line1 ke part 1 ko acces kr liya and .line ke saare h2s ko
        opacity:0,
        onStart: function(){ //onStart ek method hai gsap ka start se koi function run kra skte hain
            let h5timer= document.querySelector("#line1-part1 h5");
            let grow=0; 
            setInterval(function(){
                if(grow<100){
                    h5timer.innerHTML=grow++; //isse grow badhta rhega
                }
                else{
                    h5timer.innerHTML=grow;// isse 100 ke baad aake ruk jayega
                }
            },33)
        },
    });
    tl.to(".line h2",{
        animationName:"anime",
        opacity:1,
    })
    tl.to("#loader",{
        opacity:0,
        duration:0.2,
        delay:4 // 4 sec ke baad jo loader hai wo disappear ho jaayega
    })
    tl.from("#page1",{
         delay:0.2,
         y:1600,
         opacity:0,
         duration:0.5,
         ease: Power4 //ye animation ke graph ko manage krta hai
    })
    tl.to("#loader",{
        display:"none"
    
    })
    tl.from("#nav",{ //it will make the hero segment appear more smoothly
       opacity:0,
    })
    tl.from("#hero1 h1, #hero2 h1, #hero3 h2 ,#hero4 h1",{ //it will make the hero segment appear more smoothly
        y:120,
        stagger:0.2
    })
}
loadingAnimantion();


function crsrAnimation(){ // function for circle cursor
    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
            left:dets.x,
            top:dets.y
        })
    })
    // https://www.npmjs.com/package/sheryjs imported from here
    Shery.makeMagnet("#nav-part2 h4" );
}
crsrAnimation(); 
