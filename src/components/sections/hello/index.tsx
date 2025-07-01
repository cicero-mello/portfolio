import { $, component$, useOnWindow, useSignal, useVisibleTask$ } from "@builder.io/qwik"
import { useLanguageContext } from "~/context/language"
import { getTextsByLanguage } from "~/languages"
import { useDevice } from "~/context/device"
import { Header } from "../../header"
import { Hero } from "../../hero"
import * as S from "./styles.css"

export const HelloSection = component$(() => {
    const language = useLanguageContext()
    const text = getTextsByLanguage(language.value)

    const device = useDevice()
    const showScrollDownTip = useSignal(false)
    const tipTimeout = useSignal<NodeJS.Timeout>()
    const typingTextTime = 8300

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(() => {
        if (device.type === "mobile") return

        tipTimeout.value = setTimeout(() => {
            showScrollDownTip.value = true
        }, typingTextTime + 5000)
    })

    useOnWindow("scroll", $(() => {
        if (device.type === "mobile") return

        clearTimeout(tipTimeout.value)
        showScrollDownTip.value = false

        const scrollTop = window.pageYOffset
        if (scrollTop != 0) return

        tipTimeout.value = setTimeout(() => {
            showScrollDownTip.value = true
        }, typingTextTime + 5000)
    }))

    return (
        <S.Section>
            <Header />
            <Hero />
            {device.type === "desktop" && (
                <S.ScrollDownTip
                    children={text.helloSection.tip}
                    class={{ [S.show]: showScrollDownTip.value }}
                />
            )}
        </S.Section>
    )
})
