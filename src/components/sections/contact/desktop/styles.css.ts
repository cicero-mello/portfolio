import { style, styled } from "styled-vanilla-extract/qwik"
import { Colors } from "~/styles"

export const SectionWrapper = styled.div`
    height: 1px;
`

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100vw;

    bottom: 0;
    left: 0;

    outline: 1.875rem solid ${Colors.Lavender}; // 30px

    background-color: ${Colors.Onyx};

    transition: transform 1000ms ease;
    transform: rotate(25deg) translate(140vw, 120vh);

    &.visible {
        transform: rotate(0) translate(0, 0);
    }

    @media screen and (max-width: 73.125rem){ // 1170px
        justify-content: space-evenly;
    }
`

export const ContactWrapper = styled.div`
    margin-bottom: 2.5rem;  // 40px
    gap: 4.125rem;          // 66px
    width: 70vw;
    align-self: center;
    margin-left: 25vw;
    margin-right: 5vw;
    z-index: 1;
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 73.125rem){   // 1170px
        padding: 1.5rem;                        // 24px
        width: 100vw;
        margin-left: 0;
        margin-right: 0;

        flex: unset;
        height: fit-content;
    }

    @media screen and (max-width: 55rem){   // 880px
        gap: 3.375rem;                      // 54px
        transform: scale(0.8);
    }

    @media screen and (max-width: 41.25rem){ // 660px
        transform: scale(0.7);
    }
`

export const ContactClass = style({
    width: "17.25rem"   // 276px
})

export const ContactContent = styled.div`
    gap: 6.25rem; // 100px

    display: flex;
    width: fit-content;

    @media screen and (max-width: 55rem){   // 880px
        gap: 3.125rem;                      // 50px
    }
`

export const MeImageWrapper = styled.div`
    width: 11.25rem;        // 180px
    height: 11.25rem;       // 180px
    margin-top: -2.25rem;   // -36px

    // -2px 2px 3px
    box-shadow: -0.125rem 0.125rem 0.1875rem rgba(0, 0, 0, 0.2);

    z-index: 1;
    border-radius: 50%;
    overflow: hidden;
`

export const ImageClass = style({
    width: "100%",
    height: "100%",
    transform: "rotate(-12deg)"
})

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const AnchorsWrapper = styled.div`
    margin-top: 2rem;   // 32px
    gap: 1.375rem;      // 22px

    display: flex;
    align-items: flex-end;
`

export const Anchor = styled.a`
    height: 5.375rem; // 86px

    // -2px 2px 3px
    filter: drop-shadow(-0.125rem 0.125rem 0.1875rem rgba(0, 0, 0, 0.2));

    cursor: pointer;
    overflow: hidden;
    outline: none;

    &:last-of-type {
        height: 4.125rem; // 66px
    }

    transition: 110ms ease-in-out;
    &:hover, &:focus {
        transform: rotate(-6deg);
    }

    &:hover:last-of-type, &:focus:last-of-type {
        transform: rotate(6deg);
    }
`

export const SVGClass = style({
    width: "auto",
    height: "100%"
})
