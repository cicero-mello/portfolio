import { styled } from "styled-vanilla-extract/qwik"
import { Colors } from "~/styles"

export const Anchor = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    white-space: nowrap;
    text-align: center;
    color: ${Colors.Toast};
    outline: none;


    aspect-ratio: 1;
    height: fit-content;
    font-size: 20px;
`



export const Name = styled.span`
    position: absolute;
    top: 100%;
`
