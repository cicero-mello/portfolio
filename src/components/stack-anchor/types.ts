import type { Component, HTMLAttributes, Signal } from "@builder.io/qwik"
import type { SVGComponentProps } from "../svg/types"

export interface StackAnchorProps extends Omit<
    HTMLAttributes<HTMLAnchorElement>,
    "href" | "name" | "ref"
> {
    svgComponent: Component<SVGComponentProps>
    name: string
    href: string
    ref?: Signal<HTMLAnchorElement | undefined>
}
