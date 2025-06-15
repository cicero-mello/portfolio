import { $, component$, isServer, useOnWindow, useSignal } from "@builder.io/qwik"
import { useBottomIconsContextSetup } from "~/context/history-section/desktop"
import { gsap } from "~/gsap/history-section"
import { BottomIcons } from "./bottom-icons"
import { TopGuide } from "./top-guide"
import * as S from "./styles.css"

export const Desktop = component$(() => {
    const animationSetupIsDone = useSignal(false)
    const historySectionRef = useSignal<HTMLElement>()

    useBottomIconsContextSetup()

    useOnWindow("scroll", $(() => {
        if (isServer || animationSetupIsDone.value) return
        animationSetupIsDone.value = true

        gsap.pinHistorySection(historySectionRef.value!)
    }))

    return (
        <S.MainSection ref={historySectionRef}>
            <TopGuide />
            <BottomIcons />
        </S.MainSection>
    )
})
