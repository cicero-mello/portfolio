import { styled } from "styled-vanilla-extract/qwik"
import { Breakpoints, Colors } from "~/styles"

export const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 100%;
    min-height: 100svh;
    gap: 3rem;  // 48px
    padding: 2.25rem 0 2.25rem 2.5rem;  // 36px 0px 36px 40px

    @media screen and (max-width: 68.75rem) {   // 1100px
        flex-direction: column;
        padding-left: unset;
        gap: 2.4rem // 38.4px
    }

    &.mobile {
        min-height: unset;
        padding: 3rem 0; // 48px48
    }
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;    // 24px
`

export const MainText = styled.p`
    display: flex;
    flex-direction: column;
    font-size: 2.5rem;  // 40px
    margin-left: 1rem;  // 16px
    white-space: nowrap;
    min-width: 32.25rem; // 516px

    @media screen and (max-width: 68.75rem) { // 1100px
        margin-left: unset;
        align-items: center;
        line-height: 120%;
    }

    @media screen and (${Breakpoints.SmallWidth}) {
        font-size: 1.8rem;  // 32px
        min-width: 25.8rem; // 413px
    }

    @media screen and (max-width: 33.125rem) {  // 530px
        font-size: 1.4rem;                      // 24px
        min-width: 19.375rem;                   // 310px
    }

    @media screen and (max-width: 25.625rem) {  // 410px
        font-size: 1.1rem;                      // 20px
        min-width: 16.125rem;                   // 258px
    }

    @media screen and (${Breakpoints.SmallHeight}) {
        font-size: 1.4rem;      // 24px
        min-width: 19.375rem;   // 310px
    }
`

export const DescriptionText = styled.p`
    display: flex;
    flex-direction: column;
    color: ${Colors.Cloud15};
    transform: skewX(-26deg);
    font-family: "Cascadia Code";
    font-size: 1.2rem;  // 19.2px
    line-height: 140%;
    white-space: nowrap;

    @media screen and (max-width: 68.75rem) { // 1100px
        display: unset;
        font-size: 1.1rem;      // 17.6px
        transform: unset;
        white-space: unset;
        max-width: 28.75rem;    // 460px
        width: 100%;
        text-align: justify;
        align-self: center;
    }

    @media screen and (${Breakpoints.SmallWidth}) {
        font-size: 1rem;        // 16px
        max-width: 29.25rem;    // 468px
        padding: 0 3rem;        // 48px
    }

    @media screen and (${Breakpoints.Mobile}) {
        max-width: 26.125rem;   // 418px
    }

    @media screen and (${Breakpoints.SmallHeight}) {
         font-size: 1.1rem;     // 17.6px
    }
`
