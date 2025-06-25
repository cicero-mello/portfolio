import type { AnchorIconProps } from "~/components/anchor-icon/types"

export type SectionName = (
    "c-streaming" | "poke-info" | "ice-crud"
)

export interface SectionData {
    name: string
    site: string
    features: string[]
    anchorIcons: AnchorIconProps[]
    image: any
}
