import { style, styled } from "styled-vanilla-extract/qwik"
import { keyframes } from "@vanilla-extract/css"

export const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 100%;
    gap: 3rem;
`

export const ReactContainer = styled.div`
    display: flex;
    position: relative;
    max-height: 23rem;
    height: 100%;
`

const rotate = keyframes({
    to: { transform: "rotate(1turn)" }
})

export const reactSvgClass = style({
    maxHeight: "23rem",
    animation: rotate + " 32s linear infinite"
})

export const ReactShadowContainer = styled.div`
    transform: skewX(60deg) rotateX(70deg);
    position: absolute;
    max-width: 23rem;
    width: 100%;
    bottom: -2rem;
    left: -5.6rem;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

export const MainText = styled.p`
    display: flex;
    flex-direction: column;
    font-size: 2.5rem;
    margin-left: 1rem;
`

export const DescriptionText = styled.p`
    display: flex;
    flex-direction: column;
    opacity: 15%;
    transform: skewX(-26deg);
    font-family: "Cascadia Code";
    font-size: 1.2rem;
    line-height: 140%;

`
