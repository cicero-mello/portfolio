import { component$ } from "@builder.io/qwik"
import { Colors } from "~/styles"
import { SVGComponentProps } from "./types"

export const CSS3SVG = component$(({
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
                d="M85 11L78.4365 82.093L49.9995 89.7498L21.5621 82.093L15 11H85ZM71.7742 25.4556H49.974H27.7876L28.8486 34.0408H49.974H51.1606L49.974 34.5347L29.6207 43.0117L30.2957 51.4034L49.974 51.4672L60.5209 51.5006L59.8458 62.6899L49.9738 65.4693V65.4605L49.8929 65.483L40.3591 63.0763L39.7805 56.1306H39.7489H30.9058H30.8747L32.0322 69.5392L49.9741 74.845V74.8355L50.0065 74.845L67.8522 69.6358L70.1671 43.0117H49.9741H49.9243L49.9741 42.9901L70.9068 34.0408L71.7742 25.4556Z"
                fill={pathColor}
            />
        </svg>
    )
})
