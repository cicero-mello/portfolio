import { style } from "@vanilla-extract/css"
import { styled } from "styled-vanilla-extract/qwik"
import { Colors } from "~/styles"

export const Section = styled.section`
    display: flex;
    height: fit-content;
    justify-content: center;
    align-items: center;
    min-height: unset;
    gap: 32px;
    width: fit-content;
`

export const Text = styled.p`
    white-space: nowrap;
    text-align: end;
    font-size: 1.5rem;
    color: ${Colors.Toast};
`

export const Anchor = styled.a`
    appearance: none;
    color: ${Colors.Toast};
    position: relative;
    text-decoration: none;
    outline: none;
    transition: 100ms ease-in-out;

    &::after {
        content: "";
        position: absolute;
        height: 3px;
        top: 100%;
        border-radius: 4px;
        left: 0;
        width: 100%;
        background-color: ${Colors.Toast};
        transition: 160ms ease-in-out;
    }

    &:hover, &:focus {
        color: ${Colors.Cloud};
    }

    &:hover::after, &:focus::after {
        background-color: ${Colors.Fawn};
    }
`

export const IconClass = style({
    height: "126px",
    width: "126px",
    transform: "rotate(-10deg)",
    opacity: 0.3,
    transition: "opacity 100ms ease-in-out"
})
