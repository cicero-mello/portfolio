import { keyframes, style } from "@vanilla-extract/css"
import { styled } from "styled-vanilla-extract/qwik"

export const Screen = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    position: absolute;
    pointer-events: none;
    overflow: hidden;
`

const movementT1 = keyframes({
    from: {
        transform: "rotate(55deg) translate(0,0)"
    },
    "33%": {
        transform: "rotate(55deg) translate(-10px, 10px)"
    },
    "66%": {
        transform: "rotate(55deg) translate(10px, -10px)"
    },
    to: {
        transform: "rotate(55deg) translate(0px, 0px)"
    }
})

export const ClassT1 = style({
    position: "absolute",
    top: "-85vh",
    left: "calc(62% - 100vh/2)",
    transformOrigin: "center",
    transform: "rotate(55deg)",
    height: "100vh",
    filter: "drop-shadow(5px -3px 8px rgba(0, 0, 0, 0.1))",
    animation: movementT1 + " 3000ms infinite alternate ease-in-out"
})

const movementT1Shadow = keyframes({
    from: {
        transform: "rotate(55deg) scale(0.85) translate(0,0)"
    },
    "33%": {
        transform: "rotate(55deg) scale(0.85) translate(-8px, 8px)"
    },
    "66%": {
        transform: "rotate(55deg) scale(0.85) translate(8px, -8px)"
    },
    to: {
        transform: "rotate(55deg) scale(0.85) translate(0px, 0px)"
    }
})

export const ClassT1Shadow = style({
    position: "absolute",
    top: "-85vh",
    left: "calc(62% - 100vh/2)",
    transformOrigin: "center",
    transform: "rotate(55deg) scale(0.85)",
    height: "100vh",
    filter: "drop-shadow(5px -3px 8px rgba(0, 0, 0, 0.2))",
    animation: movementT1Shadow + " 3000ms infinite alternate ease-in-out",
    animationDelay: "-300ms"
})

const movementT2 = keyframes({
    from: {
        transform: "rotate(-5deg) translate(0,0)"
    },
    "33%": {
        transform: "rotate(-5deg) translate(-10px, 0px)"
    },
    "66%": {
        transform: "rotate(-5deg) translate(0px, 10px)"
    },
    to: {
        transform: "rotate(-5deg) translate(10px, -10px)"
    }
})

export const ClassT2 = style({
    position: "absolute",
    top: "-44vh",
    left: "calc((62% - 100vh/2) + 66vh)",
    transformOrigin: "center",
    transform: "rotate(-5deg)",
    height: "100vh",
    filter: "drop-shadow(5px 4px 8px rgba(0, 0, 0, 0.1))",
    animation: movementT2 + " 3000ms infinite alternate ease-in-out",
    animationDelay: "-400ms"
})

const movementT2Shadow = keyframes({
    from: {
        transform: "rotate(-5deg) scale(0.85) translate(0,0)"
    },
    "33%": {
        transform: "rotate(-5deg) scale(0.85) translate(-8px, 0px)"
    },
    "66%": {
        transform: "rotate(-5deg) scale(0.85) translate(0px, 8px)"
    },
    to: {
        transform: "rotate(-5deg) scale(0.85) translate(8px, -8px)"
    }
})

export const ClassT2Shadow = style({
    position: "absolute",
    top: "-44vh",
    left: "calc((62% - 100vh/2) + 66vh)",
    transformOrigin: "center",
    transform: "rotate(-5deg) scale(0.85)",
    height: "100vh",
    filter: "drop-shadow(5px 4px 8px rgba(0, 0, 0, 0.2))",
    animation: movementT2Shadow + " 3000ms infinite alternate ease-in-out",
    animationDelay: "-700ms"
})

const movementT3 = keyframes({
    from: {
        transform: "translate(0,0)"
    },
    "33%": {
        transform: "translate(-10px, 0px)"
    },
    "66%": {
        transform: "translate(10px, 10px)"
    },
    to: {
        transform: "translate(-10px, 10px)"
    }
})

export const ClassT3 = style({
    position: "absolute",
    bottom: "-58vh",
    left: "-50vh",
    transformOrigin: "center",
    height: "100vh",
    filter: "drop-shadow(5px 0px 8px rgba(0, 0, 0, 0.1))",
    animation: movementT3 + " 3000ms infinite alternate ease-in-out",
})

const movementT3Shadow = keyframes({
    from: {
        transform: "scale(0.85) translate(0,0)"
    },
    "33%": {
        transform: "scale(0.85) translate(-8px, 0px)"
    },
    "66%": {
        transform: "scale(0.85) translate(8px, 8px)"
    },
    to: {
        transform: "scale(0.85) translate(-8px, 8px)"
    }
})
export const ClassT3Shadow = style({
    position: "absolute",
    bottom: "-58vh",
    left: "-48vh",
    transform: "scale(0.85)",
    transformOrigin: "center",
    height: "100vh",
    filter: "drop-shadow(5px 0px 8px rgba(0, 0, 0, 0.2))",
    animation: movementT3Shadow + " 3000ms infinite alternate ease-in-out",
    animationDelay: "-600ms"
})

const movementT4 = keyframes({
    from: {
        transform: "rotate(60deg) translate(0,0)"
    },
    "33%": {
        transform: "rotate(60deg) translate(0px, 10px)"
    },
    "66%": {
        transform: "rotate(60deg) translate(-10px, 0px)"
    },
    to: {
        transform: "rotate(60deg) translate(10px, -10px)"
    }
})

export const ClassT4 = style({
    position: "absolute",
    bottom: "10vh",
    left: "-80vh",
    transformOrigin: "center",
    transform: "rotate(60deg)",
    height: "100vh",
    filter: "drop-shadow(5px 0px 8px rgba(0, 0, 0, 0.1))",
    animation: movementT4 + " 3000ms infinite alternate ease-in-out",
    animationDelay: "600ms"
})

const movementT4Shadow = keyframes({
    from: {
        transform: "rotate(60deg) scale(0.85) translate(0,0)"
    },
    "33%": {
        transform: "rotate(60deg) scale(0.85) translate(0px, 8px)"
    },
    "66%": {
        transform: "rotate(60deg) scale(0.85) translate(-8px, 0px)"
    },
    to: {
        transform: "rotate(60deg) scale(0.85) translate(8px, -8px)"
    }
})

export const ClassT4Shadow = style({
    position: "absolute",
    bottom: "9vh",
    left: "-80vh",
    transformOrigin: "center",
    transform: "rotate(60deg) scale(0.85)",
    height: "100vh",
    filter: "drop-shadow(5px 0px 8px rgba(0, 0, 0, 0.2))",
    animation: movementT4Shadow + " 3000ms infinite alternate ease-in-out",
    animationDelay: "300ms"
})
