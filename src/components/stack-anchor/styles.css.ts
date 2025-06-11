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
