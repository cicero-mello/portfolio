import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"

export const registerGSAPPlugins = () => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
    ScrollTrigger.refresh()
}

export const applyScrollSmoother = () => {
    ScrollSmoother.create({
        smooth: 0.4,
        effects: true,
    })
}
