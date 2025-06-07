import type { Signal } from "@builder.io/qwik"
import { gsap } from "gsap"

export const setupScrollTrigger = (
    historySectionRef: Signal<Element | undefined>
) => {



    const a = document.getElementsByClassName("top-guide")[0]!
    slideTopGuide(a)
    pinTopGuide(historySectionRef.value!)
}

const pinTopGuide = (historySection: Element) => {
    gsap.to(historySection, {
        scrollTrigger: {
            trigger: historySection,
            start: "top top",
            pin: true,
            end: "+=3300",
        }
    })
}

const slideTopGuide = (historySection: Element) => {
    const getX = () => {
        const elementWidth = historySection.scrollWidth

        const style = window.getComputedStyle(historySection as HTMLElement)
        const marginLeft = parseFloat(style.marginLeft) || 0

        const totalWidth = elementWidth + marginLeft
        const viewportWidth = window.innerWidth

        const distance = totalWidth - viewportWidth + 500
        return -distance
    }

    gsap.to(historySection, {
        x: getX,
        scrollTrigger: {
            trigger: historySection,
            scrub: 0.8,
            start: "top 80%",
            end: "+=3600",
            markers: true,
            invalidateOnRefresh: true,
        }
    })
}
