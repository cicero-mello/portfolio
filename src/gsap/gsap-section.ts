import type { QRL } from "@builder.io/qwik"
import { gsap as GSAP } from "gsap"

const triggerInGsapSection = (
    onTrigger: QRL<() => void | Promise<void>>
) => {
    GSAP.to(".gsap-section", {
        scrollTrigger: {
            trigger: ".gsap-section",
            start: "top 50%",
            once: true,
            onEnter: onTrigger
        }
    })
}

const moveCape = () => {
    const pathIdsToMorph = [
        ["#gsap-i-1-1", "#gsap-i-2-1"],
        ["#gsap-i-1-2", "#gsap-i-2-2"],
        ["#gsap-i-1-3", "#gsap-i-2-3"],
        ["#gsap-i-1-19", "#gsap-i-2-19"],
        ["#gsap-i-1-20", "#gsap-i-2-20"],
        ["#gsap-i-1-36", "#gsap-i-2-36"],
    ]

    pathIdsToMorph.forEach(ids => {
        GSAP.to(ids[0], {
            morphSVG: ids[1],
            duration: 1,
            repeat: Infinity,
            ease: "power1.inOut",  // ease-in-out
            animationTimingFunction: "",
            yoyo: true
        })
    })
}

export const gsap = {
    triggerInGsapSection,
    moveCape
}
