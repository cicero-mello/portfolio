import { styled } from "styled-vanilla-extract/qwik"

export const Text = styled.p`
    margin-left: -4.375rem; // -70px
    font-size: 2.5rem;      // 40px

    white-space: nowrap;
    display: flex;
    flex-direction: column;
    width: fit-content;

    @media screen and (max-width: 66.25rem){    // 1060px
        font-size: 2rem;                        // 32px
        margin-left: -3rem;                     // -48px
    }
    @media screen and (max-width: 53.125rem){   // 850px
        font-size: 1.5rem;                      // 24px
        margin-left: -2.375rem;                 // -38px
    }
    @media screen and (max-width: 42.5rem){     // 680px
        font-size: 1.2rem;                      // 19.2px
        margin-left: -1.875rem;                 // 30px
    }
`
