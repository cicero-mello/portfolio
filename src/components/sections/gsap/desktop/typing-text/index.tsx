import { $, component$, isServer, useId, useOnWindow, useSignal, useTask$, useVisibleTask$ } from "@builder.io/qwik"
import { useLanguageContext } from "~/context/language"
import { getTextsByLanguage } from "~/languages"
import { startTyping } from "cm-typing-effect"
import { gsap } from "~/gsap/gsap-section"
import * as S from "./styles.css"

export const TypingText = component$(() => {
    const language = useLanguageContext()
    const texts = getTextsByLanguage(language.value)

    const idText1 = useId()
    const idText2 = useId()
    const idText3 = useId()
    const animationSetupIsDone = useSignal(false)

    const abortTypingAnimations = useSignal(false)

    const startAnimations = $(async () => {
        if (abortTypingAnimations.value) return
        await startTyping(idText1, {
            realisticTyping: true,
            startDelay: 500,
            animationTime: 1600
        })
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (abortTypingAnimations.value) return
        await startTyping(idText2, {
            realisticTyping: true,
            animationTime: 1600
        })
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (abortTypingAnimations.value) return
        await startTyping(idText3, {
            realisticTyping: true,
            animationTime: language.value === "en" ? 600 : 1600
        })
    })

    const setupAnimations = $(() => {
        if (
            isServer
            || animationSetupIsDone.value
        ) return
        animationSetupIsDone.value = true
        gsap.triggerInGsapSection(startAnimations)
    })

    useOnWindow("scroll", setupAnimations)
    useOnWindow("keydown", setupAnimations)

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(() => {
        abortTypingAnimations.value = false
        return () => {
            abortTypingAnimations.value = true
        }
    })

    useTask$(({ track }) => {
        track(language)
        if (isServer) return
        animationSetupIsDone.value = false
    })

    return (
        <S.Text key={language.value + "-gsap-desktop-tt"}>
            <span id={idText1} style={{ visibility: "hidden" }}>
                {texts.gsapSection.t1}
            </span>
            <span id={idText2} style={{ visibility: "hidden" }}>
                {texts.gsapSection.t2}
            </span>
            <span id={idText3} style={{ visibility: "hidden" }}>
                {texts.gsapSection.t3}
            </span>
        </S.Text>
    )
})
