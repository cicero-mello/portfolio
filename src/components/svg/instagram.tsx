import type { SVGComponentProps } from "./types"
import { component$ } from "@builder.io/qwik"
import { Colors } from "~/styles"

export const InstagramSVG = component$(({
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
                d="M63.6719 49.9999C63.6719 57.5389 57.5391 63.6718 50 63.6718C42.4609 63.6718 36.3281 57.5389 36.3281 49.9999C36.3281 48.1835 36.6992 46.4452 37.3438 44.8632H29.8828V65.3319C29.8828 67.9686 32.0312 70.1171 34.668 70.1171H65.332C67.9688 70.1171 70.1172 67.9686 70.1172 65.3319V44.8632H62.6563C63.3203 46.4452 63.6719 48.1835 63.6719 49.9999Z"
                fill={pathColor}
            />
            <path
                d="M69.2187 39.2383V31.8555V30.7617H68.125L60.7422 30.7813L60.7812 39.2578L69.2187 39.2383Z"
                fill={pathColor}
            />
            <path
                d="M50.0003 58.7892C54.8441 58.7892 58.8089 54.8439 58.8089 49.9806C58.8089 48.0665 58.1839 46.2892 57.1488 44.8439C55.5472 42.6368 52.9495 41.172 50.0198 41.172C47.0902 41.172 44.4925 42.6173 42.8909 44.8439C41.8558 46.2892 41.2308 48.0665 41.2308 49.9806C41.2113 54.8439 45.1566 58.7892 50.0003 58.7892Z"
                fill={pathColor}
            />
            <path
                d="M0 0V100H100V0H0ZM75 44.8633V65.332C75 70.6641 70.6641 75 65.332 75H34.668C29.3359 75 25 70.6641 25 65.332V44.8633V34.6484C25 29.3164 29.3359 24.9805 34.668 24.9805H65.332C70.6641 24.9805 75 29.3164 75 34.6484V44.8633Z"
                fill={pathColor}
            />
        </svg>
    )
})
