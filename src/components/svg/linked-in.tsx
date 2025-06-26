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
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...rest}
        >
            <path
                d="M0 0V100H100V0H0ZM36.0156 70.918H26.2695V39.7266H36.0156V70.918ZM30.8789 35.8203H30.8008C27.2656 35.8203 24.9805 33.4375 24.9805 30.4102C24.9805 27.3242 27.3437 25 30.9375 25C34.5312 25 36.7383 27.3242 36.8164 30.4102C36.8359 33.418 34.5508 35.8203 30.8789 35.8203ZM75 70.918H63.9453V54.7852C63.9453 50.5664 62.2266 47.6758 58.418 47.6758C55.5078 47.6758 53.8867 49.6289 53.1445 51.5039C52.8711 52.168 52.9102 53.1055 52.9102 54.0625V70.918H41.9531C41.9531 70.918 42.0898 42.3242 41.9531 39.7266H52.9102V44.6289C53.5547 42.4805 57.0508 39.4336 62.6367 39.4336C69.5703 39.4336 75 43.9258 75 53.5742V70.918Z"
                fill={pathColor}
            />
        </svg>
    )
})
