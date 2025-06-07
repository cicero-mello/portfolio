import type { SVGComponentProps } from "./types"
import { component$ } from "@builder.io/qwik"
import { Colors } from "~/styles"

export const ZodSVG = component$(({
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
                d="M77.966 19L97 38.8749L52.5189 88.781L48.9345 92.8033L4 38.6928L23.7935 19H77.966ZM10.4093 39.15L37.2785 23.6384H25.7039L10.2736 38.9911L10.4093 39.15ZM57.3626 23.6384L16.9154 46.9891L25.2428 57.0176L67.1276 32.8338L66.3526 31.493L77.4002 25.1147L75.9859 23.6384H57.3626ZM86.5026 34.6201L35.9959 63.7834H55.7622V62.2334H69.9719L90.6876 38.9911L86.5026 34.6201ZM58.8778 74.6799H39.9135L49.0585 85.6965L58.8778 74.6799Z"
                fill={pathColor}
            />
        </svg>
    )
})
