import { style } from "@vanilla-extract/css"
import { styled } from "styled-vanilla-extract/qwik"
import { Colors } from "~/styles"

export const Section = styled.section`
    max-width: 500px;
    border-radius: 16px;
    padding: 12px;

    display: flex;
    height: fit-content;
    min-height: unset;
    align-items: center;
    flex-direction: column;
    background-color: ${Colors.Fawn};
`

export const IconsWrapper = styled.div`
    width: 100%;
    padding: 12px;
    height: fit-content;
    border-radius: 10px;

    background-color: ${Colors.Onyx};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

export const Title = styled.h2`
    font-family: "Grechen Fuemen";
    font-size: 2.5rem;
`

export const DescriptionWrapper = styled.div`
    display: flex;
    gap: 18px;
    padding-top: 12px;
    padding-bottom: 24px;
    width: 84%;
`

export const DescriptionTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: fit-content;
    color: ${Colors.Cloud51};
`

export const DescriptionText = styled.p`
    width: fit-content;
`

export const AnchorIcon = styled.a`
    max-width: 60px;
    width: 100%;
    height: auto;
`

export const DescriptionIconClass = style({
    maxWidth: "60px"
})
