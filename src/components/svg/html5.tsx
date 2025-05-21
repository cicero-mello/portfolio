import type { SVGComponentProps } from "./types"
import { component$ } from "@builder.io/qwik"
import { Colors } from "~/styles"

export const HTML5SVG = component$(({
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
                d="M15 11L21.3191 81.8783L49.6764 89.75L78.1121 81.8672L84.4382 11H15ZM71.2566 27.8204L70.861 32.2273L70.6872 34.1816H70.6584H49.7191H49.6887H37.4217L38.2161 43.0832H49.6887H49.7191H67.5532H69.8959L69.6836 45.4173L67.6409 68.3037L67.5101 69.7713L49.7191 74.702V74.7039L49.6792 74.715L31.8722 69.7714L30.6542 56.1225H34.6762H39.3806L39.9995 63.0553L49.6807 65.6698L49.6887 65.6676V65.6667L59.3847 63.0504L60.3929 51.7759H49.7191H49.6887H30.2659L28.1294 27.8204L27.9212 25.4885H49.6889H49.7191H71.4647L71.2566 27.8204Z"
                fill={pathColor}
            />
        </svg>
    )
})
