import { component$ } from "@builder.io/qwik"
import { Description } from "./description"
import * as S from "./styles.css"

export const HistorySection = component$(() => {

    return (
        <S.Section class="history-section">
            <S.TopGuide>
                <S.Impacts>
                    <S.ImpactItem> 1º IMPACT </S.ImpactItem>
                    <S.ImpactItem> 2º IMPACT </S.ImpactItem>
                    <S.ImpactItem> _________ </S.ImpactItem>
                    <S.ImpactItem> 3º IMPACT </S.ImpactItem>
                </S.Impacts>

                <S.Years>
                    <S.YearItem> 2017 </S.YearItem>
                    <S.YearItem> 2020 </S.YearItem>
                    <S.YearItem> 2022 </S.YearItem>
                    <S.YearItem> 2024/2025 </S.YearItem>
                </S.Years>

                <S.Descriptions>
                    <Description
                        type="school"
                        class={S.descriptionItemClass}
                    />
                    <Description
                        type="work"
                        class={S.descriptionItemClass}
                    />
                    <Description
                        type="health"
                        class={S.descriptionItemClass}
                    />
                    <Description
                        type="ascension"
                        class={S.descriptionItemClass}
                    />
                </S.Descriptions>
            </S.TopGuide>
        </S.Section>
    )
})
