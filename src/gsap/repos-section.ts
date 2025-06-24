import type { QRL } from "@builder.io/qwik"
import { gsap as GSAP } from "gsap"

const createSteps = (steps: number): number[] => {
    const stepsResponse = Array.from({ length: steps }).map(
        (_, i) => +((1 / steps) * i).toFixed(8)
    )
    return stepsResponse.slice(1)
}

const changeSectionTrigger = (
    sectionQuantity: number,
    onFraction: QRL<() => void | Promise<void>>,
    onFractionReverse: QRL<() => void | Promise<void>>,
    onProgress: QRL<(progress: number) => void | Promise<void>>
) => {
    const steps = createSteps(sectionQuantity)
    const triggeredSteps = new Set<number>()
    let lastProgress = 0

    GSAP.to(".repos-section", {
        scrollTrigger: {
            trigger: ".repos-section",
            start: "top top",
            end: "bottom top",
            pin: true,
            onUpdate: async (self) => {
                const progress = +self.progress.toFixed(2)
                onProgress(progress * 100)

                for (const step of steps) {
                    if (
                        lastProgress < step
                        && progress >= step
                        && !triggeredSteps.has(step)
                    ) {
                        triggeredSteps.add(step)
                        await onFraction()
                    }
                    if (
                        lastProgress > step
                        && progress <= step
                        && triggeredSteps.has(step)
                    ) {
                        triggeredSteps.delete(step)
                        await onFractionReverse()
                    }
                }

                lastProgress = progress
            }
        }
    })
}

const showInTrigger = (
    onTrigger: QRL<() => void | Promise<void>>,
) => {
    GSAP.to(".repos-section", {
        scrollTrigger: {
            trigger: ".repos-section",
            start: "top 40%",
            once: true,
            onEnter: onTrigger
        }
    })
}


export const gsap = {
    changeSectionTrigger,
    showInTrigger
}
