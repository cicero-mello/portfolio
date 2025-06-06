import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik"
import { Description } from "./description"
import { setupScrollTrigger } from "~/gsap/history-section"
import { ScrollTrigger } from "gsap/all"
import * as S from "./styles.css"

export const HistorySection = component$(() => {
    const historySectionRef = useSignal<Element>()

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(() => {
        setupScrollTrigger(historySectionRef)
        window.addEventListener("resize", () => {
            ScrollTrigger.refresh()
        })
    })

    return (
        <S.MainSection ref={historySectionRef}>
            <S.TopGuide class="top-guide">
                <S.YearSection class="year-section-1">
                    <S.ImpactText> 1º IMPACT </S.ImpactText>
                    <S.YearText class="year-text-1"> 2017 </S.YearText>
                    <Description
                        type="school"
                        class={S.descriptionItemClass}
                    />
                </S.YearSection>

                <S.YearSection class="year-section-2">
                    <S.ImpactText> 2º IMPACT </S.ImpactText>
                    <S.YearText class="year-text-2"> 2020 </S.YearText>
                    <Description
                        type="work"
                        class={S.descriptionItemClass}
                    />
                </S.YearSection>

                <S.YearSection class="year-section-3">
                    <S.ImpactText> ////////// </S.ImpactText>
                    <S.YearText class="year-text-3"> 2022 </S.YearText>
                    <Description
                        type="health"
                        class={S.descriptionItemClass}
                    />
                </S.YearSection>

                <S.YearSection class="year-section-4">
                    <S.ImpactText > 3º IMPACT </S.ImpactText>
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
