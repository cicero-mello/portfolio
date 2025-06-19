import { component$, isServer, useId, useSignal, useTask$ } from "@builder.io/qwik"
import type { StackAnchorProps } from "./types"
import { startGlitch } from "cm-glitch"
import { useEmphasis } from "~/hooks"
import { Colors } from "~/styles"
import * as S from "./styles.css"

export const StackAnchor = component$(({
    id,
    svgComponent: Component,
    name,
    href,
    float = true,
    randomRotate = true,
    ref,
    ...rest
}: StackAnchorProps) => {
    // eslint-disable-next-line qwik/use-method-usage
    const anchorId = id ?? useId()
    // eslint-disable-next-line qwik/use-method-usage
    const anchorRef = ref ?? useSignal<HTMLAnchorElement>()
    const needEmphasis = useEmphasis(anchorRef)

    useTask$(({ track }) => {
        track(needEmphasis)
        if (isServer || !anchorRef.value) return

        startGlitch(anchorId, {
            animationTime: 130,
            direction: "reverse",
            distortionIntensity: 40,
            maxDistortionX: 40,
            maxDistortionY: 30,
            noObservers: true
        })
    })

    const rotateDeg = useSignal(
        `${Math.floor(Math.random() * 29) - 14}deg`
    )
    const animationDelay = useSignal(
        "-" + Math.random() + "s"
    )

    return (
        <S.Anchor
            id={anchorId}
            ref={anchorRef}
            target="_blank"
            href={href}
            tabIndex={-1}
            {...rest}
        >
            <S.SVGWrapper style={float ?
                { animationDelay: animationDelay.value } :
                { animation: "none" }
            }>
                <Component
                    style={{
                        width: "100%",
                        height: "auto",
                        transform: randomRotate ?
                            `rotate(${rotateDeg.value})` : "unset"
                    }}
                    pathColor={
                        needEmphasis.value ?
                            Colors.Toast : Colors.Fawn
                    }
                />
            </S.SVGWrapper>
            {needEmphasis.value && <S.Name children={name} />}
        </S.Anchor>
    )
})
