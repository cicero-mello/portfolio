import { styled } from "styled-vanilla-extract/qwik"
import { Colors } from "~/styles"

export const Wrapper = styled.div`
    gap: 37.5rem;                               // 600px
    border-radius: 0 2rem 2rem 0;               // 32px
    border-radius: 2rem;                        // 32px
    padding: 1.5rem 6.25rem 2.375rem 12.5rem;   // 24px 100px 38px 200px
    margin-left: calc(100vw + 5rem);            // 80px
    padding-left: 0;

    display: flex;
    background-color: ${Colors.Fawn};
    width: fit-content;
`

export const YearSection = styled.section`
    gap: 1rem;  // 16px

    display: flex;
    flex-direction: column;
    min-height: unset;
    transition: 100ms linear;
    will-change: opacity;
    opacity: 0.2;
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
`

export const PlaceHolder = styled.div`
    margin-left: 37.5rem;           // 600px
    font-size: 10rem;               // 160px

    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Engravers MT";
    color: ${Colors.Cloud15};
`
