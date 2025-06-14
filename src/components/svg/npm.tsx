import type { SVGComponentProps } from "./types"
import { component$ } from "@builder.io/qwik"
import { Colors } from "~/styles"

export const NPMSVG = component$(({
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
                d="M26.9906 27.6415L73.6887 27.7063L73.659 74.4017H61.9676L62 39.3626H50.3356L50.3086 74.3747H26.9311L26.9906 27.6415ZM15.6259 9.67627C15.6205 9.67627 15.6178 9.67627 15.6124 9.67627C12.3337 9.67627 9.67624 12.3338 9.67624 15.6125C9.67624 15.6179 9.67624 15.6233 9.67624 15.6287L9.67624 84.7266C9.67624 84.732 9.67624 84.7347 9.67624 84.7401C9.67624 88.0188 12.3337 90.6763 15.6124 90.6763C15.6178 90.6763 15.6232 90.6763 15.6286 90.6763H84.7265C84.7319 90.6763 84.7346 90.6763 84.7401 90.6763C88.0187 90.6763 90.6762 88.0188 90.6762 84.7401C90.6762 84.7347 90.6762 84.7293 90.6762 84.7239V15.626C90.6762 15.6206 90.6762 15.6179 90.6762 15.6125C90.6762 12.3338 88.0187 9.67627 84.7401 9.67627C84.7346 9.67627 84.7292 9.67627 84.7238 9.67627L15.6259 9.67627Z"
                fill={pathColor}
            />
        </svg>
    )
})
