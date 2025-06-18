import { styled } from "styled-vanilla-extract/qwik"

export const Wrapper = styled.div`
    width: 31.25rem;            // 500px
    left: calc(100% - 20rem);   // 320px
    transform: skewX(-37deg) skewY(2deg);
    bottom: 0;

    display: flex;
    position: absolute;
    height: auto;

    @media screen and (max-width: 66.25rem){    // 1060px
        width: 25rem;                           // 400px
        left: calc(100% - 16.25rem);            // 260px
    }
    @media screen and (max-width: 53.125rem){   // 850px
        width: 22.5rem;                         // 360px
        left: calc(100% - 14.375rem);           // 230px
    }
    @media screen and (max-width: 42.5rem){     // 680px
        width:18.75rem;                         // 300px
        left: calc(100% - 11.875rem);           // 190px
    }
`
