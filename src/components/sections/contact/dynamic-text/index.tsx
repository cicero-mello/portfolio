import { $, component$, useId, useSignal, useVisibleTask$ } from "@builder.io/qwik"
import * as S from "./styles.css"
import { startGlitch } from "cm-glitch"

const purpleTexts = [
    "me on your team?",
    "to talk with me?",
    "know me better?"
]

export const DynamicText = component$(() => {
    const textId = useId()
    const purpleTextIndex = useSignal(0)

    const changeText = $(() => {
        startGlitch(textId, {
            animationTime: 600,
            direction: "reverse",
            distortionIntensity: 100,
            maxDistortionY: 40
        })

        if (purpleTextIndex.value === purpleTexts.length - 1) {
            purpleTextIndex.value = 0
        }
        else purpleTextIndex.value += 1
    })

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(({ cleanup }) => {
        const interval = setInterval(changeText, 2400)
        cleanup(() => clearInterval(interval))
    })

    return (
        <S.Wrapper>
            Want <S.ChangeableText id={textId}>
                {purpleTexts[purpleTextIndex.value]}
            </S.ChangeableText>
        </S.Wrapper>
    )
})
