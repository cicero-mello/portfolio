import { $, component$, isServer, useId, useSignal, useTask$ } from "@builder.io/qwik"
import { startGlitch } from "cm-glitch"
import { useEmphasis } from "~/hooks"
import * as S from "./styles.css"

export const Email = component$(() => {
    const buttonRef = useSignal<HTMLElement>()
    const showTip = useEmphasis(buttonRef)
    const tipId = useId()
    const tipTextRef = useSignal<HTMLElement>()
    const tipText = useSignal("copy")
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
        tipText.value = "copied!"
        timeoutId.value = setTimeout(async () => {
            applyGlitch()
            tipText.value = "copy"
        }, 1500)
    })

    useTask$(async ({ track }) => {
        track(showTip)
        if (isServer) return
        tipText.value = "copy"
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
