import { style } from "@vanilla-extract/css"
import { styled } from "styled-vanilla-extract/qwik"

export const Wrapper = styled.div`
    display: flex;
    position: relative;
    max-height: 23rem;
    height: 100%;
`

export const reactSvgClass = style({
    maxHeight: "23rem",
    userSelect: "none"
})

export const ReactShadowContainer = styled.div`
    transform: skewX(60deg) rotateX(70deg);
    position: absolute;
    max-width: 23rem;
    width: 100%;
    bottom: -6.1rem;
    left: -6rem;
    z-index: -1;
`
