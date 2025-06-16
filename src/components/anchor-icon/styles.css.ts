import { keyframes } from "@vanilla-extract/css"
import { styled } from "styled-vanilla-extract/qwik"

export const Anchor = styled.a`
    font-size: 1.25rem; // 20px
    width: 100%;
    height: 100%;
    outline: none;
`

const floating = keyframes({
    from: {
        transform: "translateY(0.2rem)"
    },
    to: {
        transform: "translateY(-0.2rem)"
    }
})

export const FloatWrapper = styled.div`
    animation: ${floating} 1000ms infinite alternate ease-in-out;
`
