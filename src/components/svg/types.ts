import { HTMLAttributes } from "@builder.io/qwik"

export interface SVGComponentProps
    extends HTMLAttributes<SVGElement> {
    pathColor?: string
    bgColor?: string
}
