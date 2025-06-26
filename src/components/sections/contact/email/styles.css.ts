import { styled } from "styled-vanilla-extract/qwik"
import { Colors } from "~/styles"

export const Wrapper = styled.div`
    display: flex;
    gap: 24px;
    align-items: center;
`

export const CopyButtonWrapper = styled.div`
    position: relative;
`

export const CopyTextTip = styled.p`
    position: absolute;
    top: -30px;
    left: -60px;
    font-family: "Cascadia Code";
    transform: rotate(-25deg);
    width: 100px;
    text-align: center;
    visibility: hidden;
    font-size: 1rem;
    pointer-events: none;
    user-select: none;
`

export const CopyButton = styled.button`
    position: relative;
    outline: none;
    aspect-ratio: 25/27;
    height: 24px;
    width: auto;
    border: 3px solid ${Colors.Cloud};
    box-shadow: -2px 2px 3px rgba(0, 0, 0, 0.23);

    transition: 160ms ease-in-out;

    &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        border: 3px solid ${Colors.Cloud};
        box-shadow: -2px 2px 3px rgba(0, 0, 0, 0.23);
        top: 20%;
        left: 30%;
        transition: 160ms ease-in-out;
    }

    &:hover::after, &:focus::after {
        background-color: ${Colors.Cloud};
    }

    &:hover, &:focus {
        background-color: ${Colors.Cloud};
    }
`

export const Text = styled.p`
    font-family: "Grechen Fuemen";
    font-size: 2rem;
    text-shadow: -2px 2px 3px rgba(0, 0, 0, 0.23);
`
