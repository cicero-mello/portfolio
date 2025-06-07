import { $, component$, isServer, useId, useOnWindow, useSignal } from "@builder.io/qwik"
import { setupScrollTrigger } from "~/gsap/react-section"
import { startTyping } from "cm-typing-effect"
import { SpinnerLogo } from "./spinner-logo"
import { startGlitch } from "cm-glitch"
import * as S from "./styles.css"

export const ReactSection = component$(() => {
    const animationSetupIsDone = useSignal(false)

    const descriptionRef = useSignal<HTMLElement>()
    const descriptionId = useId()
    const textId1 = useId()
    const textId2 = useId()

    const startAnimations = $(async () => {
        await startTyping(textId1, {
            startDelay: 800,
            animationTime: 1400,
            realisticTyping: true
        })
        await startTyping(textId2, {
            animationTime: 1100,
            realisticTyping: true,
        })

        setTimeout(() => {
            descriptionRef.value!.style.opacity = "1"
            startGlitch(descriptionId, {
                distortionIntensity: 100,
                noObservers: true
            })
        }, 1000)
    })

    useOnWindow("scroll", $(() => {
        if (isServer || animationSetupIsDone.value) return
        setupScrollTrigger(startAnimations)
        animationSetupIsDone.value = true
    }))

    return (
        <S.Section class="react-section">
            <SpinnerLogo />
            <S.TextContainer>
                <S.MainText>
                    <span id={textId1} style={{ visibility: "hidden" }}>
                        I'm frontend developer
                    </span>
                    <span id={textId2} style={{ visibility: "hidden" }}>
                        focused on REACT
                    </span>
                </S.MainText>
                <S.DescriptionText id={descriptionId} ref={descriptionRef}>
                    <span>But, in my scope I have </span>
                    <span>HTML, CSS, JS, TS, Styled-Components, Tailwind, </span>
                    <span>Next.js, Qwik, Preact, Git, Vite, NodeJS, Fastify, Figma...</span>
                </S.DescriptionText>
            </S.TextContainer>
        </S.Section>
    )
})
