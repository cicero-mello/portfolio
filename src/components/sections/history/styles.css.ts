import { style } from "@vanilla-extract/css"
import { styled } from "styled-vanilla-extract/qwik"
import { Colors } from "~/styles"

export const MainSection = styled.section`
    display: flex;
    flex-direction: column;
    width: max-content;

    margin-bottom: 9000px;
`

export const TopGuide = styled.div`
    display: flex;
    background-color: ${Colors.Fawn};
    width: fit-content;

    gap: 37.5rem;               // 600px
    border-radius: 0 2rem 2rem 0;        // 32px
    border-radius: 2rem;
    // 24px 100px 38px 200px
    padding: 1.5rem 6.25rem 2.375rem 12.5rem;
    padding-left: 0;
    /* padding-left: 600px; */
    margin-left: calc(100vw + 5rem);
`

export const YearSection = styled.section`
    display: flex;
    flex-direction: column;
    min-height: unset;
    /* min-width: max-content; */
    gap: 1rem;                  // 16px

    /* background-color: red; */

    transition: 100ms linear;

    opacity: 0.2;
`

export const ImpactText = styled.span`
    font-family: "Engravers MT";
    font-size: 4rem;            // 64px
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
    font-family: "Grechen Fuemen";
    font-size: 3.1rem;      // 49.6px
    margin-left: 5.5rem;    // 88px
    justify-self: flex-end;
    width: fit-content;
    position: relative;
    display: flex;

    &.year-text-1::after,
    &.year-text-2::after,
    &.year-text-3::after {
        content: "";
        position: absolute;
        height: 0.1875rem;
        width: 58.125rem;
        background-color: ${Colors.Cloud61};
        align-self: center;
        top: calc(50% + 0.0625rem);
        margin-left: 8rem;
        border-radius: 0.625rem;
    }

    &.year-text-1::after{
        min-width: 58.125rem;
        margin-left: 8rem;
    }

    &.year-text-2::after{
        min-width: 57rem;
        margin-left: 9.25rem;
    }

    &.year-text-3::after{
        min-width: 57.1rem;
        margin-left: 9.2rem;
    }
`

export const descriptionItemClass = style({
    maxWidth: "30rem",  // 480px
    justifySelf: "flex-end"
})

export const PlaceHolder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* min-width: 100vw; */
    margin-left: 600px;
    font-size: 10rem;
    font-family: "Engravers MT";
    color: ${Colors.Cloud15};
    /* position: absolute; */
`
