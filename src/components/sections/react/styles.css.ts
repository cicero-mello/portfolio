import { styled } from "styled-vanilla-extract/qwik"
import { Colors } from "~/styles"

export const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 100%;
    min-height: 100svh;
    gap: 3rem;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

export const MainText = styled.p`
    display: flex;
    flex-direction: column;
    font-size: 2.5rem;
    margin-left: 1rem;
`

export const DescriptionText = styled.p`
    display: flex;
    flex-direction: column;
    color: ${Colors.Cloud15};
    transform: skewX(-26deg);
    font-family: "Cascadia Code";
    font-size: 1.2rem;
    line-height: 140%;
`
