import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik"
import { Description } from "./description"
import { setupScrollTrigger } from "~/gsap/history-section"
import { ScrollTrigger } from "gsap/all"
import * as S from "./styles.css"
import { onHitCenter } from "~/utils"

export const HistorySection = component$(() => {
    const historySectionRef = useSignal<Element>()

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(() => {
        setupScrollTrigger(historySectionRef)
        window.addEventListener("resize", () => {
            ScrollTrigger.refresh()
        })

        onHitCenter(document.getElementById("f1")!, {
            onHitFromRight: () => document.getElementById("f1")!.style.opacity = "1",
            onHitFromLeft: () => document.getElementById("f1")!.style.opacity = "0.2"
        })

        onHitCenter(document.getElementById("f2")!, {
            onHitFromRight: () => {
                document.getElementById("f2")!.style.opacity = "1"
                document.getElementById("f1")!.style.opacity = "0.2"
            },
            onHitFromLeft: () => {
                document.getElementById("f1")!.style.opacity = "1"
                document.getElementById("f2")!.style.opacity = "0.2"
            },
        })

        onHitCenter(document.getElementById("f3")!, {
            onHitFromRight: () => {
                document.getElementById("f3")!.style.opacity = "1"
                document.getElementById("f2")!.style.opacity = "0.2"
            },
            onHitFromLeft: () => {
                document.getElementById("f2")!.style.opacity = "1"
                document.getElementById("f3")!.style.opacity = "0.2"
            },
        })

        onHitCenter(document.getElementById("f4")!, {
            onHitFromRight: () => {
                document.getElementById("f4")!.style.opacity = "1"
                document.getElementById("f3")!.style.opacity = "0.2"
            },
            onHitFromLeft: () => {
                document.getElementById("f3")!.style.opacity = "1"
                document.getElementById("f4")!.style.opacity = "0.2"
            }
        })
    })

    return (
        <S.MainSection ref={historySectionRef}>
            <S.TopGuide class="top-guide">
                <S.PlaceHolder>
                    TIMELINE
                </S.PlaceHolder>
                <S.YearSection id="f1">
                    <S.ImpactText class="impact-text-1"> 1º IMPACT </S.ImpactText>
                    <S.YearText class="year-text-1"> 2017 </S.YearText>
                    <Description
                        type="school"
                        class={S.descriptionItemClass}
                    />
                </S.YearSection>

                <S.YearSection id="f2">
                    <S.ImpactText class="impact-text-2"> 2º IMPACT </S.ImpactText>
                    <S.YearText class="year-text-2"> 2020 </S.YearText>
                    <Description
                        type="work"
                        class={S.descriptionItemClass}
                    />
                </S.YearSection>

                <S.YearSection id="f3">
                    <S.ImpactText class="impact-text-3"> ////////// </S.ImpactText>
                    <S.YearText class="year-text-3"> 2022 </S.YearText>
                    <Description
                        type="health"
                        class={S.descriptionItemClass}
                    />
                </S.YearSection>

                <S.YearSection id="f4">
                    <S.ImpactText class="impact-text-4"> 3º IMPACT </S.ImpactText>
                    <S.YearText class="year-text-4"> 2024/2025 </S.YearText>
                    <Description
                        type="ascension"
                        class={S.descriptionItemClass}
                    />
                </S.YearSection>
            </S.TopGuide>
        </S.MainSection>
    )
})
