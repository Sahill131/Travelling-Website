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

gsap.from("nav",{
    y:60,
    stagger:0.02
})
gsap.from("nav li",{
    y:50,
    stagger:0.15,
   
})

gsap.from("sec1",{
    y:50
})
gsap.from(".boxes",{
    y:-1000,
    stagger:0.50,
    scrollTrigger:{
        trigger:".scroller",
        scroller:"body",
        start:"top 160%",
        end:"top 0%",
   
       

    }
        
})
