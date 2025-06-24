import { component$ } from "@builder.io/qwik"
import type { ScrollbarProps } from "./types"
import * as S from "./styles.css"

export const Scrollbar = component$(({
    percent, markers
}: ScrollbarProps) => {

    return (
        <S.Wrapper>
            <S.ScrollWrapper>
                <S.ScrollItem
                    style={{ top: percent + "%" }}
                />
            </S.ScrollWrapper>
            <S.MarkersWrapper>
                {Array.from({ length: markers + 1 }).map((_, i) => {
                    const threshold = (100 / markers) * i
                    const isSurpassed = (
                        i === 0 || percent > threshold
                    )

                    return (
                        <S.Marker
                            key={`repos-scrollbar-marker-${i}`}
                            class={isSurpassed ? "surpassed" : ""}
                        />
                    )
                })}
            </S.MarkersWrapper>
        </S.Wrapper>
    )
})
