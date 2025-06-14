import { $, createContextId, isServer, useContext, useContextProvider, useOnWindow, useStore, useVisibleTask$ } from "@builder.io/qwik"
import { Breakpoints } from "~/styles"
import { Device } from "./types"

const DeviceContext = createContextId<Device>(
    "device-context"
)

export const useDeviceContextSetup = () => {
    useContextProvider(
        DeviceContext,
        useStore({
            isLoadingData: true,
            isMobileWidth: false,
            isPortrait: false,
            type: "desktop"
        })
    )

    const getIsTouchDevice = $(() => (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches
    ))

    const getIsPortrait = $(() => (
        window.matchMedia(
            `(orientation: portrait)`
        ).matches
    ))

    const getIsMobileWidth = $(() => (
        window.matchMedia(
            `(${Breakpoints.Mobile})`
        ).matches
    ))

    const device = useContext(DeviceContext)

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(async () => {
        if (!device) return
        device.type = await getIsTouchDevice() ? "mobile" : "desktop"
        device.isPortrait = await getIsPortrait()
        device.isMobileWidth = await getIsMobileWidth()
        device.isLoadingData = false
    })

    useOnWindow("resize", $(async () => {
        if (isServer || !device) return
        device.isPortrait = await getIsPortrait()
        device.isMobileWidth = await getIsMobileWidth()
    }))
}

export const useDevice = () => useContext(DeviceContext)
