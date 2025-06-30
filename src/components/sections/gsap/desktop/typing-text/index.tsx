import { $, component$, isServer, useId, useOnWindow, useSignal, useVisibleTask$ } from "@builder.io/qwik"
import { startTyping } from "cm-typing-effect"
import { gsap } from "~/gsap/gsap-section"
import * as S from "./styles.css"

export const TypingText = component$(() => {
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
            animationTime: 600
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

    return (
        <S.Text>
            <span id={idText1} style={{ visibility: "hidden" }}>
                I enjoy learning on my own and
            </span>
            <span id={idText2} style={{ visibility: "hidden" }}>
                use AI to explore any tech that
            </span>
            <span id={idText3} style={{ visibility: "hidden" }}>
                interests me
            </span>
        </S.Text>
    )
})
