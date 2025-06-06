import { style } from "@vanilla-extract/css"
import { styled } from "styled-vanilla-extract/qwik"
import { Colors } from "~/styles"

export const Component = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    height: 100%;
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export const Text = styled.p`
    font-size: 1.2rem;
    line-height: 140%;
    color: ${Colors.Cloud51};
`

export const SVGClass = style({
    width: "4rem",
    minWidth: "4rem",
    height: "auto"
})
