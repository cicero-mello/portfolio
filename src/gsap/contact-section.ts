import { gsap as GSAP } from "gsap"

const triggerInContactSection = () => {
    GSAP.to(".contact-section-wrapper", {
        scrollTrigger: {
            trigger: ".contact-section-wrapper",
            start: "top bottom",
            toggleClass: { targets: ".contact-section", className: "visible" }
        }
    })
}

export const gsap = {
    triggerInContactSection
}
