import { $, component$, isServer, useId, useOnWindow, useSignal, useTask$, useVisibleTask$ } from "@builder.io/qwik"
import { setupScrollTrigger } from "~/gsap/react-section"
import { useLanguageContext } from "~/context/language"
import { getTextsByLanguage } from "~/languages"
import { useDevice } from "~/context/device"
import { startTyping } from "cm-typing-effect"
import { SpinnerLogo } from "./spinner-logo"
import { startGlitch } from "cm-glitch"
import * as S from "./styles.css"

export const ReactSection = component$(() => {
    const language = useLanguageContext()
    const text = getTextsByLanguage(language.value)

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

    useTask$(({ track }) => {
        track(language)
        if (isServer) return
        animationSetupIsDone.value = false
    })

    return (
        <S.Section class="react-section" ref={sectionRef}>
            <SpinnerLogo />
            <S.TextContainer key={language.value + "-react-section-text"}>
                <S.MainText>
                    <span
                        id={textId1}
                        children={text.reactSection.t1}
                        style={{ visibility: device.type === "mobile" ? "unset" : "hidden" }}
                    />
                    <span
                        id={textId2}
                        children={text.reactSection.t2}
                        style={{ visibility: device.type === "mobile" ? "unset" : "hidden" }}
                    />
                </S.MainText>
                <S.DescriptionText
                    id={descriptionId}
                    ref={descriptionRef}
                    style={{ visibility: device.type === "mobile" ? "unset" : "hidden" }}
                >
                    <span>{text.reactSection.t3}</span>
                    <span>{text.reactSection.t4}</span>
                    <span>{text.reactSection.t5}</span>
                </S.DescriptionText>
            </S.TextContainer>
        </S.Section>
    )
})
