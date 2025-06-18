import { styled } from "styled-vanilla-extract/qwik"
import { Colors } from "~/styles"

export const Section = styled.section`
    width: 100%;
    margin: 120px 0;
    padding: 0 48px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Wrapper = styled.div`
    gap: 100px;

    display: flex;
    flex-direction: column;
`

export const GSAPCard = styled.div`
    padding: 40px 50px 80px 70px;
    border-radius: 56px;
    text-shadow: -3px 2px 4px ${Colors.Onyx};
    box-shadow: -11px 8px 10px #0000001a;
    color: ${Colors.Cloud51};
    font-size: 2rem;
    background-color: ${Colors.Fawn};
    transform: skewX(37deg) skewY(-2deg);
    min-width: 940px;

    display: flex;
    position: relative;
    flex-direction: column;
`

export const GSAPText = styled.p`
    padding-right: 160px;
    letter-spacing: 0.05ch;
    white-space: nowrap;
`

export const GSAPAnchor = styled.a`
    font-size: 3rem;
    margin: 12px 0;
    letter-spacing: 0.05ch;
    appearance: none;
    width: fit-content;
    color: ${Colors.Cloud51};
    text-decoration: unset;
    transition: 100ms ease-in-out;
    outline: none;

    &:hover, &:focus {
        color: ${Colors.Cloud};
        transform: skewX(-37deg);
    }
`
