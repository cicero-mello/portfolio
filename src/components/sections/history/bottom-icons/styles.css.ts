import { styled } from "styled-vanilla-extract/qwik"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* background-color: beige; */
    height: 60vh;
    width: 100vw;
    justify-content: center;
    gap: 5%;
    padding: 1rem 2rem 2rem 2rem;

    background-color: blue;
`

export const Line = styled.div`
    display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%; /* ou qualquer altura */
  background: #eee;
  overflow: hidden;
  padding: 0 0 24px 0;


    &.classe-foda {
        /* background-color: red; */
        /* padding: 0 62px; */
    }
`
