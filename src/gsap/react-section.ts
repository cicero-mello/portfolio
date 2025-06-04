import type { QRL } from "@builder.io/qwik"
import { gsap } from "gsap"

export const setupScrollTrigger = (
    onTrigger: QRL<() => void | Promise<void>>
) => {
    gsap.to(".react-section", {
        scrollTrigger: {
            trigger: ".react-section",
            start: "top 50%",
            once: true,
            onEnter: onTrigger
        }
    })
}
