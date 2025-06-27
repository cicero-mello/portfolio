import { styled } from "styled-vanilla-extract/qwik"

export const Section = styled.section`
    gap: 12.5rem;   // 200px
    width: 100%;
    margin-bottom: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 79.375rem){   // 1270px
        gap: 1.5rem;                            // 24px
    }
`

export const GlitchWrapper = styled.div`
    max-width: 59.5rem; // 952px
    width: 100%;

    @media screen and (max-width: 79.375rem){   // 1270px
        max-width: unset;
        display: flex;
        justify-content: center;
    }
`
