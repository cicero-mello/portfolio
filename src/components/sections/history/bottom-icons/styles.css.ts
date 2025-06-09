import { styled } from "styled-vanilla-extract/qwik"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* background-color: beige; */
    height: 100vh;
    width: 100vw;
    justify-content: center;
    gap: 2rem;
    padding: 1rem 2rem 2rem 2rem;
`

export const Line = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    gap: 3rem;

    &.classe-foda {
        /* background-color: red; */
        padding: 0 62px;
    }
`
