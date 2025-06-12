import { $, createContextId, type Signal, useContext, useContextProvider, useOnWindow, useSignal, useVisibleTask$ } from "@builder.io/qwik"
import { NumberBreakpoints } from "~/styles"

export const IsMobileSizeContext = createContextId<Signal<boolean>>(
    "is-mobile-size-context"
)

const useIsMobileSizeContextProvider = () => {
    const isMobile = useSignal(false)
    useContextProvider(
        IsMobileSizeContext,
        isMobile
    )
}

const getIsMobileSize = (): boolean => {
    if (
        window.matchMedia(
            `(max-width: ${NumberBreakpoints.MobileWidth}px) and (orientation: portrait)`
        ).matches
        || window.matchMedia(
            `(max-height: ${NumberBreakpoints.MobileWidth}px) and (orientation: landscape)`
        ).matches
    ) return true
    return false
}

export const useIsMobileSizeContextSetup = () => {
    useIsMobileSizeContextProvider()

    const isMobile = useContext(IsMobileSizeContext)

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(() => {
        isMobile.value = getIsMobileSize()
    })

    useOnWindow("resize", $(() => {
        isMobile.value = getIsMobileSize()
    }))
}
