import type { HistoryCardProps } from "./types"
import { component$, useId } from "@builder.io/qwik"
import { AnchorIcon } from "../anchor-icon"
import * as S from "./styles.css"

export const HistoryCard = component$(({
    title,
    anchorIcons,
    description1,
    description2,
    descriptionIcon: DescriptionIcon,
    id: idProp,
    ...rest
}: HistoryCardProps) => {
    // eslint-disable-next-line qwik/use-method-usage
    const id = idProp ?? useId()

    return (
        <S.Section {...rest} id={id}>
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
                }, index) => (
                    <AnchorIcon
                        key={id + index}
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
