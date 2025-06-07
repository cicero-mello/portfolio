import type { Direction, OnElementHitWindowParams } from "./types"

export const onElementHitWindow = ({
    element,
    onHitFromLeft,
    onHitFromRight,
    screenXPercent = 0.5,
    persistingCheckTime = 800
}: OnElementHitWindowParams) => {
    const rect = element.getBoundingClientRect()
    let lastDirection = (
        rect.left > (window.innerWidth * screenXPercent) ?
            "right" : "left"
    )

    const checkPosition = () => {
        const rect = element.getBoundingClientRect()
        const elementComesFrom: Direction = (
            rect.left > window.innerWidth * screenXPercent ?
                "right" : "left"
        )

        if (lastDirection === elementComesFrom) return
        if (lastDirection === "right") onHitFromRight?.()
        if (lastDirection === "left") onHitFromLeft?.()

        lastDirection = elementComesFrom
    }

    let requestAnimationFrameId: number | null = null
    let timeoutId: number | null = null

    const runCheckLoop = () => {
        checkPosition()
        requestAnimationFrameId = requestAnimationFrame(runCheckLoop)
    }

    const onScrollOrResize = () => {
        if (requestAnimationFrameId === null) runCheckLoop()

        if (timeoutId !== null) clearTimeout(timeoutId)

        timeoutId = window.setTimeout(() => {
            if (requestAnimationFrameId === null) return

            cancelAnimationFrame(requestAnimationFrameId)
            requestAnimationFrameId = null
            timeoutId = null
        }, persistingCheckTime)
    }

    window.addEventListener("scroll", onScrollOrResize)
    window.addEventListener("resize", onScrollOrResize)

    checkPosition()
}
