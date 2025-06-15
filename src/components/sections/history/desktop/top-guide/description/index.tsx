import { svgComponentByDescriptionType, textByDescriptionType } from "./core"
import { component$ } from "@builder.io/qwik"
import type { Props } from "./types"
import * as S from "./styles.css"

export const Description = component$<Props>(({
    type,
    ...rest
}) => {
    const SVGComponent = svgComponentByDescriptionType.get(
        type
    )!

    const texts = textByDescriptionType.get(type)!

    return (
        <S.Component {...rest}>
            <SVGComponent class={S.SVGClass} />
            <S.TextWrapper>
                <S.Text>{texts.top}</S.Text>
                <S.Text>{texts.bottom}</S.Text>
            </S.TextWrapper>
        </S.Component>
    )
})
