import { style, styled } from "styled-vanilla-extract/qwik"

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    position: relative;
`

export const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    gap: 66px;
    margin-bottom: 40px;

    width: 70vw;
    align-self: center;
    margin-left: 25vw;
    margin-right: 5vw;
    z-index: 10;
`

export const ContactClass = style({
    width: "276px"
})

export const ContactContent = styled.div`
    display: flex;
    width: fit-content;
    gap: 100px;
`

export const MeImageWrapper = styled.div`
    width: 180px;
    height: 180px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: -2px 2px 3px rgba(0, 0, 0, 0.2);
    margin-top: -36px;

    z-index: 10;
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
    gap: 22px;
    margin-top: 32px;
`

export const Anchor = styled.a`
    overflow: hidden;
    height: 86px;
    cursor: pointer;
    outline: none;

    filter: drop-shadow(-2px 2px 3px rgba(0, 0, 0, 0.2));

    &:last-of-type {
        height: 66px;
    }
`

export const SVGClass = style({
    width: "auto",
    height: "100%"
})
