import { style } from "@vanilla-extract/css"
import { styled } from "styled-vanilla-extract/qwik"
import { Colors } from "~/styles"

export const MainSection = styled.section`
    display: flex;
    flex-direction: column;
    width: max-content;
`

export const TopGuide = styled.div`
    display: flex;
    background-color: ${Colors.Fawn};
    padding: 24px 100px 42px 200px;
    margin-right: 30rem;
    width: fit-content;
    gap: 300px;
`

export const YearSection = styled.div`
    display: flex;
    flex-direction: column;
    min-height: unset;
    min-width: max-content;

    border: 2px solid blue;
`

export const ImpactText = styled.span`
    font-family: "Engravers MT";
    font-size: 4rem;
    color: ${Colors.Toast22};
    transform: skewX(-33deg);
    width: fit-content;
    align-self: center;
    padding-right: 50%;
    white-space: nowrap;
`

export const YearText = styled.span`
    font-family: "Grechen Fuemen";
    font-size: 2.5rem;
    /* align-self: center; */
    padding-left: 5.5rem;
    justify-self: flex-end;
`

export const descriptionItemClass = style({
    // display: "flex",
    maxWidth: "30rem",
    // width: "100%",
    // paddingLeft: "40rem",
    justifySelf: "flex-end"
})
