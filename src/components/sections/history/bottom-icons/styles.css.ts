import { styled } from "styled-vanilla-extract/qwik"

export const Wrapper = styled.div`
    padding: 1rem 2rem; // 16px 24px
    gap: 1rem;          // 16px
    height: 100%;
    width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    overflow: hidden;
`

export const Line = styled.div`
    padding-bottom: 1.5rem; // 24px
    gap: 1.5rem;            // 24px
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    &.small-line {
        padding: 0 5%;
        padding-bottom: 1.5rem; // 24px
    }
`
