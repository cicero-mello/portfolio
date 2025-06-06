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
    margin-left: max(150vw, 150rem);

    gap: 37.5rem;               // 600px
    border-radius: 2rem;        // 32px

    // 24px 100px 38px 200px
    padding: 1.5rem 6.25rem 2.375rem 12.5rem;
`

export const YearSection = styled.div`
    display: flex;
    flex-direction: column;
    min-height: unset;
    min-width: max-content;
    gap: 1rem;                  // 16px
`

export const ImpactText = styled.span`
    font-family: "Engravers MT";
    font-size: 4rem;            // 64px
    color: ${Colors.Toast22};
    transform: skewX(-33deg);
    width: fit-content;
    align-self: center;
    padding-right: 50%;
    white-space: nowrap;
`

export const YearText = styled.span`
    font-family: "Grechen Fuemen";
    font-size: 3.1rem;      // 49.6px
    margin-left: 5.5rem;    // 88px
    justify-self: flex-end;
    width: fit-content;
    position: relative;

    &.year-text-1::after,
    &.year-text-2::after,
    &.year-text-3::after {
        content: "";
        position: absolute;
        height: 0.1875rem;                  // 3px
        width: 58.125rem;                   // 930px
        background-color: ${Colors.Cloud61};
        align-self: center;
        top: calc(50% + 0.0625rem);         // 50% + 1px
        margin-left: 1rem;                  // 16px
        border-radius: 0.625rem;            // 10px
    }
`

export const descriptionItemClass = style({
    maxWidth: "30rem",  // 480px
    justifySelf: "flex-end"
})
