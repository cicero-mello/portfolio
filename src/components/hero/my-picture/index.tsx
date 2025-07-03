import Image from "../../../../assets/images/me-brown.webp?w=1080&h=1080&jsx"
import OptimizedImage from "../../../../assets/images/me-brown.webp?jsx"
import { $, component$, useId } from "@builder.io/qwik"
import { useDevice } from "~/context/device"
import { startGlitch } from "cm-glitch"
import * as S from "./styles.css"

export const MyPicture = component$(() => {
    const device = useDevice()
    const imageId = useId()

    const handleClick = $(() => {
        if (device.type === "mobile") return
        startGlitch(imageId, { earlyCleanup: true })
    })

    return (
        <S.ImageButton
            onClick$={handleClick}
            tabIndex={-1}
            aria-label="Easter Egg Button"
            id={imageId}
        >
            {device.type === "mobile" ?
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
