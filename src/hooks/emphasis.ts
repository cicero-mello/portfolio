import { $, type QRL, type Signal, useSignal, useVisibleTask$ } from "@builder.io/qwik"

export const useEmphasis = (
    elementRef: Signal<HTMLElement | undefined>
): Signal<boolean> => {
    const needEmphasis = useSignal(false)
    const onHover = useSignal(false)
    const onFocus = useSignal(false)
    const removeListeners = useSignal<QRL>()

    const updateEmphasis = $(() => {
        const shouldHaveEmphasis = onHover.value || onFocus.value
        if (needEmphasis.value === shouldHaveEmphasis) return
        needEmphasis.value = shouldHaveEmphasis
    })

    const addEventListeners = $(() => {
        if (!elementRef.value) return

        const onMouseEnter = $(() => {
            onHover.value = true
            updateEmphasis()
        })
        const onMouseLeave = $(() => {
            onHover.value = false
            updateEmphasis()
        })
        const onHandleFocus = $(() => {
            onFocus.value = true
            updateEmphasis()
        })
        const onBlur = $(() => {
            onFocus.value = false
            updateEmphasis()
        })

        elementRef.value.addEventListener("mouseenter", onMouseEnter)
        elementRef.value.addEventListener("mouseleave", onMouseLeave)
        elementRef.value.addEventListener("focus", onHandleFocus)
        elementRef.value.addEventListener("blur", onBlur)

        removeListeners.value = $(() => {
            elementRef.value!.removeEventListener("mouseenter", onMouseEnter)
            elementRef.value!.removeEventListener("mouseleave", onMouseLeave)
            elementRef.value!.removeEventListener("focus", onHandleFocus)
            elementRef.value!.removeEventListener("blur", onBlur)
        })
    })

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(({ cleanup }) => {
        addEventListeners()
        cleanup(() => {
            if (removeListeners.value) {
                removeListeners.value()
            }
        })
    })

    return needEmphasis
}
