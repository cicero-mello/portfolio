import { component$ } from "@builder.io/qwik"
import { Colors } from "~/styles"
import { SVGComponentProps } from "./types"

export const TailwindSVG = component$(({
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
                d="M27.75 50.2C30.7833 38.0667 38.3667 32 50.5 32C68.7 32 70.975 45.65 80.075 47.925C86.1417 49.4417 91.45 47.1667 96 41.1C92.9667 53.2333 85.3833 59.3 73.25 59.3C55.05 59.3 52.775 45.65 43.675 43.375C37.6083 41.8583 32.3 44.1333 27.75 50.2ZM5 77.5C8.03333 65.3667 15.6167 59.3 27.75 59.3C45.95 59.3 48.225 72.95 57.325 75.225C63.3917 76.7417 68.7 74.4667 73.25 68.4C70.2167 80.5334 62.6333 86.6 50.5 86.6C32.3 86.6 30.025 72.95 20.925 70.675C14.8583 69.1584 9.55 71.4334 5 77.5Z"
                fill={pathColor}
            />
        </svg>
    )
})
