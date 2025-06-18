import { component$ } from "@builder.io/qwik"
import { useDevice } from "~/context/device"
import { Mobile } from "./mobile"
import { Desktop } from "./desktop"

export const GSAPSection = component$(() => {
    const device = useDevice()

    const showMobile = (
        device.type === "mobile"
        || device.isSmallHeight
        || device.isGSAPSectionMinWidth
    )

    return showMobile ? <Mobile /> : <Desktop />
})
