import { AnchorIcon } from "~/components/anchor-icon"
import { $, component$, useSignal } from "@builder.io/qwik"
import { useDevice } from "~/context/device"
import type { SectionProps } from "./types"
import * as S from "./styles.css"

export const Section = component$(({
    anchorIcons,
    features,
    image: Image,
    name,
    site
}: SectionProps) => {
    const device = useDevice()
    const anchorRef = useSignal<HTMLElement>()

    const handleImageClick = $(() => {
        if (!anchorRef.value) return
        anchorRef.value.click()
    })

    return (
        <S.Section>
            <S.Anchor
                ref={anchorRef}
                children={name}
                href={site}
                target="_blank"
            />
            <S.MiddleWrapper>
                <S.ImageWrapper onClick$={handleImageClick}>
                    <Image />
                </S.ImageWrapper>
                <S.TextListWrapper>
                    {device.isReposSectionMobileMinWidth && (
                        <S.VerticalIconsWrapper>
                            {anchorIcons.map((anchorIconProps, i) => (
                                <AnchorIcon
                                    class={S.IconClass}
                                    key={name + "-mobile-rs-ai-" + i}
                                    randomRotate={false}
                                    float={false}
                                    {...anchorIconProps}
                                />
                            ))}
                        </S.VerticalIconsWrapper>
                    )}
                    <S.TextList>
                        {features.map((feature, i) => (
                            <S.TextItem
                                children={feature}
                                key={name + "-mobile-rs-ti-" + i}
                            />
                        ))}
                    </S.TextList>
                </S.TextListWrapper>
            </S.MiddleWrapper>
            {!device.isReposSectionMobileMinWidth && (
                <S.IconsWrapper>
                    {anchorIcons.map((anchorIconProps, i) => (
                        <AnchorIcon
                            class={S.IconClass}
                            key={name + "-mobile-rs-ai-" + i}
                            randomRotate={false}
                            float={false}
                            {...anchorIconProps}
                        />
                    ))}
                </S.IconsWrapper>
            )}
        </S.Section>
    )
})
