import { styled } from "styled-vanilla-extract/qwik"
import { Colors } from "~/styles"

export const Wrapper = styled.div`
    display: flex;
    height: 80vh;
    overflow: hidden;
    gap: 18px;
    min-width: fit-content;
`

export const ScrollWrapper = styled.div`
    min-width: 8px;
    height: 100%;
    overflow: hidden;
    background-color: ${Colors.Fawn};
    margin-left: 24px;
    border-radius: 20px;
    position: relative;
`

export const ScrollItem = styled.div`
    width: 100%;
    height: 10%;

    background-color: ${Colors.Toast};
    position: absolute;

    border-radius: 20px;

    will-change: top;
    top: 0;
`

export const MarkersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`

export const Marker = styled.div`
    height: 4px;
    width: 24px;
    border-radius: 8px;
    background-color: ${Colors.Fawn};

    &:last-of-type {
        visibility: hidden;
    }

    &.surpassed {
        background-color: ${Colors.Toast};
    }
`
