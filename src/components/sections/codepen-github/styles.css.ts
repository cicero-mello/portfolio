import { styled } from "styled-vanilla-extract/qwik"
import { Breakpoints, Colors } from "~/styles"

export const Section = styled.section`
    padding: 3rem 4rem;                 // 48px 64px
    gap: 3rem;                          // 48px 64px
    min-height: min(100svh, 67.5rem);   // 1080px

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 44.375rem){   // 710px
        gap: 2.25rem;                           // 36px
    }

    @media screen and (${Breakpoints.Mobile}){
        padding: 3rem 1.5rem;   // 48px 24px
        gap: 1.5rem;            // 24px
    }

    &.mobile {
        margin: 5.5vh 0 36vh 0;
        min-height: unset;
    }
`

export const Title = styled.h2`
    -webkit-text-stroke: 0.0625rem; // 1px
    font-size: 2.5rem;              // 40px
    margin-bottom: 1.5rem;          // 24px
    width: 100%;
    opacity: 0.8;
    transform: skewX(-32deg);

    color: ${Colors.Stone};
    text-align: center;
    font-family: "Engravers MT";

    @media screen and (max-width: 44.375rem){   // 710px
        margin-bottom: 1rem;                    // 16px
    }

    @media screen and (${Breakpoints.Mobile}){
        font-size: 2rem;        // 32px
        margin-bottom: 0.75rem; // 12px
        transform: skewX(-20deg);
    }
`
