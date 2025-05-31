import type { QRL } from "@builder.io/qwik"
import type { SVGComponentProps } from "../types"

export interface ReactBigSVGProps extends Omit<
    SVGComponentProps,
    "bgColor"
> {
    onClickCenter$?: QRL<(event: MouseEvent) => void>
    buttonClass?: string
}
