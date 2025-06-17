import { component$, useId, useSignal, useVisibleTask$ } from "@builder.io/qwik"
import { TypingText } from "./typing-text"
import { GSAPIcon } from "./gsap-icon"
import * as S from "./styles.css"
import { startGlitch } from "cm-glitch"

export const GsapSection = component$(() => {
    const gsapTextId = useId()
    const gsapAnchorId = useId()
    const gsapTextRef = useSignal<HTMLElement>()
    const gsapAnchorRef = useSignal<HTMLElement>()

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(() => {
        setTimeout(() => {
            gsapTextRef.value!.style.visibility = "unset"
            gsapAnchorRef.value!.style.visibility = "unset"
            startGlitch(gsapTextId)
            startGlitch(gsapAnchorId)
        }, 900 + 1600 + 1600 + 600 + 300)
    })

    return (
        <S.Section>
            <S.Wrapper>
                <TypingText />
                <S.GSAPCard>
                    <S.GSAPText
                        id={gsapTextId}
                        style={{ visibility: "hidden" }}
                        ref={gsapTextRef}
                    >
                        For instance, this was my <br />
                        first time experimenting with
                    </S.GSAPText>
                    <S.GSAPAnchor
                        children="GSAP"
                        id={gsapAnchorId}
                        style={{ visibility: "hidden" }}
                        ref={gsapAnchorRef}
                    />
                    <GSAPIcon />
                </S.GSAPCard>
            </S.Wrapper>
        </S.Section>
    )
})
