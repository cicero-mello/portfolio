import type { QRL } from "@builder.io/qwik"
import { gsap as GSAP } from "gsap"

const triggerInCodePenGitHubSection = (
    onTrigger: QRL<() => void | Promise<void>>
) => {
    GSAP.to(".codepen-github-section", {
        scrollTrigger: {
            trigger: ".codepen-github-section",
            start: "top 50%",
            once: true,
            onEnter: onTrigger
        }
    })
}
export const gsap = {
    triggerInCodePenGitHubSection,
}
