import { $, component$, isServer, useSignal, useTask$ } from "@builder.io/qwik"
import { AnchorIcon } from "~/components/anchor-icon"
import { sectionDataBySectionName } from "./core"
import { SectionProps } from "./types"
import { useEmphasis } from "~/hooks"
import * as S from "./styles.css"

export const Section = component$(({
    name
}: SectionProps) => {
    const data = sectionDataBySectionName.get(name)!
    const Image = data.image

    const anchorRef = useSignal<HTMLElement>()
    const imageWrapperRef = useSignal<HTMLElement>()

    const imageEmphasis = useEmphasis(anchorRef)
    const anchorEmphasis = useEmphasis(imageWrapperRef)

    useTask$(({ track }) => {
        track(imageEmphasis)
        if (isServer || !imageWrapperRef.value) return
        if (imageEmphasis.value) imageWrapperRef.value.classList.add("emphasis")
        else imageWrapperRef.value.classList.remove("emphasis")
    })
    useTask$(({ track }) => {
        track(anchorEmphasis)
        if (isServer || !anchorRef.value) return
        if (anchorEmphasis.value) anchorRef.value.classList.add("emphasis")
        else anchorRef.value.classList.remove("emphasis")
    })

    const handleClickImage = $(() => {
        if (!anchorRef.value || !anchorRef.value.click) return
        anchorRef.value.click()
    })

    return (
        <S.Section>
            <S.LeftWrapper>
                <S.Anchor
                    ref={anchorRef}
                    children={data.name}
                    href={data.site}
                    target="_blank"
                />
                <S.ImageWrapper
                    ref={imageWrapperRef}
                    onClick$={handleClickImage}
                >
                    <Image />
                </S.ImageWrapper>
            </S.LeftWrapper>
            <S.RightWrapper>
                <S.IconsWrapper>
                    {data.anchorIcons.map((anchorIconProps) => (
                        <AnchorIcon
                            class={S.IconClass}
                            {...anchorIconProps}
                            randomRotate={false}
                        // float={false}
                        />
                    ))}
                </S.IconsWrapper>
                <S.TextList>
                    {data.features.map((feature) => (
                        <S.TextItem>{feature}</S.TextItem>
                    ))}
                </S.TextList>
            </S.RightWrapper>
        </S.Section>
    )
})
