import { $, component$, isServer, useOnWindow, useSignal } from "@builder.io/qwik"
import { gsap } from "~/gsap/history-section"
import { TopGuide } from "./top-guide"
import * as S from "./styles.css"

export const HistorySection = component$(() => {
    const animationSetupIsDone = useSignal(false)
    const historySectionRef = useSignal<HTMLElement>()

    useOnWindow("scroll", $(() => {
        if (isServer || animationSetupIsDone.value) return
        animationSetupIsDone.value = true

        gsap.pinHistorySection(historySectionRef.value!)
    }))

    return (
        <S.MainSection ref={historySectionRef}>
            <TopGuide />
        </S.MainSection>
    )
})
