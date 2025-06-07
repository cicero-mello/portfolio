import { style } from "@vanilla-extract/css"
import { styled } from "styled-vanilla-extract/qwik"
import { Colors } from "~/styles"

export const Component = styled.div`
    max-width: 30rem;   // 480px
    gap: 1.5rem;        // 24px
    height: 100%;

    display: flex;
    align-items: center;
    justify-self: flex-end;
`

export const TextWrapper = styled.div`
    gap: 0.5rem;    // 8px

    display: flex;
    flex-direction: column;
`

export const Text = styled.p`
    font-size: 1.2rem;  // 19.2px
    line-height: 140%;

    color: ${Colors.Cloud51};
`

export const SVGClass = style({
    width: "4rem",      // 64px
    minWidth: "4rem",   // 64px

    height: "auto"
})
