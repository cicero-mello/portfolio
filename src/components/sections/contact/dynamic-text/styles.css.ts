import { keyframes } from "@vanilla-extract/css"
import { styled } from "styled-vanilla-extract/qwik"
import { Colors } from "~/styles"

export const Wrapper = styled.p`
    display: flex;
    width: 50%;
    height: 35vh;
    font-size: 2rem;
    padding: 24px;
    padding-left: 100px;
    align-items: center;
`

const floating = keyframes({
    from: {
        transform: "rotate(-1deg) translateY(0.3rem)"
    },
    to: {
        transform: "rotate(-2deg) translateY(-0.3rem)"
    }
})

export const ChangeableText = styled.span`
    margin-left: 0.5ch;

    font-family: "Grechen Fuemen";
    font-size: 3rem;
    color: ${Colors.Lavender};
    -webkit-text-stroke: 1px;

    white-space: nowrap;
    transform: rotate(-2deg);
    padding-bottom: 20px;
    animation: ${floating} 1200ms ease-in-out infinite alternate;
    animation-delay: -200ms;
`
