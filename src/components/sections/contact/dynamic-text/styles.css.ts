import { keyframes } from "@vanilla-extract/css"
import { styled } from "styled-vanilla-extract/qwik"
import { Colors } from "~/styles"

export const Wrapper = styled.p`
    display: flex;
    width: 50%;
    height: 35vh;
    font-size: 2.5rem;
    padding: 24px;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(5px -3px 8px rgba(0, 0, 0, 0.15));
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
    min-width: 450px;
    font-family: "Grechen Fuemen";
    font-size: 3.5rem;
    color: ${Colors.Lavender};
    -webkit-text-stroke: 1px;

    white-space: nowrap;
    transform: rotate(-2deg);
    padding-bottom: 20px;
    animation: ${floating} 1200ms ease-in-out infinite alternate;
    animation-delay: -200ms;
`
