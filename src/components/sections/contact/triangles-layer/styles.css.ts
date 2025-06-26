import { style } from "@vanilla-extract/css"
import { styled } from "styled-vanilla-extract/qwik"

export const Screen = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    position: absolute;
    pointer-events: none;
    overflow: hidden;
`

export const ClassT1 = style({
    position: "absolute",
    top: "-85vh",
    left: "calc(62% - 100vh/2)",
    transformOrigin: "center",
    transform: "rotate(55deg)",
    height: "100vh",
    filter: "drop-shadow(5px -3px 8px rgba(0, 0, 0, 0.1))"
})
export const ClassT1Shadow = style({
    position: "absolute",
    top: "-85vh",
    left: "calc(62% - 100vh/2)",
    transformOrigin: "center",
    transform: "rotate(55deg) scale(0.85)",
    height: "100vh",
    filter: "drop-shadow(5px -3px 8px rgba(0, 0, 0, 0.2))"
})

export const ClassT2 = style({
    position: "absolute",
    top: "-44vh",
    left: "calc((62% - 100vh/2) + 66vh)",
    transformOrigin: "center",
    transform: "rotate(-5deg)",
    height: "100vh",
    filter: "drop-shadow(5px 4px 8px rgba(0, 0, 0, 0.1))"
})
export const ClassT2Shadow = style({
    position: "absolute",
    top: "-44vh",
    left: "calc((62% - 100vh/2) + 66vh)",
    transformOrigin: "center",
    transform: "rotate(-5deg) scale(0.85)",
    height: "100vh",
    filter: "drop-shadow(5px 4px 8px rgba(0, 0, 0, 0.2))"
})

export const ClassT3 = style({
    position: "absolute",
    bottom: "-58vh",
    left: "-50vh",
    transformOrigin: "center",
    height: "100vh",
    filter: "drop-shadow(5px 0px 8px rgba(0, 0, 0, 0.1))"
})
export const ClassT3Shadow = style({
    position: "absolute",
    bottom: "-58vh",
    left: "-50vh",
    transform: "scale(0.85)",
    transformOrigin: "center",
    height: "100vh",
    filter: "drop-shadow(5px 0px 8px rgba(0, 0, 0, 0.2))"
})

export const ClassT4 = style({
    position: "absolute",
    bottom: "10vh",
    left: "-80vh",
    transformOrigin: "center",
    transform: "rotate(60deg)",
    height: "100vh",
    filter: "drop-shadow(5px 0px 8px rgba(0, 0, 0, 0.1))"
})

export const ClassT4Shadow = style({
    position: "absolute",
    bottom: "10vh",
    left: "-80vh",
    transformOrigin: "center",
    transform: "rotate(60deg) scale(0.85)",
    height: "100vh",
    filter: "drop-shadow(5px 0px 8px rgba(0, 0, 0, 0.2))"
})
