import type { HTMLAttributes } from "@builder.io/qwik"

export type DescriptionType = (
    "school" |
    "work" |
    "health" |
    "ascension"
)

export interface DescriptionTexts {
    top: string
    bottom: string
}

export interface Props extends
    HTMLAttributes<HTMLDivElement> {
    type: DescriptionType
}
