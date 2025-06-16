import { $, component$, isServer, useOnWindow, useSignal } from "@builder.io/qwik"
import type { AnchorIconProps } from "./types"
import { Colors } from "~/styles"
import * as S from "./styles.css"

export const AnchorIcon = component$(({
    ariaLabel,
    svgComponent: Component,
    href,
    ref,
    ...rest
}: AnchorIconProps) => {
    const svgRef = useSignal<HTMLElement>()

    // eslint-disable-next-line qwik/use-method-usage
    const anchorRef = ref ?? useSignal<HTMLAnchorElement>()

    const animationSetupIsDone = useSignal(false)
    const haveEmphasis = useSignal(false)
    const onHover = useSignal(false)
    const onFocus = useSignal(false)

    const applyTransitionInPaths = $((svgElement: HTMLElement) => {
        const paths = svgElement.querySelectorAll("path")
        paths.forEach((path) => {
            path.style.transition = "60ms linear"
        })
    })

    const updateEmphasis = $(() => {
        const shouldHaveEmphasis = onHover.value || onFocus.value
        if (haveEmphasis.value === shouldHaveEmphasis) return
        haveEmphasis.value = shouldHaveEmphasis
    })

    const setupAnimation = $(() => {
        applyTransitionInPaths(svgRef.value!)

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

    return (
        <S.Anchor
            ref={anchorRef}
            target="_blank"
            href={href}
            aria-label={ariaLabel}
            {...rest}
        >
            <Component
                ref={svgRef}
                style={{
                    width: "100%",
                    height: "auto"
                }}
                pathColor={
                    haveEmphasis.value ?
                        Colors.Toast : Colors.Fawn
                }
            />
        </S.Anchor>
    )
})
