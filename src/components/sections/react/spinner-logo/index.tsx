import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik"
import { useDevice } from "~/context/device"
import { ReactBigSVG } from "~/components/svg"
import { Colors } from "~/styles"
import * as S from "./styles.css"

export const SpinnerLogo = component$(() => {
    const device = useDevice()

    const logoRef = useSignal<SVGAElement>()
    const logoShadowRef = useSignal<SVGAElement>()

    const currentGearAngle = useSignal(0)
    const gearRotateBoost = useSignal(0)
    const previousTimestamp = useSignal<number | null>(null)

    const BASE_SPEED = 9
    const DECAY_RATE_PER_SECOND = 0.5

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(() => {
        if (device.type === "mobile") return

        logoRef.value!.style.animation = "unset"
        logoRef.value!.style.willChange = "transform"
        logoShadowRef.value!.style.animation = "unset"
        logoShadowRef.value!.style.willChange = "transform"

        const rotateAnimation = (timestamp: number) => {
            if (!previousTimestamp.value) previousTimestamp.value = timestamp

            const timeSinceLastFrameInSeconds = (
                timestamp - previousTimestamp.value
            ) / 1000

            previousTimestamp.value = timestamp

            const currentSpeed = (BASE_SPEED + gearRotateBoost.value) * timeSinceLastFrameInSeconds
            currentGearAngle.value += currentSpeed
            if (currentGearAngle.value > 100000) {
                currentGearAngle.value %= 360
            }

            logoRef.value!.style.transform = `rotate(${currentGearAngle.value}deg)`
            logoShadowRef.value!.style.transform = `rotate(${currentGearAngle.value}deg)`

            gearRotateBoost.value *= Math.pow(DECAY_RATE_PER_SECOND, timeSinceLastFrameInSeconds)
            if (gearRotateBoost.value < 0.01) gearRotateBoost.value = 0

            requestAnimationFrame(rotateAnimation)
        }

        requestAnimationFrame(rotateAnimation)
    })

    return (
        <S.Wrapper>
            <ReactBigSVG
                ref={logoRef}
                class={S.reactSvgClass}
                onClickCenter$={$(() => { gearRotateBoost.value += 140 })}
                pathColor={
                    gearRotateBoost.value < 1000 ?
                        Colors.Cloud :
                        Colors.Lavender
                }
            />
            <S.ReactShadowContainer>
                <ReactBigSVG
                    ref={logoShadowRef}
                    class={S.reactSvgClass}
                    pathColor={Colors.Toast9}
                />
            </S.ReactShadowContainer>
        </S.Wrapper>
    )
})
