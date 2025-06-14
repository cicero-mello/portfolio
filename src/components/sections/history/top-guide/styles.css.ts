import { styled } from "styled-vanilla-extract/qwik"
import { Breakpoints, Colors } from "~/styles"

export const Wrapper = styled.div`
    gap: 37.5rem;                               // 600px
    border-radius: 2rem;                        // 32px
    margin-left: calc(100vw + 5rem);            // 80px
    padding: 1.5rem 6.25rem 2.375rem 0;         // 24px 100px 38px 0

    display: flex;
    background-color: ${Colors.Fawn};
    width: fit-content;

    @media screen and (max-width: 50rem) {  // 800px
        padding: 1.1rem 6.25rem 1.6rem 0;   // 17.6px 100px 25.6px 0
        gap: 20rem;                         // 320px
    }
    @media screen and (${Breakpoints.SmallHeight}) {  // 608px
        padding: 1.1rem 6.25rem 1.6rem 0;   // 17.6px 100px 25.6px 0
        gap: 20rem;                         // 320px
    }
`

export const YearSection = styled.section`
    gap: 1rem;  // 16px

    display: flex;
    flex-direction: column;
    min-height: unset;
    transition: 100ms linear;
    will-change: opacity;
    opacity: 0.2;

    @media screen and (max-width: 50rem) {  // 800px
        gap: 0.7rem;    // 11.2px
    }
    @media screen and (${Breakpoints.SmallHeight}) {  // 608px
        gap: 0.7rem;    // 11.2px
    }
`

export const ImpactText = styled.span`
    font-size: 4rem;    // 64px

    font-family: "Engravers MT";
    color: ${Colors.Toast22};
    transform: skewX(-33deg);
    width: fit-content;
    align-self: center;
    white-space: nowrap;

    &.impact-text-1 {
        padding-right: 45%;
    }
    &.impact-text-2 {
        padding-right: 42%;
    }
    &.impact-text-3 {
        padding-right: 33%;
    }
    &.impact-text-4 {
        padding-right: 10%;
    }

    @media screen and (max-width: 50rem) {  // 800px
        font-size: 3rem;        // 48px
        &.impact-text-1 {
            padding-right: 32%;
        }
        &.impact-text-2 {
            padding-right: 28%;
        }
        &.impact-text-3 {
            padding-right: 22%;
        }
        &.impact-text-4 {
            padding-right: 0;
            padding-left: 2%;
        }
    }
    @media screen and (${Breakpoints.SmallHeight}) {  // 608px
        font-size: 3rem;        // 48px
        &.impact-text-1 {
            padding-right: 32%;
        }
        &.impact-text-2 {
            padding-right: 28%;
        }
        &.impact-text-3 {
            padding-right: 22%;
        }
        &.impact-text-4 {
            padding-right: 0;
            padding-left: 2%;
        }
    }
`

export const YearText = styled.span`
    font-size: 3.1rem;      // 49.6px
    margin-left: 5.5rem;    // 88px

    font-family: "Grechen Fuemen";
    justify-self: flex-end;
    width: fit-content;
    position: relative;
    display: flex;

    &.year-text-1::after,
    &.year-text-2::after,
    &.year-text-3::after {
        margin-left: 8rem;          // 128px
        height: 0.1875rem;          // 3px
        top: calc(50% + 0.0625rem); // 50% + 1px
        border-radius: 0.625rem;    // 1px

        content: "";
        position: absolute;
        background-color: ${Colors.Cloud61};
        align-self: center;
    }
    &.year-text-1::after {
        width: 58.125rem;   // 930px
        margin-left: 8rem;  // 129px
    }
    &.year-text-2::after {
        width: 56.6rem;         // 905.6px
        margin-left: 9.5rem;    // 152px
    }
    &.year-text-3::after {
        width: 57.1rem;         // 913.6px
        margin-left: 9.2rem;    // 147.2px
    }

    @media screen and (max-width: 50rem) {  // 800px
        font-size: 2.6rem;          // 41.6px

        &.year-text-1::after,
        &.year-text-2::after,
        &.year-text-3::after {
            height: 0.125rem;       // 2px
        }

        &.year-text-1::after {
            width: 34.5rem;         // 552px
            margin-left: 7.5rem;    // 120px
        }
        &.year-text-2::after {
            width: 33.6rem;         // 537.6px
            margin-left: 8.6rem;    // 137.6px
        }
        &.year-text-3::after {
            width: 33.6rem;         // 537.6px
            margin-left: 8.5rem;    // 136px
        }
    }
    @media screen and (${Breakpoints.SmallHeight}) {  // 608px
        font-size: 2.6rem;          // 41.6px

        &.year-text-1::after,
        &.year-text-2::after,
        &.year-text-3::after {
            height: 0.125rem;       // 2px
        }

        &.year-text-1::after {
            width: 34.5rem;         // 552px
            margin-left: 7.5rem;    // 120px
        }
        &.year-text-2::after {
            width: 33.6rem;         // 537.6px
            margin-left: 8.6rem;    // 137.6px
        }
        &.year-text-3::after {
            width: 33.6rem;         // 537.6px
            margin-left: 8.5rem;    // 136px
        }
    }
`

export const PlaceHolder = styled.div`
    margin-left: 37.5rem;           // 600px
    font-size: 10rem;               // 160px

    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Engravers MT";
    color: ${Colors.Cloud15};

    @media screen and (max-width: 50rem) {  // 800px
        font-size: 9rem;            // 144px
        margin-left: 24rem;         // 384px
        padding-bottom: 0.625rem;   // 16px
    }
    @media screen and (${Breakpoints.SmallHeight}) {  // 608px
        font-size: 9rem;            // 144px
        margin-left: 24rem;         // 384px
        padding-bottom: 0.625rem;   // 16px
    }
`

export const FinalMessageWrapper = styled.div`
    width: 31.25rem;    // 500px
    top: 0;
    left: calc(100vw - 31.25rem);
    z-index: -1;

    display: flex;
    position: absolute;
    visibility: hidden;
    font-family: "Henny Penny";
    justify-content: center;
    align-items: center;
    color: ${Colors.Fawn};
`

export const FinalMessage = styled.p`
    font-size: 3rem;        // 48px
    width: 87%;
    padding-top: 12%;
    padding-right: 3%;
    transform: rotate(20deg);

    text-align: center;

    @media screen and (max-width: 50rem) {  // 800px
        font-size: 2.5rem;  // 40px
    }
    @media screen and (${Breakpoints.SmallHeight}) {  // 608px
        font-size: 2.5rem;  // 40px
    }
`
