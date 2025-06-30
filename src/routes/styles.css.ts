import { keyframes } from "@vanilla-extract/css"
import { styled } from "styled-vanilla-extract/qwik"

const fadeIn = keyframes({
    from: {
        opacity: "0"
    },
    to: {
        opacity: "1"
    }
})

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    max-width: 120rem; // 1920px
    width: 100%;
    animation: ${fadeIn} 300ms ease-in forwards;
`

export const HorizontalWrapper1 = styled.div`
    display: flex;
    margin-bottom: 3000px;
    right: -400%;
`

export const HorizontalWrapper2 = styled.div`
    display: flex;
    margin-bottom: 2000px;
`
