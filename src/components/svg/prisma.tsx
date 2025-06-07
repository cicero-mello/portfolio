import type { SVGComponentProps } from "./types"
import { component$ } from "@builder.io/qwik"
import { Colors } from "~/styles"

export const PrismaSVG = component$(({
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
                d="M84.9251 71.7579L55.694 9.68131C54.954 8.12492 53.4204 7.09948 51.6993 7.01041C49.9743 6.89484 48.3282 7.7482 47.4284 9.22447L15.724 60.575C14.7398 62.1579 14.7605 64.1674 15.7772 65.7298L31.2777 89.7338C32.4821 91.5844 34.7603 92.4222 36.8766 91.7928L81.859 78.4872C83.2293 78.0865 84.3587 77.1114 84.9549 75.8141C85.5429 74.5231 85.5328 73.0387 84.9272 71.7557L84.9251 71.7579ZM78.3807 74.4203L40.2104 85.7073C39.046 86.0536 37.9284 85.0444 38.1706 83.8693L51.8077 18.5715C52.0627 17.3498 53.7498 17.1564 54.2831 18.2868L79.5281 71.896C79.754 72.3794 79.7567 72.9376 79.5355 73.4233C79.3144 73.9089 78.8915 74.2733 78.3786 74.4203H78.3807Z"
                fill={pathColor}
            />
        </svg>
    )
})
