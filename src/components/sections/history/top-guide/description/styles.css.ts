import { style } from "@vanilla-extract/css"
import { styled } from "styled-vanilla-extract/qwik"
import { Breakpoints, Colors } from "~/styles"

export const Component = styled.div`
    max-width: 30rem;   // 480px
    gap: 1.5rem;        // 24px
    height: 100%;

    display: flex;
    align-items: center;
    justify-self: flex-end;

    @media screen and (max-width: 50rem) {  // 800px
        max-width: 24rem;   // 384px
        gap: 1.2rem;        // 19.2px
    }
    @media screen and (${Breakpoints.SmallHeight}) {  // 608px
        max-width: 24rem;   // 384px
        gap: 1.2rem;        // 19.2px
    }
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

    @media screen and (max-width: 50rem) {  // 800px
        font-size: 1rem;    // 16px
    }
    @media screen and (${Breakpoints.SmallHeight}) {  // 608px
        font-size: 1rem;    // 16px
    }
`

export const SVGClass = style({
    width: "4rem",      // 64px
    minWidth: "4rem",   // 64px
    height: "auto",
    "@media": {
        "screen and (max-width: 50rem)": {  // 800px
            width: "3.3rem",    // 52.8px
            minWidth: "3.3rem", // 52.8px
        },
        "screen and (max-height: 38rem)": {  // 608px
            width: "3.3rem",    // 52.8px
            minWidth: "3.3rem", // 52.8px
        }
    }
})
