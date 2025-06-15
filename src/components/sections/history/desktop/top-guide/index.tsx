import { $, component$, isServer, useContext, useOnWindow, useSignal } from "@builder.io/qwik"
import { BottomIconsContext } from "~/context/history-section/desktop"
import { gsap } from "~/gsap/history-section"
import { onElementHitWindow } from "~/utils"
import { Description } from "./description"
import * as S from "./styles.css"

export const TopGuide = component$(() => {
    const animationSetupIsDone = useSignal(false)
    const topGuideRef = useSignal<HTMLElement>()
    const finalMessageWrapperRef = useSignal<HTMLElement>()
    const yearSection1Ref = useSignal<HTMLElement>()
    const yearSection2Ref = useSignal<HTMLElement>()
    const yearSection3Ref = useSignal<HTMLElement>()
    const yearSection4Ref = useSignal<HTMLElement>()

    const bottomIcons = useContext(BottomIconsContext)

    const setupAnimations = $(() => {
        onElementHitWindow({
            element: yearSection1Ref.value!,
            screenXPercent: 0.65,
            onHitFromRight: () => {
                yearSection1Ref.value!.style.opacity = "1"
                bottomIcons.showC()

                finalMessageWrapperRef.value!.style.visibility = "unset"
            },
            onHitFromLeft: () => {
                yearSection1Ref.value!.style.opacity = "0.2"
                bottomIcons.hideC()

                finalMessageWrapperRef.value!.style.visibility = "hidden"
            }
        })

        onElementHitWindow({
            element: yearSection2Ref.value!,
            screenXPercent: 0.65,
            onHitFromRight: () => {
                yearSection2Ref.value!.style.opacity = "1"
                yearSection1Ref.value!.style.opacity = "0.2"

                bottomIcons.showCSS()
                bottomIcons.showStyledComponents()
                bottomIcons.showJavascript()
                bottomIcons.showAxios()
                bottomIcons.showReact()
                bottomIcons.showTypescript()
                bottomIcons.showHTML()
                bottomIcons.showJava()
                bottomIcons.showGit()
            },
            onHitFromLeft: () => {
                yearSection1Ref.value!.style.opacity = "1"
                yearSection2Ref.value!.style.opacity = "0.2"

                bottomIcons.hideCSS()
                bottomIcons.hideStyledComponents()
                bottomIcons.hideJavascript()
                bottomIcons.hideAxios()
                bottomIcons.hideReact()
                bottomIcons.hideTypescript()
                bottomIcons.hideHTML()
                bottomIcons.hideJava()
                bottomIcons.hideGit()
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

                bottomIcons.showVite()
                bottomIcons.showPrisma()
                bottomIcons.showQwik()
                bottomIcons.showPreact()
                bottomIcons.showTanstack()
                bottomIcons.showZod()
                bottomIcons.showFigma()
                bottomIcons.showNode()
                bottomIcons.showFastify()
                bottomIcons.showZustand()
                bottomIcons.showVitest()
                bottomIcons.showNPM()
                bottomIcons.showTailwind()
                bottomIcons.showSwagger()
                bottomIcons.showDocker()
                bottomIcons.showReactHookForm()
                bottomIcons.showNext()
                bottomIcons.showGSAP()
            },
            onHitFromLeft: () => {
                yearSection3Ref.value!.style.opacity = "1"
                yearSection4Ref.value!.style.opacity = "0.2"

                bottomIcons.hideVite()
                bottomIcons.hidePrisma()
                bottomIcons.hideQwik()
                bottomIcons.hidePreact()
                bottomIcons.hideTanstack()
                bottomIcons.hideZod()
                bottomIcons.hideFigma()
                bottomIcons.hideNode()
                bottomIcons.hideFastify()
                bottomIcons.hideZustand()
                bottomIcons.hideVitest()
                bottomIcons.hideNPM()
                bottomIcons.hideTailwind()
                bottomIcons.hideSwagger()
                bottomIcons.hideDocker()
                bottomIcons.hideReactHookForm()
                bottomIcons.hideNext()
                bottomIcons.hideGSAP()
            }
        })
    })

    const finalMessageHight = useSignal(0)

    useOnWindow("scroll", $(() => {
        if (
            isServer
            || animationSetupIsDone.value
            || !topGuideRef.value
            || !finalMessageWrapperRef.value
        ) return
        animationSetupIsDone.value = true

        gsap.slideTopGuide(topGuideRef.value!)
        setupAnimations()
        finalMessageHight.value = topGuideRef.value!.offsetHeight - 4
    }))

    useOnWindow("resize", $(() => {
        finalMessageHight.value = topGuideRef.value!.offsetHeight - 4
    }))

    return (
        <>
            <S.Wrapper ref={topGuideRef}>
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
            </S.Wrapper>
            <S.FinalMessageWrapper
                ref={finalMessageWrapperRef}
                style={{
                    height: finalMessageHight.value + "px"
                }}
            >
                <S.FinalMessage>
                    ...and the learning continues
                </S.FinalMessage>
            </S.FinalMessageWrapper>
        </>
    )
})
