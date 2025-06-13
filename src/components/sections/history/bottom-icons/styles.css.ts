import { style } from "@vanilla-extract/css"
import { styled } from "styled-vanilla-extract/qwik"
import { Breakpoints } from "~/styles"

export const Wrapper = styled.div`
    padding: 1rem 2rem; // 16px 24px
    gap: 1rem;          // 16px
    height: 100%;
    width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    overflow: hidden;

    @media screen and (max-width: 50rem) {  // 800px
        padding: 1rem 1rem; // 16px 16px
        gap: 0.5rem;        // 8px
    }
    @media screen and (${Breakpoints.SmallHeight}) {  // 608px
        padding: 1rem 1rem; // 16px 16px
        gap: 0.5rem;        // 8px
    }
`

export const Line = styled.div`
    padding-bottom: 1.5rem; // 24px
    gap: 1.5rem;            // 24px
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    &.small-line {
        padding: 0 5%;
        padding-bottom: 1.5rem; // 24px
    }
`

export const StackAnchorClass = style({
    "@media": {
        "screen and (max-width: 50rem)": {  // 800px
            fontSize: "0.9rem !important"
        },
        "screen and (max-height: 38rem)": {  // 608px
            fontSize: "0.9rem !important"
        }
    }
})
