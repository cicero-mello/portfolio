import { component$ } from "@builder.io/qwik"
import { ReactBigSVG } from "~/components/svg"
import * as S from "./styles.css"
import { Colors } from "~/styles"

export const ReactSection = component$(() => {

    return (
        <S.Section class="react-section">
            <S.ReactContainer>
                <ReactBigSVG class={S.reactSvgClass} />
                <S.ReactShadowContainer>
                    <ReactBigSVG
                        class={S.reactSvgClass}
                        pathColor={Colors.Toast9}
                    />
                </S.ReactShadowContainer>
            </S.ReactContainer>

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
