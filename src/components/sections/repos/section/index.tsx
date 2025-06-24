import { $, component$, isServer, useSignal, useTask$ } from "@builder.io/qwik"
import { AnchorIcon } from "~/components/anchor-icon"
import { useEmphasis, useRotate3D } from "~/hooks"
import { sectionDataBySectionName } from "./core"
import type { SectionProps } from "./types"
import * as S from "./styles.css"

export const Section = component$(({
    name, isVisible
}: SectionProps) => {
    const data = sectionDataBySectionName.get(name)!
    const Image = data.image

    const anchorRef = useSignal<HTMLElement>()
    const imageWrapperRef = useSignal<HTMLElement>()
    const imageEmphasis = useEmphasis(anchorRef)
    const anchorEmphasis = useEmphasis(imageWrapperRef)

    useRotate3D(imageWrapperRef, {
        maxRotateX: 20,
        maxRotateY: 18
    })

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
        if (!anchorRef.value) return
        anchorRef.value.click()
    })

    return (
        <S.Section style={{
            display: isVisible ? "flex" : "none"
        }}>
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
                    {data.anchorIcons.map((anchorIconProps, index) => (
                        <AnchorIcon
                            class={S.IconClass}
                            key={name + "repos-sec-anchor-key-" + index}
                            randomRotate={false}
                            {...anchorIconProps}
                        />
                    ))}
                </S.IconsWrapper>
                <S.TextList>
                    {data.features.map((feature, index) => (
                        <S.TextItem key={name + "repos-sec-ti-key-" + index}>
                            {feature}
                        </S.TextItem>
                    ))}
                </S.TextList>
            </S.RightWrapper>
        </S.Section>
    )
})
