import type { SVGComponentProps } from "./types"
import { component$ } from "@builder.io/qwik"
import { Colors } from "~/styles"

export const GatsbySVG = component$(({
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
                d="M49.5 8.5C26.6858 8.5 8.5 26.6675 8.5 49.5C8.5 72.3326 26.6675 90.5 49.5 90.5C72.3326 90.5 90.5 72.3141 90.5 49.5C90.5 26.6858 72.3326 8.5 49.5 8.5ZM17.4107 49.8461L49.1539 81.5712C31.6787 81.5893 17.4107 67.3213 17.4107 49.8461ZM56.6248 80.8787L18.1395 42.3569C21.3467 28.0889 34.1751 17.3925 49.5 17.3925C59.7773 17.4289 69.4352 22.3125 75.5213 30.5853L70.8928 34.5031C65.9912 27.3235 57.8459 23.0413 49.1539 23.0778C38.0382 23.0049 28.1435 30.0569 24.5355 40.5529L58.0646 74.1C66.2646 71.2392 72.6787 64.1141 74.4646 55.5499H60.5608V49.5H81.5893C81.5893 64.8248 70.8928 77.6714 56.6248 80.8787Z"
                fill={pathColor}
            />
        </svg>
    )
})
