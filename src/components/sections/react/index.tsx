import { $, component$, isServer, useId, useOnWindow, useSignal, useVisibleTask$ } from "@builder.io/qwik"
import { setupScrollTrigger } from "~/gsap/react-section"
import { useDevice } from "~/context/device"
import { startTyping } from "cm-typing-effect"
import { SpinnerLogo } from "./spinner-logo"
import { startGlitch } from "cm-glitch"
import * as S from "./styles.css"

export const ReactSection = component$(() => {
    const sectionRef = useSignal<HTMLElement>()

    const animationSetupIsDone = useSignal(false)
    const device = useDevice()

    const descriptionRef = useSignal<HTMLElement>()
    const descriptionId = useId()
    const textId1 = useId()
    const textId2 = useId()

    const startAnimations = $(async () => {
        if (device.type === "mobile") return

        await startTyping(textId1, {
            startDelay: 500,
            animationTime: 1400,
            realisticTyping: true
        })
        await startTyping(textId2, {
            animationTime: 1100,
            realisticTyping: true,
        })

        setTimeout(() => {
            descriptionRef.value!.style.visibility = "unset"
            startGlitch(descriptionId, {
                distortionIntensity: 100,
                noObservers: true
            })
        }, 300)
    })

    const setupAnimations = $(() => {
        if (
            isServer
            || animationSetupIsDone.value
            || device.type === "mobile"
        ) return
        setupScrollTrigger(startAnimations)
        animationSetupIsDone.value = true
    })

    useOnWindow("scroll", setupAnimations)
    useOnWindow("keydown", setupAnimations)

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(() => {
        if (device.type === "mobile") {
            sectionRef.value?.classList.add("mobile")
        }
    })

    return (
        <S.Section class="react-section" ref={sectionRef}>
            <SpinnerLogo />
            <S.TextContainer>
                <S.MainText>
                    <span
                        id={textId1}
                        children="I'm frontend developer"
                        style={{ visibility: device.type === "mobile" ? "unset" : "hidden" }}
                    />
                    <span
                        id={textId2}
                        children="focused on REACT"
                        style={{ visibility: device.type === "mobile" ? "unset" : "hidden" }}
                    />
                </S.MainText>
                <S.DescriptionText
                    id={descriptionId}
                    ref={descriptionRef}
                    style={{ visibility: device.type === "mobile" ? "unset" : "hidden" }}
                >
                    <span>But, in my scope I have </span>
                    <span>HTML, CSS, JS, TS, Styled-Components, Tailwind, </span>
                    <span>Next.js, Qwik, Preact, Git, Vite, NodeJS, Fastify, Figma...</span>
                </S.DescriptionText>
            </S.TextContainer>
        </S.Section>
    )
})
