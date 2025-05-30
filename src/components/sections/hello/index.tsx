import { $, component$, useOnWindow, useSignal, useVisibleTask$ } from "@builder.io/qwik"
import { Header } from "../../header"
import { Hero } from "../../hero"
import * as S from "./styles.css"

export const HelloSection = component$(() => {
    const showScrollDownTip = useSignal(false)
    const tipTimeout = useSignal<NodeJS.Timeout>()
    const typingTextTime = 8300

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(() => {
        tipTimeout.value = setTimeout(() => {
            showScrollDownTip.value = true
        }, typingTextTime + 5000)
    })

    useOnWindow("scroll", $(() => {
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
            <S.ScrollDownTip
                children="Scroll Down"
                class={{ [S.show]: showScrollDownTip.value }}
            />
        </S.Section>
    )
})
