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

    const getIsReposSectionMinWidth = $(() => (
        window.matchMedia(
            `(max-width: 49.375rem)` // 790px
        ).matches
    ))

    const getIsReposSectionMobileMinWidth = $(() => (
        window.matchMedia(
            `(max-width: 34.375rem)` // 550px
        ).matches
    ))

    const getIsContactSectionMinWidth = $(() => (
        window.matchMedia(
            `(max-width: 36.25rem)` // 580px
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
            getIsGSAPSectionMinWidth(),
            getIsReposSectionMinWidth(),
            getIsReposSectionMobileMinWidth(),
            getIsContactSectionMinWidth()
        ]).then(([
            touch, portrait, mobileW, smallH,
            gsapMinWidth, reposMinWidth, reposMobileMinWidth,
            contactMinWidth
        ]) => {
            device.type = touch ? "mobile" : "desktop"
            device.isPortrait = portrait
            device.isMobileWidth = mobileW
            device.isSmallHeight = smallH
            device.isGSAPSectionMinWidth = gsapMinWidth
            device.isReposSectionMinWidth = reposMinWidth
            device.isReposSectionMobileMinWidth = reposMobileMinWidth
            device.isContactSectionMinWidth = contactMinWidth
            device.isLoadingData = false
        })
    })

    useOnWindow("resize", $(async () => {
        if (isServer) return
        device.isPortrait = await getIsPortrait()
        device.isMobileWidth = await getIsMobileWidth()
        device.isSmallHeight = await getIsSmallHeight()
        device.isGSAPSectionMinWidth = await getIsGSAPSectionMinWidth()
        device.isReposSectionMinWidth = await getIsReposSectionMinWidth()
        device.isReposSectionMobileMinWidth = await getIsReposSectionMobileMinWidth()
        device.isContactSectionMinWidth = await getIsContactSectionMinWidth()
    }))
}

export const useDevice = () => useContext(DeviceContext)
