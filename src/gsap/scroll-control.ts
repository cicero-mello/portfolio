import { gsap } from "gsap"
import { $ } from "@builder.io/qwik"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"

export const initScrollControl = $(async () => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

    ScrollSmoother.create({
        smooth: 0.4,
        effects: true,
        // smoothTouch: 0.1,
    })

    // gsap.to(".h-section-1", {
    //     x: "-400%",
    //     scrollTrigger: {
    //         // pin: true,
    //         trigger: ".h-section-1",
    //         start: "top 80%",
    //         end: "+=3000",
    //         scrub: 1,
    //         markers: true
    //     }
    // })

    // gsap.to(".h-section-2", {
    //     x: "-200%",
    //     scrollTrigger: {
    //         pin: true,
    //         trigger: ".h-section-2",
    //         start: "top top",
    //         end: "+=3000",
    //         scrub: 1,
    //     }
    // })
})
