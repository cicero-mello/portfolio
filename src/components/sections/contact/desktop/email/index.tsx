import { $, component$, isServer, useId, useSignal, useTask$ } from "@builder.io/qwik"
import { startGlitch } from "cm-glitch"
import { useEmphasis } from "~/hooks"
import type { EmailProps } from "./types"
import * as S from "./styles.css"
import { useLanguageContext } from "~/context/language"

export const Email = component$((props: EmailProps) => {
    const language = useLanguageContext()

    // eslint-disable-next-line qwik/use-method-usage
    const buttonRef = props.buttonRef ?? useSignal<HTMLElement>()
    const showTip = useEmphasis(buttonRef)
    const tipId = useId()
    const tipTextRef = useSignal<HTMLElement>()
    const tipText = useSignal(language.value === "en" ? "copy" : "copiar")
    const timeoutId = useSignal<NodeJS.Timeout>()

    const applyGlitch = $(() => (
        startGlitch(tipId, {
            animationTime: 200,
            distortionIntensity: 100,
            maxDistortionY: 1000,
            noObservers: true
        })
    ))

    const shotTip = $(() => {
        applyGlitch()
        tipTextRef.value!.style.visibility = "unset"
    })

    const hideTip = $(async () => {
        await applyGlitch()
        tipTextRef.value!.style.visibility = "hidden"
    })

    const handleClick = $(() => {
        navigator.clipboard.writeText("ciceromello.dev@gmail.com")
        clearTimeout(timeoutId.value)
        applyGlitch()
        tipText.value = language.value === "en" ? "copied!" : "copiado!"
        timeoutId.value = setTimeout(async () => {
            applyGlitch()
            tipText.value = language.value === "en" ? "copy" : "copiar"
        }, 1500)
    })

    useTask$(async ({ track }) => {
        track(showTip)
        if (isServer) return
        tipText.value = language.value === "en" ? "copy" : "copiar"
        clearTimeout(timeoutId.value)
        if (showTip.value) shotTip()
        else hideTip()
    })

    return (
        <S.Wrapper>
            <S.CopyButtonWrapper>
                <S.CopyTextTip
                    ref={tipTextRef}
                    id={tipId}
                >
                    {tipText}
                </S.CopyTextTip>
                <S.CopyButton
                    onClick$={handleClick}
                    ref={buttonRef}
                />
            </S.CopyButtonWrapper>
            <S.Text>
                ciceromello.dev@gmail.com
            </S.Text>
        </S.Wrapper >
    )
})
