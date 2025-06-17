import { $, component$, useId, useVisibleTask$ } from "@builder.io/qwik"
import { startTyping } from "cm-typing-effect"
import * as S from "./styles.css"

export const TypingText = component$(() => {
    const idText1 = useId()
    const idText2 = useId()
    const idText3 = useId()

    const animate = $(async () => {
        await startTyping(idText1, {
            realisticTyping: true,
            startDelay: 900,
            animationTime: 1600
        })
        await startTyping(idText2, {
            realisticTyping: true,
            animationTime: 1600
        })
        await startTyping(idText3, {
            realisticTyping: true,
            animationTime: 600
        })
    })

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(() => {
        animate()
    })

    return (
        <S.Text>
            <span id={idText1} style={{ visibility: "hidden" }}>
                I enjoy learning on my own and
            </span>
            <span id={idText2} style={{ visibility: "hidden" }}>
                use AI to explore any tech that
            </span>
            <span id={idText3} style={{ visibility: "hidden" }}>
                interests me
            </span>
        </S.Text>
    )
})
