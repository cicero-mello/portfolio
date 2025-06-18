import { $, createContextId, isServer, useContext, useContextProvider, useOnWindow, useStore, useVisibleTask$ } from "@builder.io/qwik"
import { Breakpoints } from "~/styles"
import type { Device } from "./types"

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

    const getIsGSAPSectionMinWidth = $(() => (
        window.matchMedia(
            `(max-width: 35rem)` // 560px
        ).matches
    ))

    const getIsMobileWidth = $(() => (
        window.matchMedia(
            `(${Breakpoints.Mobile})`
        ).matches
    ))

    const getIsSmallHeight = $(() => (
        window.matchMedia(
            `(${Breakpoints.SmallHeight})`
        ).matches
    ))

    const device = useContext(DeviceContext)

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(async () => {
        Promise.all([
            getIsTouchDevice(),
            getIsPortrait(),
            getIsMobileWidth(),
            getIsSmallHeight(),
            getIsGSAPSectionMinWidth()
        ]).then(([touch, portrait, mobileW, smallH, minWidth]) => {
            device.type = touch ? "mobile" : "desktop"
            device.isPortrait = portrait
            device.isMobileWidth = mobileW
            device.isSmallHeight = smallH
            device.isGSAPSectionMinWidth = minWidth
            device.isLoadingData = false
        })
    })

    useOnWindow("resize", $(async () => {
        if (isServer) return
        device.isPortrait = await getIsPortrait()
        device.isMobileWidth = await getIsMobileWidth()
        device.isSmallHeight = await getIsSmallHeight()
    }))
}

export const useDevice = () => useContext(DeviceContext)
