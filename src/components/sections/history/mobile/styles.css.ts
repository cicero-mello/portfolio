import { style, styled } from "styled-vanilla-extract/qwik"
import { Colors } from "~/styles"

export const MainSection = styled.section`
    padding: 8.75rem 1.5rem;    // 140px 24px
    gap: 2.25rem;               // 36px
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.h2`
    font-size: min(12.5cqw, 4.5rem);  // 72px
    transform: skewX(-31deg);

    font-family: "Engravers MT";
    color: ${Colors.Stone};
`

export const TriangleSVGClass = style({
    maxWidth: "3.75rem"     // 60px
})

export const FinalMessage = styled.p`
    font-size: min(9cqw, 2.5rem);    // 40px
    transform: rotate(-5deg);
    font-family: "Grechen Fuemen";
    color: ${Colors.Stone};
    margin-bottom: 3rem;
`
