import Image from '../../../../assets/images/me-brown.webp?w=3017&h=3017&jsx'
import { $, component$, useId } from "@builder.io/qwik"
import { startGlitch } from "cm-glitch"
import * as S from "./styles.css"

export const MyPicture = component$(() => {
    const imageId = useId()

    const handleClick = $(() => {
        startGlitch(imageId, { noObservers: true })
    })

    return (
        <S.ImageButton
            onClick$={handleClick}
            tabIndex={-1}
            aria-label="Easter Egg Button"
            id={imageId}
        >
            <Image
                alt="Cícero Mello"
                class={S.imageClass}
                id={imageId}
            />
        </S.ImageButton>
    )
})
