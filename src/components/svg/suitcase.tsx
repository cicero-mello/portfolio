import type { SVGComponentProps } from "./types"
import { component$ } from "@builder.io/qwik"
import { Colors } from "~/styles"

export const SuitCaseSVG = component$(({
    pathColor = Colors.Cloud51,
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
                d="M8 39.6969V80.203C8 82.4104 9.80608 84.2165 12.0135 84.2165H20.2511V35.6934H12.0135C9.80608 35.6934 8 37.4894 8 39.6969Z"
                fill={pathColor}
            />
            <path
                d="M87.2966 35.6934H79.059V84.2165H87.2966C89.4939 84.2165 91.3 82.4104 91.3 80.203V39.6969C91.3 37.4894 89.4939 35.6934 87.2966 35.6934Z"
                fill={pathColor}
            />
            <path
                d="M66.2068 23.7376C66.2068 21.6766 64.5302 20 62.4696 20H36.8337C34.7721 20 33.0957 21.6766 33.0957 23.7376V35.6934H28.1984V84.2165H71.1026V35.6934H66.2071V23.7376H66.2068ZM40.119 27.0236H59.1832V35.6934H40.119V27.0236Z"
                fill={pathColor}
            />
        </svg>

    )
})
