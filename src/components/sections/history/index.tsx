import { component$ } from "@builder.io/qwik"
import { useDevice } from "~/context/device"
import { Mobile } from "./mobile"
import { Desktop } from "./desktop"

export const HistorySection = component$(() => {
    const device = useDevice()
    const mobileMode = (
        device.type === "mobile"
        || device.isMobileWidth
        || device.isPortrait
        || device.isSmallHeight
    )

    return mobileMode ? <Mobile /> : <Desktop />
})
