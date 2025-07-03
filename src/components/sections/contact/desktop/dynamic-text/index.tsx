import { $, component$, useId, useSignal, useVisibleTask$ } from "@builder.io/qwik"
import { useLanguageContext } from "~/context/language"
import { getTextsByLanguage } from "~/languages"
import { startGlitch } from "cm-glitch"
import * as S from "./styles.css"

export const DynamicText = component$(() => {
    const language = useLanguageContext()
    const texts = getTextsByLanguage(language.value)
    const purpleTexts = [
        texts.contact.tp1,
        texts.contact.tp2,
        texts.contact.tp3
    ]

    const textId = useId()
    const purpleTextIndex = useSignal(0)

    const changeText = $(() => {
        startGlitch(textId, {
            animationTime: 600,
            direction: "reverse",
            distortionIntensity: 100,
            maxDistortionY: 40,
            earlyCleanup: true
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
            {texts.contact.prologue} <S.ChangeableText id={textId}>
                {purpleTexts[purpleTextIndex.value]}
            </S.ChangeableText>
        </S.Wrapper>
    )
})
