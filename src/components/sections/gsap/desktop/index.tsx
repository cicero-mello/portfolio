import { $, component$, isServer, useId, useOnWindow, useSignal, useVisibleTask$ } from "@builder.io/qwik"
import { removeGlitch, startGlitch } from "cm-glitch"
import { gsap } from "~/gsap/gsap-section"
import { TypingText } from "./typing-text"
import { GSAPIcon } from "./gsap-icon"
import * as S from "./styles.css"

export const Desktop = component$(() => {
    const cardId = useId()
    const gsapTextId = useId()
    const gsapAnchorId = useId()
    const gsapTextRef = useSignal<HTMLElement>()
    const gsapAnchorRef = useSignal<HTMLElement>()
    const cardRef = useSignal<HTMLElement>()

    const timeoutId1 = useSignal<NodeJS.Timeout>()
    const timeoutId2 = useSignal<NodeJS.Timeout>()

    const animationSetupIsDone = useSignal(false)

    const startAnimations = $(async () => {
        timeoutId1.value = setTimeout(async () => {
            cardRef.value!.style.visibility = "unset"
            await startGlitch(cardId, {
                maxDistortionX: 20,
                distortionIntensity: 90,
                animationTime: 500,
                noObservers: true
            })
            removeGlitch(cardId)
        }, 2000)

        timeoutId2.value = setTimeout(async () => {
            gsapTextRef.value!.style.visibility = "unset"
            gsapAnchorRef.value!.style.visibility = "unset"
            startGlitch(gsapTextId, {
                noObservers: true
            })
            await startGlitch(gsapAnchorId, {
                noObservers: true
            })

            removeGlitch(gsapTextId)
            removeGlitch(gsapAnchorId)
        }, 5300)
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

    return (
        <S.Section class="gsap-section">
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
                        For instance, this was my <br />
                        first time experimenting with
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
