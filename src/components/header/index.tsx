import { ToggleLanguageButton } from "../toggle-language-button"
import { component$ } from "@builder.io/qwik"
import * as S from "./styles.css"

export const Header = component$(() => {

    return (
        <S.Header>
            <S.Logo>
                <S.Name>Cícero Mello</S.Name>
                <S.Description>
                    Front-End Developer
                </S.Description>
            </S.Logo>
            <ToggleLanguageButton />
        </S.Header>
    )
})
