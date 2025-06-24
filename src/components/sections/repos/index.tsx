import { component$ } from "@builder.io/qwik"
import { useDevice } from "~/context/device"
import { Mobile } from "./mobile"
import { Desktop } from "./desktop"

export const ReposSection = component$(() => {
    const device = useDevice()

    const isMobile = (
        device.type === "mobile"
        || device.isReposSectionMinWidth
        || device.isSmallHeight
    )

    return isMobile ? <Mobile /> : <Desktop />
})
