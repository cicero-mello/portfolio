import type { Component, HTMLAttributes } from "@builder.io/qwik"
import type { SVGComponentProps } from "../svg/types"

export interface AnchorIcons {
    href: string
    ariaLabel: string
    icon: Component<SVGComponentProps>
}

export interface HistoryCardProps extends
    HTMLAttributes<HTMLElement> {
    title: string
    description1: string
    description2: string
    descriptionIcon: Component<SVGComponentProps>
    anchorIcons: AnchorIcons[]
}
