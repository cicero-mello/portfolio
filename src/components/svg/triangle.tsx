import type { SVGComponentProps } from "./types"
import { component$ } from "@builder.io/qwik"
import { Colors } from "~/styles"

export const TriangleSVG = component$(({
    pathColor = Colors.Fawn,
    bgColor = Colors.Onyx, // eslint-disable-line @typescript-eslint/no-unused-vars
    ...rest
}: SVGComponentProps) => {

    return (
        <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...rest}
        >
            <path
                d="M24 42L3.21539 6L44.7846 6L24 42Z"
                fill={pathColor}
            />
        </svg>
    )
})
