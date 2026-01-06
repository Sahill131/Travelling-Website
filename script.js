gsap.to(".scroller", {
    x: "-220%",
    scrollTrigger: {
        trigger: ".scroller",
        scroller: "body",
        start: "top 30%",
        end: "top -100%",
        scrub: 2,
        pin: true


    }
})

gsap.from("nav", {
    y: 60,
    stagger: 0.02
})
gsap.from("nav li", {
    y: 50,
    stagger: 0.15,

})

gsap.from("sec1", {
    y: 50
})
gsap.from(".boxes", {
    y: -10000,
    stagger: 0.50,
    scrollTrigger: {
        trigger: ".scroller",
        scroller: "body",
        start: "top 160%",
        end: "top 0%",



    }

})


// gsap.to(".wheel2 ",{
//     x:"-100%",
//     repeat:-1,
//     duration:90,

// })

// gsap.to(".wheel img ",{
//     x:"-100%",
//     repeat:-1,

// })

window.addEventListener("wheel", (dets) => {
    if (dets.deltaY > 0) {
        gsap.to(".wheel2 ", {
            x: "-100%",
            repeat: -1,
            duration: 90,
            ease: "none"

        })

        gsap.to(".wheel img",{
            rotate:180
        })

        gsap.to(".wheel2 h1",{
            color:"black"
        })




    }

    else {
        gsap.to(".wheel2 ", {
            x: "0%",
            repeat: -1,
            duration: 2,
            ease: "none"

        })

        gsap.to(".wheel img", {
            rotate: 0
        })

         gsap.to(".wheel2 h1",{
            color:"white"
        })
        


    }


}

)