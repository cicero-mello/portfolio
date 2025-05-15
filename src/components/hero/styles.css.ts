import { styled } from "styled-vanilla-extract/qwik"

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 2rem 1.75rem; // 32px 28px
    position: relative;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 2rem;
`

export const Image = styled.img`
    max-width: 15rem;
    width: 100%;
    border-radius: 50%;

    // 0 4px 4px
    filter: drop-shadow(
        0 0.25rem 0.25rem rgba(0, 0, 0, 0.25)
    );
`

export const Text = styled.p`
    font-size: 2.5rem;
    margin-top: -2.4rem;
    margin-right: -7rem;
`
