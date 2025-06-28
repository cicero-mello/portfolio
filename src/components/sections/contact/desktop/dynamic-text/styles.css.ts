import { keyframes } from "@vanilla-extract/css"
import { styled } from "styled-vanilla-extract/qwik"
import { Colors } from "~/styles"

export const Wrapper = styled.p`
    font-size: 2.5rem;  // 40px
    padding: 1.5rem;    // 24px
    height: 35vh;
    width: 50%;

    // 5px -3px 8px
    filter: drop-shadow(0.3125rem -0.1875rem 0.5rem rgba(0, 0, 0, 0.15));

    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 73.125rem){ // 1170px
        width: 100%;
        height: fit-content;
    }

    @media screen and (max-width: 55rem){ // 880px
        transform: scale(0.8);
    }
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
    -webkit-text-stroke: 0.0625rem; // 1px
    min-width: 27rem;               // 423px
    font-size: 3.5rem;              // 56px
    padding-bottom: 1.25rem;        // 20px
    margin-left: 0.5ch;
    transform: rotate(-2deg);

    color: ${Colors.Lavender};
    font-family: "Grechen Fuemen";
    white-space: nowrap;

    animation: ${floating} 1200ms ease-in-out infinite alternate;
    animation-delay: -200ms;
`
