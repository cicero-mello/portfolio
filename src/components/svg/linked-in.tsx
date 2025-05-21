import type { SVGComponentProps } from "./types"
import { component$ } from "@builder.io/qwik"
import { Colors } from "~/styles"

export const LinkedInSVG = component$(({
    pathColor = Colors.Toast,
    bgColor = Colors.Onyx, // eslint-disable-line @typescript-eslint/no-unused-vars
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
                d="M5 5V95H95V5H5ZM37.4141 68.8262H28.6426V40.7539H37.4141V68.8262ZM32.791 37.2383H32.7207C29.5391 37.2383 27.4824 35.0938 27.4824 32.3691C27.4824 29.5918 29.6094 27.5 32.8437 27.5C36.0781 27.5 38.0645 29.5918 38.1348 32.3691C38.1523 35.0762 36.0957 37.2383 32.791 37.2383ZM72.5 68.8262H62.5508V54.3066C62.5508 50.5098 61.0039 47.9082 57.5762 47.9082C54.957 47.9082 53.498 49.666 52.8301 51.3535C52.584 51.9512 52.6191 52.7949 52.6191 53.6562V68.8262H42.7578C42.7578 68.8262 42.8809 43.0918 42.7578 40.7539H52.6191V45.166C53.1992 43.2324 56.3457 40.4902 61.373 40.4902C67.6133 40.4902 72.5 44.5332 72.5 53.2168V68.8262Z"
                fill={pathColor}
            />
        </svg>
    )
})
