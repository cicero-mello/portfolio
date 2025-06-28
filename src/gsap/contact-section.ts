import { type QRL } from "@builder.io/qwik"
import { gsap as GSAP } from "gsap"

const triggerInContactSection = (
    onEnter: QRL<() => void | Promise<void>>,
    onLeave: QRL<() => void | Promise<void>>
) => {
    GSAP.to(".contact-section-wrapper", {
        scrollTrigger: {
            trigger: ".contact-section-wrapper",
            start: "top bottom",
            toggleClass: { targets: ".contact-section", className: "visible" },
            onLeave: onLeave,
            onEnter: onEnter
        }
    })
}

export const gsap = {
    triggerInContactSection
}
