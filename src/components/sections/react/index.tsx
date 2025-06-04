import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik"
import { SpinnerLogo } from "./spinner-logo"
import { startTyping } from "cm-typing-effect"
import { startGlitch } from "cm-glitch"
import * as S from "./styles.css"
import { setupScrollTrigger } from "~/gsap/react-section"

export const ReactSection = component$(() => {
    const descriptionRef = useSignal<HTMLElement>()

    const startAnimations = $(async () => {
        await startTyping("react-text-1", {
            startDelay: 800,
            animationTime: 1400,
            realisticTyping: true
        })
        await startTyping("react-text-2", {
            animationTime: 1100,
            realisticTyping: true,
        })

        setTimeout(() => {
            descriptionRef.value!.style.opacity = "1"
            startGlitch("react-description", {
                distortionIntensity: 100,
            })
        }, 1000)
    })

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(async () => {
        setupScrollTrigger(startAnimations)
    })

    return (
        <S.Section class="react-section">
            <SpinnerLogo />
            <S.TextContainer>
                <S.MainText>
                    <span id="react-text-1" style={{ visibility: "hidden" }}>
                        I'm frontend developer
                    </span>
                    <span id="react-text-2" style={{ visibility: "hidden" }}>
                        focused on REACT
                    </span>
                </S.MainText>
                <S.DescriptionText id="react-description" ref={descriptionRef}>
                    <span>But, in my scope I have </span>
                    <span>HTML, CSS, JS, TS, Styled-Components, Tailwind, </span>
                    <span>Next.js, Qwik, Preact, Git, Vite, NodeJS, Fastify, Figma...</span>
                </S.DescriptionText>
            </S.TextContainer>
        </S.Section>
    )
})
