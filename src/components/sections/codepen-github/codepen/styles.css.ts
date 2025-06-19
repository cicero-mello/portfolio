import { style } from "@vanilla-extract/css"
import { styled } from "styled-vanilla-extract/qwik"
import { Colors } from "~/styles"

export const Section = styled.section`
    display: flex;
    width: 100%;
    min-height: unset;
    justify-content: center;
    align-items: center;
    gap: 48px;
    /* padding: 0 48px; */
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    text-align: end;
    gap: 24px;
    font-size: 1.5rem;
`

export const Text = styled.p`
    white-space: nowrap;
    color: ${Colors.Toast};
`

export const Anchor = styled.a`
    color: ${Colors.Toast};
    transition: 100ms ease-in-out;
    text-decoration: none;
    position: relative;
    outline: none;

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
    width: "80px",
    height: "fit-content",
    opacity: "0.3",
    transition: "100ms ease-in-out"
})

export const IframeWrapper = styled.div`
    min-height: unset;
    height: 280px;
    max-width: 600px;
    width: 100%;
    box-shadow: 0.6875rem 0.5rem 0.625rem #0000001a;         // -11px 8px 10px

    border-radius: 12px;
    overflow: hidden;
    opacity: 0.65;
`

export const IframeClass = style({
    border: "none",
    width: "100%",
    height: "100%"
})
