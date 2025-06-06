import type { Signal } from "@builder.io/qwik"
import { gsap } from "gsap"

export const setupScrollTrigger = (
    historySectionRef: Signal<Element | undefined>
) => {

    slideTopGuide(historySectionRef.value!)
    pinTopGuide(historySectionRef.value!)
}

const pinTopGuide = (historySection: Element) => {
    gsap.to(historySection, {
        scrollTrigger: {
            trigger: historySection,
            start: "top top",
            pin: true,
            end: "+=5000",
            scrub: true
        }
    })
}

const slideTopGuide = (historySection: Element) => {
    const getX = () => {
        const elementWidth = historySection.scrollWidth
        const viewportWidth = window.innerWidth
        const distance = elementWidth - viewportWidth + 500
        return -distance
    }
    gsap.to(historySection, {
        x: getX,
        scrollTrigger: {
            trigger: historySection,
            scrub: 0.8,
            start: "top 90%",
            end: "+=3000",
            invalidateOnRefresh: true,
        }
    })
}
