import { style } from "@vanilla-extract/css"
import { styled } from "styled-vanilla-extract/qwik"
import { Colors } from "~/styles"

export const Section = styled.section`
    padding-bottom: 1.5rem;     // 24px
    gap: 1.75rem;               // 28px

    display: flex;
    min-height: unset;
    width: fit-content;
`

export const LeftWrapper = styled.div`
    perspective: 900px;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const EmphasisClass = style({
    backgroundColor: "red"
})

export const Anchor = styled.a`
    font-size: 2.8rem;          // 44.8px
    padding-bottom: 0.75rem;    // 12px

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
        bottom: 0.625rem;       // 16px
        height: 0.1875rem;      // 3px
        width: 100%;

        position: absolute;
        background-color: ${Colors.Toast};
        transition: background-color 160ms ease-in-out;
    }

    &:hover::after, &:focus::after, &.emphasis::after {
        background-color: ${Colors.Fawn};
    }

    @media screen and (max-width: 72.5rem){ // 1160px
        font-size: 2.5rem;                  // 40px
        &::after {
            height: 0.125rem;               // 2px
            bottom: 0.5rem;                 // 8px
        }
    }
`

export const ImageWrapper = styled.div`
    border-radius: 1.125rem;    // 18px
    max-width: 31.25rem;        // 500px
    margin-top: 1rem;           // 16px
    aspect-ratio: 1920 / 1440;
    width: 100%;

    overflow: hidden;
    user-select: none;
    cursor: pointer;
    border: 0px solid ${Colors.Toast};
    transition:
        border 100ms ease-in-out,
        transform 100ms linear
    ;

    &:hover, &.emphasis {
        border: 0.1875rem solid ${Colors.Toast}; // 3px
    }

    @media screen and (max-width: 72.5rem){         // 1160px
       max-width: 25rem;                            // 400px
       &:hover, &.emphasis {
            border: 0.125rem solid ${Colors.Toast}; // 2px
        }
    }

    @media screen and (max-width: 56.25rem){    // 900px
       max-width: 18.75rem;                     // 300px
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
    margin-top: 5.25rem;    // 84px
    max-width: 21.75rem;    // 348px
    gap: 0.125rem;          // 2px

    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 72.5rem){ // 1160px
       max-width: 18.75rem;                 // 300px
    }
`

export const IconClass = style({
    width: "3rem",      // 48px
    maxWidth: "3rem",   // 48px
    "@media": {
        "screen and (max-width: 72.5rem)": {    // 1160px
            width: "2.5rem",                    // 40px
            maxWidth: "2.5rem"                  // 40px
        }
    }
})

export const TextList = styled.ul`
    margin-top: 1.5rem; // 24px
    font-size: 1.6rem;  // 25.6px
    gap: 0.75rem;       // 12px

    display: flex;
    flex-direction: column;
    list-style: none;
    color: ${Colors.Cloud51};
    font-weight: normal;
    font-family: "Cascadia Code";

    @media screen and (max-width: 72.5rem){ // 1160px
       font-size: 1.2rem;                   // 19.2px
       margin-top: 1.125rem;                // 18px
       gap: 0.375rem;                       // 6px
    }
`

export const TextItem = styled.li`
    &::before {
        content: "- "
    }
`
