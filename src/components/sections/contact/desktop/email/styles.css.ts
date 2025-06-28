import { styled } from "styled-vanilla-extract/qwik"
import { Colors } from "~/styles"

export const Wrapper = styled.div`
    gap: 2rem; // 32px

    display: flex;
    align-items: center;
`

export const CopyButtonWrapper = styled.div`
    position: relative;
`

export const CopyTextTip = styled.p`
    font-size: 1.2rem;  // 19.2px
    top: -1.875rem;     // -30px
    left: -3.75rem;     // 60px
    width: 6.25rem;     // 100px
    transform: rotate(-25deg);

    font-family: "Cascadia Code";
    position: absolute;
    text-align: center;
    visibility: hidden;
    pointer-events: none;
    user-select: none;
`

export const CopyButton = styled.button`
    border: 0.25rem solid ${Colors.Cloud};  // 4px
    height: 1.875rem;                       // 30px
    aspect-ratio: 25/27;

    // 5px -3px 8px
    filter: drop-shadow(0.3125rem -0.1875rem 0.5rem rgba(0, 0, 0, 0.2));

    position: relative;
    outline: none;
    width: auto;
    transition: 160ms ease-in-out;

    &::after {
        content: "";
        transition: 160ms ease-in-out;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 20%;
        left: 30%;
        border: 0.25rem solid ${Colors.Cloud}; // 4px

        // 5px -3px 8px
        filter: drop-shadow(0.3125rem -0.1875rem 0.5rem rgba(0, 0, 0, 0.2));
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
    font-size: 2.5rem; // 40px

    // 5px -3px 8px
    filter: drop-shadow(0.3125rem -0.1875rem 0.5rem rgba(0, 0, 0, 0.2));
`
