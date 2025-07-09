import { $, component$, useSignal } from "@builder.io/qwik"
import * as S from "./styles.css"
import { useLanguageContext } from "~/context/language"

export const Email = component$(() => {
    const language = useLanguageContext()

    const showCopiedWarning = useSignal(false)
    const timeoutId = useSignal<NodeJS.Timeout>()

    const handleButtonClick = $(() => {
        navigator.clipboard.writeText("ciceromello.dev@gmail.com")
        showCopiedWarning.value = true

        clearTimeout(timeoutId.value)
        timeoutId.value = setTimeout(() => {
            showCopiedWarning.value = false
        }, 1500)
    })

    return (
        <S.Wrapper>
            <S.TextTip
                children={language.value === "en" ? "Copied!" : "Copiado!"}
                style={{
                    opacity: showCopiedWarning.value ? "1" : "0"
                }}
            />
            <S.Button onClick$={handleButtonClick} />
            <S.Text>
                ciceromello.dev@gmail.com
            </S.Text>
        </S.Wrapper>
    )
})
