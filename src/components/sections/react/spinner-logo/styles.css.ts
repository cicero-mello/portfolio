import { keyframes, style } from "@vanilla-extract/css"
import { styled } from "styled-vanilla-extract/qwik"

export const Wrapper = styled.div`
    display: flex;
    position: relative;

    @media screen and (max-width: 1100px) {
        max-width: 50%;
    }
`

const rotate = keyframes({
    to: { transform: "rotate(360deg)" }
})

export const reactSvgClass = style({
    width: "20.6875rem",            // 331px
    height: "auto",
    userSelect: "none",
    transformOrigin: "center center",
    animation: rotate + " 40s linear infinite",
    "@media": {
        "(max-width: 68.75rem)": {  // 1100px
            width: "100%",
        },
        "(max-height: 38rem)": {    // Breakpoints.SmallHeight
            maxWidth: "13.75rem",   // 220px
        }
    }
})

export const ReactShadowContainer = styled.div`
    transform: skewX(60deg) rotateX(70deg);
    position: absolute;
    max-width: 23rem;
    width: 100%;
    bottom: -33%;
    left: -33%;
    z-index: -1;
`
