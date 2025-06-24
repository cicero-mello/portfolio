import { $, isServer, type Signal } from "@builder.io/qwik"
import type { UseRotate3DOptions } from "./types"

export const useRotate3D = (
    elementRef: Signal<HTMLElement | undefined>,
    {
        maxRotateX,
        maxRotateY
    }: UseRotate3DOptions
) => {

    const moveElement = $((event: MouseEvent) => {
        if (!elementRef.value) return

        const rect = elementRef.value.getBoundingClientRect()

        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        const cursorDistanceToElementCenter = {
            x: event.clientX - centerX,
            y: event.clientY - centerY,
        }

        const maxDistanceX = window.innerWidth / 2
        const maxDistanceY = window.innerHeight / 2

        const percentX = cursorDistanceToElementCenter.x / maxDistanceX
        const percentY = cursorDistanceToElementCenter.y / maxDistanceY

        const clampedX = Math.max(-1, Math.min(1, percentX))
        const clampedY = Math.max(-1, Math.min(1, percentY))

        const degsToRotateY = clampedX * maxRotateY
        const degsToRotateX = -clampedY * maxRotateX

        elementRef.value.style.willChange = "transform"
        elementRef.value.style.transform = `rotateX(${degsToRotateX}deg) rotateY(${degsToRotateY}deg)`
    })

    if (isServer) return
    window.removeEventListener("mousemove", moveElement)
    window.addEventListener("mousemove", moveElement)
}
