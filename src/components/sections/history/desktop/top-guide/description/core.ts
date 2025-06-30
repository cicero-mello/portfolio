import { BagSVG, RocketSVG, SuitCaseSVG, VitalsSVG } from "~/components/svg"
import type { DescriptionTexts, DescriptionType } from "./types"
import type { SVGComponentProps } from "~/components/svg/types"
import type { Component } from "@builder.io/qwik"

export const svgComponentByDescriptionType = (
    new Map<DescriptionType, Component<SVGComponentProps>>([
        ["school", BagSVG],
        ["work", SuitCaseSVG],
        ["health", VitalsSVG],
        ["ascension", RocketSVG]
    ])
)

export const textByDescriptionType = (
    new Map<DescriptionType, DescriptionTexts>([
        ["school", {
            top: (
                "First contact with programming " +
                "(with electronics) in High School"
            ),
            bottom: (
                "Most of the time was focused on " +
                "microcontrollers"
            )
        }],
        ["work", {
            top: (
                "Knowledge expansion to web  " +
                "development in internship/job"
            ),
            bottom: (
                "Initially full-stack; later, focused on " +
                "front-end"
            )
        }],
        ["health", {
            top: (
                "Stopping work to focus " +
                "on health issues"
            ),
            bottom: (
                "Gradually I returned to " +
                "coding"
            )
        }],
        ["ascension", {
            top: (
                "Start projects with learning " +
                "purposes by myself"
            ),
            bottom: (
                "(Even the classics are built with " +
                "my own ideas)"
            )
        }],
    ])
)
