import { component$ } from "@builder.io/qwik"
import type { HistoryCardProps } from "./types"
import * as S from "./styles.css"
import { Colors } from "~/styles"

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
                <DescriptionIcon class={S.DescriptionIconClass} />
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
                    <S.AnchorIcon
                        href={href}
                        aria-label={ariaLabel}
                        target="_blank"
                    >
                        <Icon
                            pathColor={Colors.Fawn}
                            style={{
                                width: "100%",
                                height: "auto"
                            }}
                        />
                    </S.AnchorIcon>
                ))}
            </S.IconsWrapper>
        </S.Section>
    )
})
