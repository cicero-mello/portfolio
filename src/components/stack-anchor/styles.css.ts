import { styled } from "styled-vanilla-extract/qwik"
import { Colors } from "~/styles"

export const Anchor = styled.a`
    font-size: 1.5rem;  // 24px
    height: 10rem;      // 160px
    width: 10rem;       // 160px

    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: ${Colors.Toast};
    outline: none;
`

export const Name = styled.span`
    position: absolute;
    top: 100%;
`
