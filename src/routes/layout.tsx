import { component$, isServer, Slot, useSignal, useTask$ } from "@builder.io/qwik"
import { applyScrollSmoother, registerGSAPPlugins } from "~/gsap"
import type { RequestHandler } from "@builder.io/qwik-city"
import { alwaysTrapTabToViewport } from "~/utils"
import { useDevice } from "~/context/device"
import styles from "./styles.module.css"

export const onGet: RequestHandler = async ({ cacheControl }) => {
    // Control caching for this request for best performance and to reduce hosting costs:
    // https://qwik.dev/docs/caching/
    cacheControl({
        // Always serve a cached response by default, up to a week stale
        staleWhileRevalidate: 60 * 60 * 24 * 7,
        // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
        maxAge: 5,
    })
}

const PageLoader = component$(({
    visible
}: { visible: boolean }) => {
    return (
        <div
            class={styles.wrapper}
            style={{ opacity: visible ? "1" : "0" }}
        >
            <div class={styles.square} />
            <div class={styles.square} />
        </div>
    )
})

export default component$(() => {
    const showContent = useSignal(false)
    const device = useDevice()

    const isDesktopGSAPSetupDone = useSignal(false)

    useTask$(({ track }) => {
        track(device)
        if (
            isServer
            || isDesktopGSAPSetupDone.value
            || device.isLoadingData
            || device.type === "mobile"
        ) return

        registerGSAPPlugins()
        applyScrollSmoother()
        alwaysTrapTabToViewport()
        isDesktopGSAPSetupDone.value = true
    })

    useTask$(({ track }) => {
        track(device)
        if (isServer || showContent.value === true) return
        if (!device.isLoadingData) {
            setTimeout(() => {
                showContent.value = true
            }, 300)
        }
    })

    return (
        !showContent.value ?
            <PageLoader visible={device.isLoadingData} />
            : <Slot />
    )
})
