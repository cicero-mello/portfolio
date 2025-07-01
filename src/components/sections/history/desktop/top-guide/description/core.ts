import { BagSVG, RocketSVG, SuitCaseSVG, VitalsSVG } from "~/components/svg"
import type { DescriptionTexts, DescriptionType } from "./types"
import type { SVGComponentProps } from "~/components/svg/types"
import type { Component } from "@builder.io/qwik"
import type { LanguageType } from "~/context/language"
import { getTextsByLanguage } from "~/languages"

export const svgComponentByDescriptionType = (
    new Map<DescriptionType, Component<SVGComponentProps>>([
        ["school", BagSVG],
        ["work", SuitCaseSVG],
        ["health", VitalsSVG],
        ["ascension", RocketSVG]
    ])
)

export const getTexts = (
    descriptionType: DescriptionType,
    language: LanguageType
) => {
    const texts = getTextsByLanguage(language)

    const textByDescriptionType = new Map<DescriptionType, DescriptionTexts>([
        ["school", {
            top: texts.historySection.t1,
            bottom: texts.historySection.t2
        }],
        ["work", {
            top: texts.historySection.t3,
            bottom: texts.historySection.t4
        }],
        ["health", {
            top: texts.historySection.t5,
            bottom: texts.historySection.t6
        }],
        ["ascension", {
            top: texts.historySection.t7,
            bottom: texts.historySection.t8
        }],
    ])

    return textByDescriptionType.get(descriptionType)!
}
