import { pxToRemBasedPx } from "~/utils"
import { gsap as GSAP } from "gsap"

const pinHistorySection = (historySection: Element) => {
    const end = pxToRemBasedPx(3300)

    GSAP.to(historySection, {
        scrollTrigger: {
            trigger: historySection,
            start: "top top",
            pin: true,
            end: `+=${end}`,
        }
    })
}

const slideTopGuide = (topGuide: HTMLElement) => {
    const end = pxToRemBasedPx(3600)

    const getX = () => {
        const desiredEmptySpaceOnRight = (
            window.matchMedia("(max-width: 50rem)").matches ?
                pxToRemBasedPx(420) : pxToRemBasedPx(500)
        )

        const elementWidth = topGuide.scrollWidth

        const style = window.getComputedStyle(topGuide)
        const marginLeft = parseFloat(style.marginLeft) || 0

        const totalWidth = elementWidth + marginLeft
        const viewportWidth = window.innerWidth

        const distance = totalWidth - viewportWidth + desiredEmptySpaceOnRight
        return -distance
    }

    GSAP.to(topGuide, {
        x: getX,
        scrollTrigger: {
            trigger: topGuide,
            scrub: 0.8,
            start: "top 80%",
            end: `+=${end}`,
            invalidateOnRefresh: true
        }
    })
}

export const gsap = {
    pinHistorySection,
    slideTopGuide
}
