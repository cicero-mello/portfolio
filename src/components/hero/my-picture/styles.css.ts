import { styled } from "styled-vanilla-extract/qwik"
import { style } from "@vanilla-extract/css"
import { Breakpoints } from "~/styles"

export const ImageButton = styled.button`
    border-radius: 50%;
    display: flex;
    overflow: hidden;
    max-width: 15rem;   // 240px
    width: 100%;
    cursor: unset;
    outline: none;
    user-select: none;

    // 0 4px 4px
    filter: drop-shadow(
        0 0.25rem 0.25rem rgba(0, 0, 0, 0.25)
    );

    @media screen and (max-width: 44rem) {
        max-width: 13rem;       // 208px
        margin-bottom: 1.5rem;  // 24px
    }

    @media screen and (${Breakpoints.Mobile}) {
        max-width: 11rem;   // 176px
    }

    @media screen and (${Breakpoints.SmallHeight}) {
        max-width: 11rem;       // 176px
        margin-bottom: 1.5rem; // 24px
    }
`

export const imageClass = style({
    width: "100%",
    height: "auto",
    pointerEvents: "none",
    userSelect: "none"
})

export const svgClass = style({
    position: "absolute",
    visibility: "hidden",
    pointerEvents: "none"
})
