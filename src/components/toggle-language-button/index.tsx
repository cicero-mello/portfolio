import { $, component$, useContext } from "@builder.io/qwik"
import { LanguageContext } from "~/context/language"
import * as S from "./styles.css"

export const ToggleLanguageButton = component$(() => {
    const language = useContext(LanguageContext)

    const handleChange = $(() => {
        if (language.value === "en") {
            language.value = "pt-BR"
            return
        }
        language.value = "en"
    })

    return (
        <S.Button onClick$={handleChange}>
            <S.Box
                children="en"
                class={{ [S.selected]: language.value === "en" }}
            />
            <S.Box
                children="pt-br"
                class={{ [S.selected]: language.value === "pt-BR" }}
            />
        </S.Button>
    )
})
