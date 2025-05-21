import type { SVGComponentProps } from "./types"
import { component$ } from "@builder.io/qwik"
import { Colors } from "~/styles"

export const PreactSVG = component$(({
    pathColor = Colors.Toast,
    bgColor = Colors.Onyx,
    ...rest
}: SVGComponentProps) => {

    return (
        <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...rest}
        >
            <path
                d="M49.6586 6L87.3171 27.75V71.25L49.6586 93L12 71.25V27.75L49.6586 6Z"
                fill={pathColor}
            />
            <path
                d="M57.4261 59.6174C72.0205 48.4188 80.3794 34.8155 76.0964 29.2337C71.8133 23.6519 56.5101 28.2053 41.9157 39.4039C27.3213 50.6026 18.9623 64.2059 23.2454 69.7877C27.5285 75.3695 42.8317 70.8161 57.4261 59.6174Z"
                stroke={bgColor}
                stroke-width="3.10714"
            />
            <path
                d="M76.0964 69.7648C80.3794 64.183 72.0205 50.5798 57.4261 39.3811C42.8317 28.1824 27.5285 23.6291 23.2454 29.2109C18.9623 34.7927 27.3213 48.3959 41.9157 59.5946C56.5101 70.7933 71.8133 75.3466 76.0964 69.7648Z"
                stroke={bgColor}
                stroke-width="3.10714"
            />
            <path
                d="M49.6587 55.2793C52.8505 55.2793 55.438 52.6918 55.438 49.5C55.438 46.3082 52.8505 43.7207 49.6587 43.7207C46.4669 43.7207 43.8794 46.3082 43.8794 49.5C43.8794 52.6918 46.4669 55.2793 49.6587 55.2793Z"
                fill={bgColor}
            />
        </svg>

    )
})
