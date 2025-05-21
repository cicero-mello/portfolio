import type { SVGComponentProps } from "./types"
import { component$ } from "@builder.io/qwik"
import { Colors } from "~/styles"

export const GitSVG = component$(({
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
                d="M35.6392 33.9011C39.5529 31.8927 42.2308 27.8168 42.2308 23.1154C42.2308 16.4243 36.8065 11 30.1154 11C23.4243 11 18 16.4243 18 23.1154C18 28.0835 20.9903 32.3531 25.2692 34.2227V65.3157C20.9903 67.1853 18 71.4548 18 76.4231C18 83.1142 23.4243 88.5385 30.1154 88.5385C36.8065 88.5385 42.2308 83.1142 42.2308 76.4231C42.2308 71.4548 39.2404 67.1853 34.9615 65.3157V46.9304L45.0696 57.0385H57.7773C59.6469 61.3176 63.9163 64.3077 68.8846 64.3077C75.5757 64.3077 81 58.8834 81 52.1923C81 45.5012 75.5757 40.0769 68.8846 40.0769C63.9163 40.0769 59.6469 43.0672 57.7773 47.3462H49.0842L35.6392 33.9011Z"
                fill={pathColor}
            />
        </svg>
    )
})
