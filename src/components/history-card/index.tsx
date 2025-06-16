import type { HistoryCardProps } from "./types"
import { component$ } from "@builder.io/qwik"
import { AnchorIcon } from "../anchor-icon"
import * as S from "./styles.css"

export const HistoryCard = component$(({
    title,
    anchorIcons,
    description1,
    description2,
    descriptionIcon: DescriptionIcon,
    ...rest
}: HistoryCardProps) => {

    return (
        <S.Section {...rest}>
            <S.Title children={title} />
            <S.DescriptionWrapper>
                <DescriptionIcon class={S.IconClass} />
                <S.DescriptionTextWrapper>
                    <S.DescriptionText>{description1}</S.DescriptionText>
                    <S.DescriptionText>{description2}</S.DescriptionText>
                </S.DescriptionTextWrapper>
            </S.DescriptionWrapper>
            <S.IconsWrapper>
                {anchorIcons.map(({
                    ariaLabel,
                    href,
                    icon: Icon
                }) => (
                    <AnchorIcon
                        ariaLabel={ariaLabel}
                        href={href}
                        svgComponent={Icon}
                        class={S.IconClass}
                    >
                    </AnchorIcon>
                ))}
            </S.IconsWrapper>
        </S.Section>
    )
})
