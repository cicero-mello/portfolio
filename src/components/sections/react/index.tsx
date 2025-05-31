import { component$ } from "@builder.io/qwik"
import * as S from "./styles.css"
import { SpinnerLogo } from "./spinner-logo"

export const ReactSection = component$(() => {

    return (
        <S.Section class="react-section">
            <SpinnerLogo />
            <S.TextContainer>
                <S.MainText>
                    <span>I'm Frontend developer</span>
                    <span>focused on REACT</span>
                </S.MainText>
                <S.DescriptionText>
                    <span>But, in my scope I have</span>
                    <span>HTML, CSS, JS, TS, Styled-Components, Tailwind</span>
                    <span>Next.js, Qwik, Preact, Git, Vite, NodeJS, Fastify, Figma...</span>
                </S.DescriptionText>
            </S.TextContainer>
        </S.Section>
    )
})
