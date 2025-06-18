import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin"

export const registerGSAPPlugins = () => {
    gsap.registerPlugin(
        ScrollTrigger,
        ScrollSmoother,
        MorphSVGPlugin
    )
    ScrollTrigger.refresh()
}

export const applyScrollSmoother = () => {
    ScrollSmoother.create({
        smooth: 0.4,
        effects: true,
    })
}
