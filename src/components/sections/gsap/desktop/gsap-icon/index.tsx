import { $, component$, isServer, useId, useOnWindow, useSignal, useVisibleTask$ } from "@builder.io/qwik"
import { removeGlitch, startGlitch } from "cm-glitch"
import { GSAP2SVG, GSAPSVG } from "~/components/svg"
import { gsap } from "~/gsap/gsap-section"
import * as S from "./styles.css"

export const GSAPIcon = component$(() => {
    const GSAPSVGId = useId()
    const GSAPSVGRef = useSignal<HTMLElement>()
    const GSAP2SVGRef = useSignal<HTMLElement>()
    const animationSetupIsDone = useSignal(false)

    const timeoutId = useSignal<NodeJS.Timeout>()

    const addSequentialPathIds = $((svgElement: HTMLElement, prefix: string = 'path') => {
        const paths = svgElement.querySelectorAll('path')
        paths.forEach((path, index) => {
            const id = `${prefix}-${index + 1}`
            path.setAttribute('id', id)
        })
    })

    const startAnimations = $(async () => {
        addSequentialPathIds(GSAPSVGRef.value!, "gsap-i-1")
        addSequentialPathIds(GSAP2SVGRef.value!, "gsap-i-2")

        timeoutId.value = setTimeout(async () => {
            gsap.moveCape()
            GSAPSVGRef.value!.style.visibility = "unset"
            await startGlitch(GSAPSVGId, {
                animationTime: 400,
                maxDistortionY: 500,
                distortionIntensity: 40,
                maxDistortionX: 40,
                noObservers: true
            })
            removeGlitch(GSAPSVGId)
        }, 3000)
    })

    const setupAnimations = $(() => {
        if (
            isServer
            || animationSetupIsDone.value
        ) return
        animationSetupIsDone.value = true
        gsap.triggerInGsapSection(startAnimations)
    })

    useOnWindow("scroll", setupAnimations)
    useOnWindow("keydown", setupAnimations)

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(() => {
        return () => {
            clearTimeout(timeoutId.value)
        }
    })

    return (
        <S.Wrapper>
            <GSAPSVG
                id={GSAPSVGId}
                ref={GSAPSVGRef}
                style={{ visibility: "hidden" }}
            />
            <GSAP2SVG
                ref={GSAP2SVGRef}
                style={{ display: "none" }}
            />
        </S.Wrapper>
    )
})
