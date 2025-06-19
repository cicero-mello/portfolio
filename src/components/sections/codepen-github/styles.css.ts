import { styled } from "styled-vanilla-extract/qwik"
import { Colors } from "~/styles"

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 48px;
    padding: 48px 64px;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h2`
    color: ${Colors.Stone};
    font-size: 2.5rem;
    transform: skewX(-32deg);
    width: 100%;
    text-align: center;
    margin-bottom: 24px;

    font-family: "Engravers MT";

    -webkit-text-stroke: 1px;

    opacity: 0.8;
`
