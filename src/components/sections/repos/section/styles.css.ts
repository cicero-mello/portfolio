import { style } from "@vanilla-extract/css"
import { styled } from "styled-vanilla-extract/qwik"
import { Colors } from "~/styles"

export const Section = styled.section`
    display: flex;
    min-height: unset;
    /* background-color: red; */
    width: fit-content;
    gap: 24px;
    padding-bottom: 64px;
`

export const LeftWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const EmphasisClass = style({
    backgroundColor: "red"
})

export const Anchor = styled.a`
    display: flex;
    position: relative;
    justify-content: center;
    color: ${Colors.Toast};
    transition: color 100ms ease-in-out;
    width: fit-content;
    font-size: 2.8rem;
    text-decoration: none;
    font-family: "Grechen Fuemen";
    outline: none;
    padding-bottom: 12px;

    &:hover, &:focus, &.emphasis {
        color: ${Colors.Cloud};
    }

    &::after {
        content: "";
        bottom: 10px;
        position: absolute;
        width: 100%;
        height: 3px;
        background-color: ${Colors.Toast};
        border-radius: 0.25rem; // 4px
        transition: background-color 160ms ease-in-out;
    }

    &:hover::after, &:focus::after, &.emphasis::after {
        background-color: ${Colors.Fawn};
    }
`

export const ImageWrapper = styled.div`
    border-radius: 18px;
    overflow: hidden;
    aspect-ratio: 1920 / 1440;
    max-width: 500px;
    width: 100%;
    cursor: pointer;
    user-select: none;

    transition: 100ms ease-in-out;
    border: 0px solid ${Colors.Toast};

    &:hover, &.emphasis {
        border: 3px solid ${Colors.Toast};
    }
`

export const ImageClass = style({
    width: "100%",
    height: "auto",
    objectFit: "cover",
})

export const RightWrapper = styled.div`
`

export const IconsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 84px;
    max-width: 348px;
    gap: 2px;
`

export const IconClass = style({
    width: "48px",
    maxWidth: "48px"
})

export const TextList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 24px;
    list-style: none;
    font-size: 1.6rem;
    color: ${Colors.Cloud51};
    font-weight: normal;
    font-family: "Cascadia Code";
`

export const TextItem = styled.li`
    &::before {
        content: "- "
    }
`
