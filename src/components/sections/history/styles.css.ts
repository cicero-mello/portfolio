import { style } from "@vanilla-extract/css"
import { styled } from "styled-vanilla-extract/qwik"
import { Colors } from "~/styles"

export const Section = styled.section`
    min-width: 200vw;
`

export const TopGuide = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${Colors.Fawn};
    width: 350vw;
    height: 50vh;
    border-radius: 0 0 4rem 4rem;
    padding: 42px 100px;
`

export const Impacts = styled.div`
    display: flex;
`

export const Years = styled.div`
    display: flex;
`

export const Descriptions = styled.div`
    display: flex;
`

export const ImpactItem = styled.div`
    display: flex;
    min-width: 100vw;
`

export const YearItem = styled.div`
    display: flex;
    min-width: 100vw;
`

export const descriptionItemClass = style({
    display: "flex",
    minWidth: "100vw"
})
