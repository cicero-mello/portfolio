import { styled } from "styled-vanilla-extract/qwik"
import { Colors } from "~/styles"

export const Wrapper = styled.div`
    gap: 1.125rem;  // 18px
    height: 80vh;

    display: flex;
    overflow: hidden;
    min-width: fit-content;

    @media screen and (max-width: 79.375rem){   // 1270px
        gap: 0.75rem;                           // 12px
    }
`

export const ScrollWrapper = styled.div`
    border-radius: 1.25rem; // 20px
    margin-left: 1.5rem;    // 24px
    min-width: 0.5rem;      // 8px
    height: 100%;

    background-color: ${Colors.Fawn};
    overflow: hidden;
    position: relative;

    @media screen and (max-width: 79.375rem){   // 1270px
        min-width: 0.3125rem;                   // 5px
    }
`

export const ScrollItem = styled.div`
    border-radius: 1.25rem;     // 20px
    width: 100%;
    height: 10%;
    top: 0;

    background-color: ${Colors.Toast};
    position: absolute;
    will-change: top;
`

export const MarkersWrapper = styled.div`
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Marker = styled.div`
    height: 0.25rem;        // 4px
    width: 1.5rem;          // 24px
    border-radius: 0.5rem;  // 8px

    background-color: ${Colors.Fawn};
    &:last-of-type {
        visibility: hidden;
    }
    &.surpassed {
        background-color: ${Colors.Toast};
    }

    @media screen and (max-width: 79.375rem){   // 1270px
         height: 0.1875rem; // 3px
    }
`
