import { component$ } from "@builder.io/qwik"
import { Description } from "./description"
import * as S from "./styles.css"

export const HistorySection = component$(() => {

    return (
        <S.MainSection class="history-section">
            <S.TopGuide>
                <S.YearSection>
                    <S.ImpactText> 1º IMPACT </S.ImpactText>
                    <S.YearText> 2017 </S.YearText>
                    <Description
                        type="school"
                        class={S.descriptionItemClass}
                    />
                </S.YearSection>

                <S.YearSection>
                    <S.ImpactText> 2º IMPACT </S.ImpactText>
                    <S.YearText> 2020 </S.YearText>
                    <Description
                        type="work"
                        class={S.descriptionItemClass}
                    />
                </S.YearSection>

                <S.YearSection>
                    <S.ImpactText> _________ </S.ImpactText>
                    <S.YearText> 2022 </S.YearText>
                    <Description
                        type="health"
                        class={S.descriptionItemClass}
                    />
                </S.YearSection>

                <S.YearSection>
                    <S.ImpactText> 3º IMPACT </S.ImpactText>
                    <S.YearText> 2024/2025 </S.YearText>
                    <Description
                        type="ascension"
                        class={S.descriptionItemClass}
                    />
                </S.YearSection>
            </S.TopGuide>
        </S.MainSection>
    )
})
