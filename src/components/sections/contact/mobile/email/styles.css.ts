import { styled } from "styled-vanilla-extract/qwik"
import { Colors } from "~/styles"

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`

export const TextTip = styled.p`
    top: max(-1.875rem, -7cqw);     // -30px
    left: max(-1.875rem, -6cqw);    // -30px
    font-size: min(1rem, 3.5cqw);   // 16px
    transform: rotate(-6deg);
    transition: 100ms ease-in-out;

    pointer-events: none;
    user-select: none;
    position: absolute;
`

export const Button = styled.button`
    border: 3px solid ${Colors.Cloud};
    margin-top: calc(min(4.5cqw, 1.3rem)/3*-1); // 20.8px
    height: min(4.5cqw, 1.3rem);                // 20.8px
    aspect-ratio: 25/27;

    // 5px -3px 8px
    filter: drop-shadow(0.3125rem -0.1875rem 0.5rem rgba(0, 0, 0, 0.2));

    position: relative;
    outline: none;
    width: auto;

    &::after {
        content: "";
        position: absolute;

        width: 100%;
        height: 100%;
        top: 20%;
        left: 30%;
        border: 0.1875rem solid ${Colors.Cloud};    // 3px

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
    margin-left: min(4cqw, 1.125rem);   // 18px
    font-size: min(5cqw, 1.4rem);       // 22.4px

    // 5px -3px 8px
    filter: drop-shadow(0.3125rem -0.1875rem 0.5rem rgba(0, 0, 0, 0.2));
`
