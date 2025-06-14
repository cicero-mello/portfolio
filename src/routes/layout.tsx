import { component$, isServer, Slot, useSignal, useTask$ } from "@builder.io/qwik"
import { useDevice } from "~/context/device"
import type { RequestHandler } from "@builder.io/qwik-city"
import { applyScrollSmoother, registerGSAPPlugins } from "~/gsap"

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

export default component$(() => {
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
        isDesktopGSAPSetupDone.value = true
    })

    return (
        device.isLoadingData ? <p>loading</p> : <Slot />
    )
})
