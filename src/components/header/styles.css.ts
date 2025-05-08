import { styled } from "styled-vanilla-extract/qwik"
import { Breakpoints, Colors } from "~/styles"

export const Header = styled.header`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 1.75rem 1.25rem 1.75rem; // 32px 28px 20px 28px
    position: relative;

    @media screen and (${Breakpoints.Mobile}) {
        padding: 1.5rem 1.125rem 0.75rem 1.125rem; // 24px 18px 12px 18px
        &::after {
            height: 0.0625rem;
            width: calc(100% - 1.125rem - 1.125rem);
        }
    }
    @media screen and (${Breakpoints.SmallHeight}) {
        padding: 1.5rem 1.125rem 0.75rem 1.125rem; // 24px 18px 12px 18px
        &::after {
            height: 0.0625rem;
            width: calc(100% - 1.125rem - 1.125rem);
        }
    }

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        width: calc(100% - 3.5rem); // 56px
        height: 0.125rem;
        border-radius: 0.75rem;
        background-color: ${Colors.Cloud};
    }
`

export const Logo = styled.h1`
    display: flex;
    flex-direction: column;
    font-family: "Henny Penny";
    align-items: center;
    justify-content: center;
    user-select: none;
    gap: 0.25rem; // 4px

    @media screen and (${Breakpoints.Mobile}) {
        gap: 0.1875rem; // 3px
    }
    @media screen and (${Breakpoints.SmallHeight}) {
        gap: 0.1875rem; // 3px
    }
`

export const Name = styled.span`
    font-size: 2rem; // 32px
    line-height: 100%;

    @media screen and (${Breakpoints.Mobile}) {
        font-size: 1.625rem; // 26px
    }
    @media screen and (${Breakpoints.SmallHeight}) {
        font-size: 1.625rem; // 26px
    }
`

export const Description = styled.span`
    font-size: 1.25rem; // 20px
    line-height: 100%;
    color: ${Colors.Stone};

    @media screen and (${Breakpoints.Mobile}) {
        font-size: 1rem; // 16px
    }
    @media screen and (${Breakpoints.SmallHeight}) {
        font-size: 1rem; // 16px
    }
`
