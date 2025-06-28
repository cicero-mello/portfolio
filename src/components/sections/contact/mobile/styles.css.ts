import { style, styled } from "styled-vanilla-extract/qwik"
import { Colors } from "~/styles"

export const Section = styled.section`
    gap: min(3.5rem, 15cqw);    // 56px
    padding: 1.5rem;            // 24px

    display: flex;
    flex-direction: column;
    background-color: ${Colors.Lavender13};
    align-items: center;
    justify-content: center;
`

export const ContactClass = style({
    width: "min(70%, 17.25rem)"
})

export const BottomWrapper = styled.div`
    max-width: 25.625rem;   // 410px
    gap: 0.75rem;           // 12px

    display: flex;
    align-items: flex-end;
    justify-content: center;
`

export const ImageClass = style({
    width: "35%",
    height: "auto",
    marginBottom: "-3%",
    borderRadius: "50%",
    marginRight: "5%",
    transform: "rotate(-12deg)",
    // 2px 2px 3px
    boxShadow: "-0.125rem 0.125rem 0.1875rem rgba(0, 0, 0, 0.2)"
})

export const Anchor = styled.a`
    width: 24%;

    display: flex;
    overflow: hidden;
    outline: none;

    &:last-of-type {
        width: 18%;
    }
`

export const SVGClass = style({
    width: "100%"
})
