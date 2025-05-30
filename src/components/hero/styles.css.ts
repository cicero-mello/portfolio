import { styled } from "styled-vanilla-extract/qwik"
import { Breakpoints } from "~/styles"

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 2rem 1.75rem;  // 32px 2px
    position: relative;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 2rem;   // 32px

    @media screen and (max-width: 44rem) {
        padding-bottom: 3rem;   // 48px
    }

    @media screen and (${Breakpoints.Mobile}) {
        padding-bottom: 4rem;   // 64px
    }
`

export const Text = styled.p`
    display: flex;
    flex-direction: column;

    font-size: 2.5rem;      // 40px
    margin-top: -2rem;      // -32px
    margin-right: -6rem;    // -96px
    min-width: 27.25rem;    // 436px

    @media screen and (${Breakpoints.SmallWidth}) {
        font-size: 2rem;        // 32px
        margin: 0;              // 0px
        margin-top: -2.9rem;    // -46.4px
        min-width: 21.2rem;     // 339.2px
    }

    @media screen and (${Breakpoints.Mobile}) {
        font-size: 1.5rem;      // 24px
        min-width: 16rem;       // 256px
        margin-top: -2.2rem;    // -35.2px
    }

    @media screen and (${Breakpoints.SmallHeight}) {
        margin: 0;
        font-size: 1.5rem;      // 24px
        min-width: 16rem;       // 256px
        margin-top: -2.2rem;    // -35.2px
    }
`
