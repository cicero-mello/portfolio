import { createContextId, type Signal, useContext, useContextProvider, useSignal, useVisibleTask$ } from "@builder.io/qwik"

const DeviceTypeContext = createContextId<Signal<"mobile" | "desktop" | null>>(
    "device-type-context"
)

const useDeviceTypeContextProvider = () => {
    const deviceType = useSignal(null)
    useContextProvider(
        DeviceTypeContext,
        deviceType
    )
}

const getIsTouchDevice = () => {
    return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches
    )
}

export const useDeviceTypeContextSetup = () => {
    useDeviceTypeContextProvider()

    const deviceType = useContext(DeviceTypeContext)

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(() => {
        deviceType.value = getIsTouchDevice() ? "mobile" : "desktop"
    })
}

export const useDeviceType = () => useContext(DeviceTypeContext)
