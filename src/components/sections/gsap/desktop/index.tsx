import { $, component$, isServer, useId, useOnWindow, useSignal, useTask$, useVisibleTask$ } from "@builder.io/qwik"
import { startGlitch } from "cm-glitch"
import { gsap } from "~/gsap/gsap-section"
import { TypingText } from "./typing-text"
import { GSAPIcon } from "./gsap-icon"
import * as S from "./styles.css"
import { useLanguageContext } from "~/context/language"
import { getTextsByLanguage } from "~/languages"

export const Desktop = component$(() => {
    const language = useLanguageContext()
    const texts = getTextsByLanguage(language.value)

    const cardId = useId()
    const gsapTextId = useId()
    const gsapAnchorId = useId()
    const gsapTextRef = useSignal<HTMLElement>()
    const gsapAnchorRef = useSignal<HTMLElement>()
    const cardRef = useSignal<HTMLElement>()

    const timeoutId1 = useSignal<NodeJS.Timeout>()
    const timeoutId2 = useSignal<NodeJS.Timeout>()

    const animationSetupIsDone = useSignal(false)

    const startAnimations = $(() => {
        timeoutId1.value = setTimeout(() => {
            cardRef.value!.style.visibility = "unset"
            startGlitch(cardId, {
                maxDistortionX: 20,
                distortionIntensity: 90,
                animationTime: 500,
                earlyCleanup: true
            })
        }, 1500)

        timeoutId2.value = setTimeout(() => {
            gsapTextRef.value!.style.visibility = "unset"
            gsapAnchorRef.value!.style.visibility = "unset"
            startGlitch(gsapTextId, {
                earlyCleanup: true
            })
            startGlitch(gsapAnchorId, {
                earlyCleanup: true
            })
        }, 4500)
    })

    const setupAnimations = $(() => {
        if (
            isServer
            || animationSetupIsDone.value
        ) return
        animationSetupIsDone.value = true
        gsap.triggerInGsapSection(startAnimations)
    })

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(() => {
        return () => {
            clearTimeout(timeoutId1.value)
            clearTimeout(timeoutId2.value)
        }
    })

    useOnWindow("scroll", setupAnimations)
    useOnWindow("keydown", setupAnimations)

    useTask$(({ track }) => {
        track(language)
        if (isServer) return
        animationSetupIsDone.value = false
    })

    return (
        <S.Section class="gsap-section" key={language.value + "-gsap-desktop"}>
            <S.Wrapper>
                <TypingText />
                <S.GSAPCard
                    id={cardId}
                    ref={cardRef}
                    style={{ visibility: "hidden" }}
                >
                    <S.GSAPText
                        id={gsapTextId}
                        ref={gsapTextRef}
                        style={{ visibility: "hidden" }}
                    >
                        {texts.gsapSection.t4} <br />
                        {texts.gsapSection.t5}
                    </S.GSAPText>
                    <S.GSAPAnchor
                        children="GSAP"
                        href="https://gsap.com/"
                        target="_blank"
                        id={gsapAnchorId}
                        ref={gsapAnchorRef}
                        style={{ visibility: "hidden" }}
                    />
                    <GSAPIcon />
                </S.GSAPCard>
            </S.Wrapper>
        </S.Section>
    )
})
