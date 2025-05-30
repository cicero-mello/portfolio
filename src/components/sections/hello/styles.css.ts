import { keyframes, style } from "@vanilla-extract/css"
import { styled } from "styled-vanilla-extract/qwik"
import { Breakpoints, Colors } from "~/styles"

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    position: relative;
`

export const show = style({})

const floating = keyframes({
    from: { transform: "translateY(0) rotate(-20deg)" },
    to: { transform: "translateY(0.5rem) rotate(-20deg)" }
})

export const ScrollDownTip = styled.span`
    position: absolute;
    bottom: 3rem; // 48px
    right: 1rem; // 16px
    user-select: none;

    font-family: "Grechen Fuemen";
    color: ${Colors.Cloud};
    font-size: 2.1rem; // 33.6px

    opacity: 0;
    transition: opacity 400ms ease-in-out;
    animation: ${floating} 700ms infinite ease-in-out alternate;

    &${show}{
        opacity: 1;
    }

    @media screen and (${Breakpoints.SmallWidth}) {
        font-size: 1.8rem; // 28.8px
    }

    @media screen and (${Breakpoints.Mobile}) {
        font-size: 1.5rem; // 24px
    }

    @media screen and (${Breakpoints.SmallHeight}) {
        font-size: 1.5rem; // 24px
    }
`
