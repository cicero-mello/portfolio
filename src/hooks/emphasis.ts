import { $, isServer, type Signal, useOnWindow, useSignal } from "@builder.io/qwik"

export const useEmphasis = (
    elementRef: Signal<HTMLElement | undefined>
): Signal<boolean> => {
    const isListenersAdded = useSignal(false)
    const needEmphasis = useSignal(false)
    const onHover = useSignal(false)
    const onFocus = useSignal(false)

    const updateEmphasis = $(() => {
        const shouldHaveEmphasis = onHover.value || onFocus.value
        if (needEmphasis.value === shouldHaveEmphasis) return
        needEmphasis.value = shouldHaveEmphasis
    })

    const addEventListeners = $(() => {
        if (!elementRef.value) return

        elementRef.value.addEventListener("mouseenter", () => {
            onHover.value = true
            updateEmphasis()
        })
        elementRef.value.addEventListener("mouseleave", () => {
            onHover.value = false
            updateEmphasis()
        })
        elementRef.value.addEventListener("focus", () => {
            onFocus.value = true
            updateEmphasis()
        })
        elementRef.value.addEventListener("blur", () => {
            onFocus.value = false
            updateEmphasis()
        })
    })

    const setup = $(() => {
        if (
            isServer
            || isListenersAdded.value
            || !elementRef.value
        ) return
        isListenersAdded.value = true
        addEventListeners()
    })

    useOnWindow("mousemove", setup)
    useOnWindow("keydown", setup)

    return needEmphasis
}
