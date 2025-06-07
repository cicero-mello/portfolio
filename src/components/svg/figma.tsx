import type { SVGComponentProps } from "./types"
import { component$ } from "@builder.io/qwik"
import { Colors } from "~/styles"

export const FigmaSVG = component$(({
    pathColor = Colors.Toast,
    bgColor = Colors.Onyx, // eslint-disable-line @typescript-eslint/no-unused-vars
    ...rest
}: SVGComponentProps) => {

    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...rest}
        >
            <path
                d="M50 12H37.5C30.5965 12 25 17.5965 25 24.5C25 31.4035 30.5965 37 37.5 37M50 12V37M50 12L62.5 12C69.4037 12 75 17.5965 75 24.5C75 31.4035 69.4037 37 62.5 37M37.5 37H50M37.5 37C30.5965 37 25 42.5962 25 49.5C25 56.4037 30.5965 62 37.5 62M50 37H62.5M50 37V62M62.5 37C69.4037 37 75 42.5962 75 49.5C75 56.4037 69.4037 62 62.5 62C55.5962 62 50 56.4037 50 49.5C50 42.5962 55.5962 37 62.5 37ZM50 62H37.5M50 62V74.5C50 81.4037 44.4037 87 37.5 87C30.5965 87 25 81.4037 25 74.5C25 67.5962 30.5965 62 37.5 62"
                stroke={pathColor}
                stroke-width="8.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    )
})
