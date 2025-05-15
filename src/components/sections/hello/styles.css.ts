import { styled } from "styled-vanilla-extract/qwik"
import { Colors } from "~/styles"

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    position: relative;
`

export const ScrollDownButton = styled.button`
    position: absolute;
    bottom: 2.5rem;
    right: 1rem;
    user-select: none;

    font-family: "Grechen Fuemen";
    color: ${Colors.Cloud};
    font-size: 2.2rem;
    transform: rotate(-20deg);
`
