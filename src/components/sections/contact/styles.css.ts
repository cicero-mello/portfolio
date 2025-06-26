import { style, styled } from "styled-vanilla-extract/qwik"

export const Section = styled.section`
    display: flex;
    flex-direction: column;
`

export const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-bottom: 5%;
    min-width: 60vw;
    margin-right: 80px;
    align-items: center;
    gap: 80px;
    justify-content: center;
    align-self: flex-end;
`

export const ContactClass = style({
    width: "220px"
})

export const ContactContent = styled.div`
    display: flex;
    width: fit-content;
    gap: 100px;
`

export const MeImageWrapper = styled.div`
    width: 136px;
    height: 136px;
    border-radius: 50%;
    overflow: hidden;
    filter: drop-shadow(-2px 2px 3px rgba(0, 0, 0, 0.23));
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
    display: flex;
    align-items: flex-end;
    gap: 16px;
    margin-top: 24px;
`

export const Anchor = styled.a`
    overflow: hidden;
    height: 80px;
    cursor: pointer;
    outline: none;
    box-shadow: -2px 2px 3px rgba(0, 0, 0, 0.23);

    filter: drop-shadow(-2px 2px 3px rgba(0, 0, 0, 0.23));

    &:last-of-type {
        height: 60px;
    }
`

export const SVGClass = style({
    width: "auto",
    height: "100%"
})
