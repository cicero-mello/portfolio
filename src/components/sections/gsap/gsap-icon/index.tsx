import { component$ } from "@builder.io/qwik"
import * as S from "./styles.css"
import { GSAPSVG } from "~/components/svg"

export const GSAPIcon = component$(() => {

    return (
        <S.Wrapper>
            <GSAPSVG class={S.GSAPSVGClass} />
        </S.Wrapper>
    )
})
