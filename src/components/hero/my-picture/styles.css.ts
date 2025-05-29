import { styled } from "styled-vanilla-extract/qwik"
import { style } from "@vanilla-extract/css"

export const ImageButton = styled.button`
    border-radius: 50%;
    display: flex;
    overflow: hidden;
    max-width: 15rem;
    width: 100%;
    cursor: unset;
    outline: none;
    user-select: none;

    // 0 4px 4px
    filter: drop-shadow(
        0 0.25rem 0.25rem rgba(0, 0, 0, 0.25)
    );
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
