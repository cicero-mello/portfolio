import { styled } from "styled-vanilla-extract/qwik"
import { Colors } from "~/styles"

export const Section = styled.section`
    width: 100%;
    margin: 6.25rem 0;                  // 100px
    padding: 0 3rem;                    // 48px
    min-height: min(100svh, 67.5rem);   // 1080px

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Wrapper = styled.div`
    gap:  6.25rem;  // 100px
    /* width: 100%; */
    /* align-items: center; */

    display: flex;
    flex-direction: column;

    @media screen and (max-width: 680px){
       gap: 5.5rem; // 88px
    }
`

export const GSAPCard = styled.div`
    font-size: 2rem;                // 32px
    border-radius: 3.5rem;          // 56px
    width: min(80.3cqw, 58.75rem);  // 940px
    padding: 2.5rem 3.125rem 5rem 4.375rem;                     // 40px 50px 80px 70px
    box-shadow: -0.6875rem 0.5rem 0.625rem #0000001a;         // -11px 8px 10px
    text-shadow: -0.1875rem 0.125rem 0.25rem ${Colors.Onyx};    // -3px 2px 4px
    transform: skewX(37deg) skewY(-2deg);

    display: flex;
    position: relative;
    flex-direction: column;
    color: ${Colors.Cloud51};
    background-color: ${Colors.Fawn};

    @media screen and (max-width: 66.25rem){    // 1060px
        font-size: 1.6rem;                      // 25.6px
        padding: 1.625rem 0 4rem 3.25rem;       // 26px 0 64px 52px
        border-radius: 2.375rem;                // 38px
    }
    @media screen and (max-width: 53.125rem){   // 850px
        font-size: 1.3rem;                      // 20.8px
        padding: 1.375rem 0 3.625rem 3rem;      // 22px 0 58px 48px
        border-radius: 2rem;                    // 32px
    }
    @media screen and (max-width: 42.5rem){     // 680px
        font-size: 1rem;                        // 16px
        padding: 1.125rem 0 3.125rem 2.375rem;  // 18px 0 50px 38px
        border-radius: 1.5rem;                  // 24px
    }
`

export const GSAPText = styled.p`
    letter-spacing: 0.05ch;
    white-space: nowrap;
`

export const GSAPAnchor = styled.a`
    font-size: 3rem;        // 48px
    margin: 0.75rem 0;      // 12px
    letter-spacing: 0.05ch;

    appearance: none;
    width: fit-content;
    color: ${Colors.Cloud51};
    text-decoration: unset;
    outline: none;
    transition:
        color 100ms ease-in-out,
        transform 100ms ease-in-out
    ;

    &:hover, &:focus {
        color: ${Colors.Cloud};
        transform: skewX(-37deg);
    }

    @media screen and (max-width: 66.25rem){    // 1060px
        margin: 0.375rem 0;                     // 6px 0
        font-size: 2.5rem;                      // 40px
    }
    @media screen and (max-width: 53.125rem){   // 850px
        margin: 0.25rem 0;                      // 4px 0
        font-size: 2rem;                        // 32px
    }
    @media screen and (max-width: 42.5rem){     // 680px
        font-size: 1.5rem;                      // 24px
    }
`
