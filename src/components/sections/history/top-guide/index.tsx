import { $, component$, isServer, useOnWindow, useSignal } from "@builder.io/qwik"
import { gsap } from "~/gsap/history-section"
import { onElementHitWindow } from "~/utils"
import { Description } from "./description"
import * as S from "./styles.css"

export const TopGuide = component$(() => {
    const animationSetupIsDone = useSignal(false)
    const topGuideRef = useSignal<HTMLElement>()
    const yearSection1Ref = useSignal<HTMLElement>()
    const yearSection2Ref = useSignal<HTMLElement>()
    const yearSection3Ref = useSignal<HTMLElement>()
    const yearSection4Ref = useSignal<HTMLElement>()

    useOnWindow("scroll", $(() => {
        if (isServer || animationSetupIsDone.value) return
        animationSetupIsDone.value = true

        gsap.slideTopGuide(topGuideRef.value!)

        onElementHitWindow({
            element: yearSection1Ref.value!,
            screenXPercent: 0.65,
            onHitFromRight: () => {
                yearSection1Ref.value!.style.opacity = "1"
            },
            onHitFromLeft: () => {
                yearSection1Ref.value!.style.opacity = "0.2"
            }
        })

        onElementHitWindow({
            element: yearSection2Ref.value!,
            screenXPercent: 0.65,
            onHitFromRight: () => {
                yearSection2Ref.value!.style.opacity = "1"
                yearSection1Ref.value!.style.opacity = "0.2"
            },
            onHitFromLeft: () => {
                yearSection1Ref.value!.style.opacity = "1"
                yearSection2Ref.value!.style.opacity = "0.2"
            }
        })

        onElementHitWindow({
            element: yearSection3Ref.value!,
            screenXPercent: 0.65,
            onHitFromRight: () => {
                yearSection3Ref.value!.style.opacity = "1"
                yearSection2Ref.value!.style.opacity = "0.2"
            },
            onHitFromLeft: () => {
                yearSection2Ref.value!.style.opacity = "1"
                yearSection3Ref.value!.style.opacity = "0.2"
            }
        })

        onElementHitWindow({
            element: yearSection4Ref.value!,
            screenXPercent: 0.65,
            onHitFromRight: () => {
                yearSection4Ref.value!.style.opacity = "1"
                yearSection3Ref.value!.style.opacity = "0.2"
            },
            onHitFromLeft: () => {
                yearSection3Ref.value!.style.opacity = "1"
                yearSection4Ref.value!.style.opacity = "0.2"
            }
        })
    }))


    return (
        <S.Component ref={topGuideRef}>
            <S.PlaceHolder>TIMELINE</S.PlaceHolder>
            <S.YearSection ref={yearSection1Ref}>
                <S.ImpactText
                    class="impact-text-1"
                    children="1º IMPACT"
                />
                <S.YearText
                    class="year-text-1"
                    children="2017"
                />
                <Description type="school" />
            </S.YearSection>

            <S.YearSection ref={yearSection2Ref}>
                <S.ImpactText
                    class="impact-text-2"
                    children="2º IMPACT"
                />
                <S.YearText
                    class="year-text-2"
                    children="2020" />
                <Description type="work" />
            </S.YearSection>

            <S.YearSection ref={yearSection3Ref}>
                <S.ImpactText
                    class="impact-text-3"
                    children="//////////" />
                <S.YearText
                    class="year-text-3"
                    children="2022" />
                <Description type="health" />
            </S.YearSection>

            <S.YearSection ref={yearSection4Ref}>
                <S.ImpactText
                    class="impact-text-4"
                    children="3º IMPACT" />
                <S.YearText
                    class="year-text-4"
                    children="2024/2025"
                />
                <Description type="ascension" />
            </S.YearSection>
        </S.Component>
    )
})
