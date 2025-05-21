import type { SVGComponentProps } from "./types"
import { component$ } from "@builder.io/qwik"
import { Colors } from "~/styles"

export const AxiosSVG = component$(({
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
                d="M25.6917 35.3163L46.5647 17.8488L46.594 87.6015L39.4896 93.5023L39.3722 35.4924L25.6917 35.3163Z"
                fill={pathColor}
            />
            <path
                d="M73.6917 64.5494L52.8187 82.0169L52.7894 12.2642L59.8938 6.36337L60.0112 64.3732L73.6917 64.5494Z"
                fill={pathColor}
            />
        </svg>
    )
})
