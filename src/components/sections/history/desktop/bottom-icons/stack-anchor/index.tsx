import { $, component$, isServer, useId, useOnWindow, useSignal } from "@builder.io/qwik"
import type { StackAnchorProps } from "./types"
import { startGlitch } from "cm-glitch"
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

    const animationSetupIsDone = useSignal(false)
    const haveEmphasis = useSignal(false)
    const onHover = useSignal(false)
    const onFocus = useSignal(false)

    const updateEmphasis = $(() => {
        const shouldHaveEmphasis = onHover.value || onFocus.value
        if (haveEmphasis.value === shouldHaveEmphasis) return

        haveEmphasis.value = shouldHaveEmphasis
        startGlitch(anchorId, {
            animationTime: 130,
            direction: "reverse",
            distortionIntensity: 40,
            maxDistortionX: 40,
            maxDistortionY: 30,
            noObservers: true
        })
    })

    const setupAnimation = $(() => {
        anchorRef.value!.addEventListener("mouseenter", () => {
            onHover.value = true
            updateEmphasis()
        })
        anchorRef.value!.addEventListener("mouseleave", () => {
            onHover.value = false
            updateEmphasis()
        })
        anchorRef.value!.addEventListener("focus", () => {
            onFocus.value = true
            updateEmphasis()
        })
        anchorRef.value!.addEventListener("blur", () => {
            onFocus.value = false
            updateEmphasis()
        })
    })

    useOnWindow("mousemove", $(() => {
        if (isServer || animationSetupIsDone.value) return
        animationSetupIsDone.value = true
        setupAnimation()
    }))

    useOnWindow("keydown", $(() => {
        if (isServer || animationSetupIsDone.value) return
        animationSetupIsDone.value = true
        setupAnimation()
    }))

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
                        haveEmphasis.value ?
                            Colors.Toast : Colors.Fawn
                    }
                />
            </S.SVGWrapper>
            {haveEmphasis.value && <S.Name children={name} />}
        </S.Anchor>
    )
})
