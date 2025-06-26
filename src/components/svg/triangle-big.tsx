import type { SVGComponentProps } from "./types"
import { component$ } from "@builder.io/qwik"
import { Colors } from "~/styles"

export const TriangleBigSVG = component$(({
    pathColor = Colors.Lavender,
    bgColor = Colors.Onyx, // eslint-disable-line @typescript-eslint/no-unused-vars
    ...rest
}: SVGComponentProps) => {

    return (
        <svg
            viewBox="0 0 1268 1373"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...rest}
        >
            <path
                d="M0.926438 778.305L1163.55 0.714895L1267.35 1372.04L0.926438 778.305Z"
                fill={pathColor}
            />
        </svg>
    )
})
