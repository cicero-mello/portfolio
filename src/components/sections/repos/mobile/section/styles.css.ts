import { style } from "@vanilla-extract/css"
import { styled } from "styled-vanilla-extract/qwik"
import { Colors } from "~/styles"

export const Section = styled.section`
    max-width: 40rem;   // 640px
    padding: 1.5rem;    // 24px
    gap: 1.125rem;      // 18px

    display: flex;
    flex-direction: column;
    min-height: fit-content;
    align-items: center;

    @media screen and (max-width: 34.375rem){   // 550px
        gap: 0.75rem;                           // 12px
    }
`

export const Anchor = styled.a`
    padding-bottom: 0.75rem;    // 12px
    font-size: 2rem;            // 32px

    display: flex;
    position: relative;
    justify-content: center;
    color: ${Colors.Toast};
    transition: color 100ms ease-in-out;
    width: fit-content;
    text-decoration: none;
    font-family: "Grechen Fuemen";
    outline: none;

    &:hover, &:focus, &.emphasis {
        color: ${Colors.Cloud};
    }

    &::after {
        content: "";
        border-radius: 0.25rem; // 4px
        bottom: 0.625rem;       // 10px
        height: 0.125rem;       //2px
        width: 100%;

        position: absolute;
        background-color: ${Colors.Toast};
        transition: background-color 160ms ease-in-out;
    }

    &:hover::after, &:focus::after, &.emphasis::after {
        background-color: ${Colors.Fawn};
    }
`

export const MiddleWrapper = styled.div`
    gap: 1.5rem;    // 24px

    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 34.375rem){   // 550px
        flex-direction: column;
        align-items: start;
    }
`

export const ImageWrapper = styled.div`
    border-radius: 0.75rem;     // 12px
    max-width: 50%;
    aspect-ratio: 1920 / 1440;

    cursor: pointer;
    overflow: hidden;

    @media screen and (max-width: 34.375rem){   // 550px
        max-width: min(25rem, 100%);    // 400px
        align-self: center;
    }
`

export const TextListWrapper = styled.div`
    gap: 0.75rem;   // 12px

    display: flex;
    justify-content: space-evenly;

    @media screen and (max-width: 34.375rem){   // 550px
        width: 100%;
    }
`

export const TextList = styled.ul`
    font-size: 1rem;    // 16px
    gap: 0.75rem;       // 12px

    list-style: none;
    color: ${Colors.Cloud51};
    font-family: "Cascadia Code";
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 34.375rem){   // 550px
        align-self: center;
    }
`

export const TextItem = styled.li`
    white-space: nowrap;
    &::before {
        content: "- "
    }
`

export const IconsWrapper = styled.div`
    max-width: 27.75rem;    // 444px
    gap: 0.5rem 0.125rem;   // 8px 2px
    padding: 0 3rem;        // 0 48px

    display: flex;
    flex-wrap: wrap;
`

export const VerticalIconsWrapper = styled.div`
    max-width: 6.25rem; // 100px
    gap: 0.5rem 0.125rem;   // 8px 2px

    display: flex;
    flex-wrap: wrap;
`

export const IconClass = style({
    width: "3rem",      // 48px
    maxWidth: "3rem",   // 48px
    height: "3rem",     // 48px
    maxHeight: "3rem"   // 48px
})

export const ImageClass = style({
    width: "100%",
    height: "auto",
    objectFit: "cover",
})
