import { HTMLAttributes } from "@builder.io/qwik"

export interface ReactSVGProps
    extends HTMLAttributes<SVGElement> {
    pathColor?: string
    pathOpacity?: string
}
