import { style } from "@vanilla-extract/css"
import { styled } from "styled-vanilla-extract/qwik"
import { Breakpoints, Colors } from "~/styles"

export const Section = styled.section`
    max-width: 31.25rem;        // 500px
    border-radius: 1rem;        // 16px
    padding: 0.75rem 0.875rem;  // 12px 14px

    display: flex;
    height: fit-content;
    min-height: unset;
    align-items: center;
    flex-direction: column;
    background-color: ${Colors.Fawn};
    overflow: hidden;
`

export const IconsWrapper = styled.div`
    border-radius: 0.625rem;    // 10px
    padding: 1.5rem;            // 24px
    gap: 1.5rem;                // 24px
    width: 100%;

    height: fit-content;
    background-color: ${Colors.Onyx};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const Title = styled.h3`
    font-size: 3rem;    // 48px
    font-family: "Grechen Fuemen";

    @media screen and (${Breakpoints.Mobile}){
        font-size: 2.4rem;  // 38.4px
    }
`

export const DescriptionWrapper = styled.div`
    gap: 1.125rem;          // 18px
    padding-top: 0.75rem;   // 12px
    padding-bottom: 1.5rem; // 24px
    margin: 0 6%;

    display: flex;
`

export const DescriptionTextWrapper = styled.div`
    gap: 0.75rem;  // 12px

    display: flex;
    flex-direction: column;
    width: fit-content;
    color: ${Colors.Cloud51};
`

export const DescriptionText = styled.p`
    font-size: 1rem;    // 16px
    text-align: end;
    height: 100%;
`

export const IconClass = style({
    maxWidth: "3.75rem",    // 60px
    minWidth: "3.75rem",     // 60px
    height: "unset !important"
})
