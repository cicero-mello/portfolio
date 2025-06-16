import type { Component, HTMLAttributes, Signal } from "@builder.io/qwik"
import type { SVGComponentProps } from "../svg/types"

export interface AnchorIconProps extends Omit<
    HTMLAttributes<HTMLAnchorElement>,
    "href" | "name" | "ref" | "aria-label"
> {
    svgComponent: Component<SVGComponentProps>
    href: string
    ref?: Signal<HTMLAnchorElement | undefined>
    ariaLabel: string
    float?: boolean
    randomRotate?: boolean
}
