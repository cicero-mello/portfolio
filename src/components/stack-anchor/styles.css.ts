import { keyframes } from "@vanilla-extract/css"
import { styled } from "styled-vanilla-extract/qwik"
import { Colors } from "~/styles"

export const Anchor = styled.a`
    font-size: 1.25rem; // 20px
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    white-space: nowrap;
    text-align: center;
    color: ${Colors.Toast};
    outline: none;

    will-change: transform;
    transform: scale(0);
    pointer-events: none;
    transition: 200ms ease-in-out;
    transform-origin: center;
`

export const Name = styled.span`
    position: absolute;
    top: 100%;
`

const floating = keyframes({
    from: {
        transform: "translateY(0.2rem)"
    },
    to: {
        transform: "translateY(-0.2rem)"
    }
})


export const SVGWrapper = styled.div`
    animation: ${floating} 1800ms infinite alternate ease-in-out;
    width: 100%;
    height: 100%;
    display: flex;
`
