import { svgComponentByDescriptionType, getTexts } from "./core"
import { useLanguageContext } from "~/context/language"
import { component$ } from "@builder.io/qwik"
import type { Props } from "./types"
import * as S from "./styles.css"

export const Description = component$<Props>(({
    type,
    ...rest
}) => {
    const language = useLanguageContext()

    const SVGComponent = svgComponentByDescriptionType.get(
        type
    )!

    const texts = getTexts(
        type,
        language.value
    )

    return (
        <S.Component {...rest}>
            <SVGComponent class={S.SVGClass} />
            <S.TextWrapper key={language.value + type + "history-desktop"}>
                <S.Text>{texts.top}</S.Text>
                <S.Text>{texts.bottom}</S.Text>
            </S.TextWrapper>
        </S.Component>
    )
})
