import { style } from "@vanilla-extract/css"
import { styled } from "styled-vanilla-extract/qwik"
import { Colors } from "~/styles"

export const Section = styled.section`
    gap: 3rem;          // 48px
    padding: 3rem 0;    // 48px

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: unset;
`

export const TopText = styled.h2`
    font-size: 1.5rem;  // 24px
    padding: 0 1.5rem;  // 24px
`

export const Card = styled.div`
    padding: 1.5rem 3rem;   // 24px 48px
    gap: 1.5rem;            // 24px
    width: 100%;

    display: flex;
    background-color: ${Colors.Fawn};
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 25rem){   // 400px
        padding: 1.5rem;                    // 24px
    }
`

export const CardTextWrapper = styled.p`
    font-size: 1.2rem;  // 19.2px
    gap: 1.25rem;       // 20px

    display: flex;
    flex-direction: column;
    width: fit-content;
    color: ${Colors.Cloud61};
`

export const Anchor = styled.a`
    font-size: 1.8rem;  // 28.8px

    width: fit-content;
    align-self: center;
    appearance: none;
    outline: none;
    color: ${Colors.Cloud61};
    transition: color 100ms ease-in-out;

    &:hover, &:focus {
        color: ${Colors.Cloud};
    }
`

export const IconClass = style({
    minWidth: "7.5rem",     // 120px
    width: "7.5rem",        // 120px
    "@media": {
        "screen and (max-width: 25rem)": {  // 400px
            width: "6.25rem",               // 100px
            minWidth: "6.25rem"             // 100px
        },
    }
})
