gsap.to(".scroller",{
    x:"-220%",
    scrollTrigger:{
        trigger:".scroller",
        scroller:"body",
        start:"top 30%",
        end:"top -100%",
        scrub:2,
        pin:true
        

    }
})