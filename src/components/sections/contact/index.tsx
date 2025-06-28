import { component$ } from "@builder.io/qwik"
import { useDevice } from "~/context/device"
import { Mobile } from "./mobile"
import { Desktop } from "./desktop"

export const ContactSection = component$(() => {
    const device = useDevice()
    const showMobile = (
        device.type === "mobile"
        || device.isSmallHeight
        || device.isContactSectionMinWidth
    )

    return showMobile ? <Mobile /> : <Desktop />
})
