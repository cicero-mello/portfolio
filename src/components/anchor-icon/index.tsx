import { $, component$, isServer, useOnWindow, useSignal } from "@builder.io/qwik"
import type { AnchorIconProps } from "./types"
import { useEmphasis } from "~/hooks"
import { Colors } from "~/styles"
import * as S from "./styles.css"

export const AnchorIcon = component$(({
    ariaLabel,
    randomRotate = true,
    float = true,
    svgComponent: Component,
    href,
    ref,
    ...rest
}: AnchorIconProps) => {
    // eslint-disable-next-line qwik/use-method-usage
    const anchorRef = ref ?? useSignal<HTMLAnchorElement>()
    const svgRef = useSignal<HTMLElement>()
    const animationSetupIsDone = useSignal(false)
    const needEmphasis = useEmphasis(anchorRef)

    const applyTransitionInPaths = $((svgElement: HTMLElement) => {
        const paths = svgElement.querySelectorAll("path")
        paths.forEach((path) => {
            path.style.transition = "60ms linear"
        })
    })

    const setupAnimation = $(() => {
        if (isServer || animationSetupIsDone.value) return
        applyTransitionInPaths(svgRef.value!)
        animationSetupIsDone.value = true
    })

    useOnWindow("mousemove", setupAnimation)
    useOnWindow("keydown", setupAnimation)

    const rotateDeg = useSignal(
        `${Math.floor(Math.random() * 29) - 14}deg`
    )
    const animationDelay = useSignal(
        "-" + Math.random() + "s"
    )

    return (
        <S.Anchor
            ref={anchorRef}
            target="_blank"
            href={href}
            aria-label={ariaLabel}
            {...rest}
        >
            <S.FloatWrapper style={float ?
                { animationDelay: animationDelay.value } :
                { animation: "none" }
            }>
                <Component
                    ref={svgRef}
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
            </S.FloatWrapper>
        </S.Anchor>
    )
})
