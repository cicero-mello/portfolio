import { styled } from "styled-vanilla-extract/qwik"
import { Colors } from "~/styles"

export const Content = styled.div`
    position: absolute;
    width: 100%;
    height: 84%;
    z-index: -1;
    overflow: hidden;
    white-space: nowrap;

    font-family: "Engravers MT";
    color: ${Colors.Cloud};
    opacity: 3%;
    font-size: 4rem;
`

export const LetterBox = styled.div`
    position: absolute;
    top: -50%;
`

export const Line = styled.p`
    transform: skew(15deg, -1deg);
`
