import { $, component$, isServer, Slot, useOnWindow, useVisibleTask$ } from "@builder.io/qwik"
import type { RequestHandler } from "@builder.io/qwik-city"
import { registerGSAPPlugins } from "~/gsap"
import { ScrollTrigger } from "gsap/all"

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

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(() => {
        registerGSAPPlugins()
    })

    useOnWindow("resize", $(() => {
        if (isServer) return
        ScrollTrigger.refresh()
    }))

    useOnWindow("beforeunload", $(() => {
        if (isServer) return
        window.scrollTo(0, 0)
    }))

    return <Slot />
})
