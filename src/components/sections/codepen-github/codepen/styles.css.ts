import { style } from "@vanilla-extract/css"
import { styled } from "styled-vanilla-extract/qwik"
import { Breakpoints, Colors } from "~/styles"

export const Section = styled.section`
    gap: 3rem;      // 48px
    width: 100%;

    display: flex;
    min-height: unset;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 44.375rem){   // 710px
        gap: 1.5rem;                            // 24px
        flex-direction: column;
    }

    @media screen and (${Breakpoints.Mobile}){
        gap: 0.75rem;   // 12px
    }
`

export const TextWrapper = styled.div`
    font-size: 1.5rem; // 24px
    gap: 1.5rem; // 24px

    display: flex;
    flex-direction: column;
    align-items: end;
    text-align: end;
    white-space: nowrap;

    @media screen and (max-width: 44.375rem){   // 710px
        flex-direction: row;
        white-space: unset;
        align-items: center;
    }

    @media screen and (${Breakpoints.Mobile}){
        font-size: 1.2rem;  // 19.2px
        gap: 1rem;          // 16px
    }
`

export const Text = styled.p`
    color: ${Colors.Toast};
`

export const Anchor = styled.a`
    color: ${Colors.Toast};
    transition: color 100ms ease-in-out;
    text-decoration: none;
    position: relative;
    outline: none;

    &::after {
        content: "";
        height: 0.1875rem;      // 3px
        border-radius: 0.25rem; // 4px
        top: 100%;
        width: 100%;
        left: 0;

        position: absolute;
        background-color: ${Colors.Toast};
        transition: background-color 160ms ease-in-out;
    }

    &:hover, &:focus, &.emphasis {
        color: ${Colors.Cloud};
    }

    &:hover::after, &:focus::after, &.emphasis::after {
        background-color: ${Colors.Fawn};
    }
`

export const IconClass = style({
    width: "5rem",  // 80px
    height: "fit-content",
    opacity: "0.3",
    transition: "100ms ease-in-out",
    "@media": {
        "screen and (max-width: 30rem)": {  // Breakpoints.Mobile
            width: "4.375rem"               // 70px
        },
    }
})

export const IframeWrapper = styled.div`
    max-width: 37.5rem;     // 600px
    height: 17.5rem;        // 280px
    border-radius: 0.75rem; // 12px
    box-shadow: 0.6875rem 0.5rem 0.625rem #0000001a; // -11px 8px 10px
    width: 100%;

    min-height: unset;
    overflow: hidden;
    opacity: 0.65;
`

export const IframeClass = style({
    border: "none",
    width: "100%",
    height: "100%"
})
