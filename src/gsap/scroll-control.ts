import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"

export const initScrollControl = async () => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

    ScrollSmoother.create({
        smooth: 1,
        effects: true,
        smoothTouch: 0.1,
    })

    gsap.to(".h-section-1", {
        x: "-200%",
        scrollTrigger: {
            pin: true,
            trigger: ".h-section-1",
            start: "top top",
            end: "+=3000",
            scrub: 1,
        }
    })

    gsap.to(".h-section-2", {
        x: "-200%",
        scrollTrigger: {
            pin: true,
            trigger: ".h-section-2",
            start: "top top",
            end: "+=2000",
            scrub: 1,
        }
    })
}
