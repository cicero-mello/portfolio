import { style } from "@vanilla-extract/css"
import { styled } from "styled-vanilla-extract/qwik"
import { Breakpoints, Colors } from "~/styles"

export const Section = styled.section`
    gap: 2rem;  // 32px

    display: flex;
    height: fit-content;
    justify-content: center;
    align-items: center;
    min-height: unset;
    width: fit-content;

    @media screen and (${Breakpoints.Mobile}){
        gap: 1rem;          // 16px
        padding: 0 0.5rem;  // 0 8px
    }
`

export const Text = styled.p`
    font-size: 1.5rem;      // 24px

    color: ${Colors.Toast};
    white-space: nowrap;
    text-align: end;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 44.375rem){   // 710px
       white-space: unset;
       flex-direction: unset;
       display: unset;
    }

    @media screen and (${Breakpoints.Mobile}){
        font-size: 1.2rem; // 19.2px
    }
`

export const Anchor = styled.a`
    appearance: none;
    color: ${Colors.Toast};
    position: relative;
    width: fit-content;
    text-decoration: none;
    outline: none;
    transition: color 100ms ease-in-out;

    &::after {
        content: "";
        border-radius: 0.25rem; // 4px
        height: 0.1875rem;      // 3px
        width: 100%;
        top: 100%;
        left: 0;

        position: absolute;
        background-color: ${Colors.Toast};
        transition: background-color 160ms ease-in-out;
    }

    &:hover, &:focus {
        color: ${Colors.Cloud};
    }

    &:hover::after, &:focus::after {
        background-color: ${Colors.Fawn};
    }
`

export const IconClass = style({
    height: "auto",
    minWidth: "7.875rem",   // 126px
    width: "7.875rem",      // 126px
    transform: "rotate(-10deg)",
    opacity: 0.3,
    transition: "opacity 100ms ease-in-out",
    "@media": {
        "screen and (max-width: 30rem)": {  // Breakpoints.Mobile
            minWidth: "6.25rem",            // 100px
            width: "6.25rem",               // 100px
        },
    }
})
