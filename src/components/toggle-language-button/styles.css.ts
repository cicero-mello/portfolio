import { style, styled } from "styled-vanilla-extract/qwik"
import { Breakpoints, Colors } from "~/styles"

export const Button = styled.button`
    display: flex;
    height: fit-content;
    user-select: none;
    font-family: "Henny Penny";
    font-size: 1.25rem; // 20px

    @media screen and (${Breakpoints.Mobile}) {
        font-size: 1rem; // 16px
    }
    @media screen and (${Breakpoints.SmallHeight}) {
        font-size: 1rem; // 16px
    }
`

export const selected = style({})

export const Box = styled.span`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    padding: 0.1875rem 0.875rem 0 0.875rem; // 3px 14px 0 14px
    color: ${Colors.Cloud};

    transition-property: background-color, color;
    transition-timing-function: linear;
    transition-duration: 100ms;

    &${selected} {
        background-color: ${Colors.Cloud};
        color: ${Colors.Onyx};
    }

    @media screen and (${Breakpoints.Mobile}) {
        padding: 0.1875rem 0.75rem 0 0.75rem; // 3px 12px 0 12px
    }
    @media screen and (${Breakpoints.SmallHeight}) {
        padding: 0.1875rem 0.75rem 0 0.75rem; // 3px 12px 0 12px
    }
`
