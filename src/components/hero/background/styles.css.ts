import { styled } from "styled-vanilla-extract/qwik"
import { keyframes } from "@vanilla-extract/css"
import { Colors } from "~/styles"

export const Content = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 84%;
    z-index: -1;
    overflow: hidden;
    white-space: nowrap;
    user-select: none;

    font-family: "Engravers MT";
    color: ${Colors.Cloud2};
    font-size: 4rem; // 64px
`

export const LetterBox = styled.div`
    padding-bottom: 12.5rem; // 200px
`

export const Line = styled.div`
    display: flex;
    transform: skew(15deg, -1deg);
`

const slide = keyframes({
    from: { transform: "translateX(0px)" },
    to: { transform: "translateX(-100%)" }
})

export const LineFrase = styled.p`
    animation:
        ${slide}
        var(--animation-time)
        var(--animation-direction)
        linear infinite
    ;
`
