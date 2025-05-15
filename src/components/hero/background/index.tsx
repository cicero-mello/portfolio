import { component$ } from "@builder.io/qwik"
import * as S from "./styles.css"
import { text } from "./core"

export const Background = component$(() => {

    return (
        <S.Content>
            <S.LetterBox>
                {Array.from({ length: 40 }).map((_, i) => (
                    <S.Line
                        children={text}
                        key={i + "-hello-bg-line"}
                    />
                ))}
            </S.LetterBox>
        </S.Content>
    )
})
