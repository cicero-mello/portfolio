import Image from "../../../../assets/images/me-brown.webp?w=3017&h=3017&jsx"
import OptimizedImage from "../../../../assets/images/me-brown.webp?jsx"
import { $, component$, useId } from "@builder.io/qwik"
import { useDeviceType } from "~/context/device-type"
import { startGlitch } from "cm-glitch"
import * as S from "./styles.css"

export const MyPicture = component$(() => {
    const deviceType = useDeviceType()
    const imageId = useId()

    const handleClick = $(() => {
        if (deviceType.value === "mobile") return
        startGlitch(imageId, { noObservers: true })
    })

    return (
        <S.ImageButton
            onClick$={handleClick}
            tabIndex={-1}
            aria-label="Easter Egg Button"
            id={imageId}
        >
            {deviceType.value === "mobile" ?
                <OptimizedImage
                    alt="Cícero Mello"
                    class={S.imageClass}
                    id={imageId}
                /> :
                <Image
                    alt="Cícero Mello"
                    class={S.imageClass}
                    id={imageId}
                />
            }
        </S.ImageButton>
    )
})
