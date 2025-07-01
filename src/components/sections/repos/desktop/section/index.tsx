import { $, component$, isServer, useSignal, useTask$ } from "@builder.io/qwik"
import { getSectionDataBySectionName } from "../../core"
import { useLanguageContext } from "~/context/language"
import { AnchorIcon } from "~/components/anchor-icon"
import { useEmphasis, useRotate3D } from "~/hooks"
import type { SectionProps } from "./types"
import * as S from "./styles.css"

export const Section = component$(({
    sectionNameSignal
}: SectionProps) => {
    const language = useLanguageContext()

    const data = useSignal(getSectionDataBySectionName(
        "desktop",
        language.value
    ).get(sectionNameSignal.value)!)

    const Image = data.value.image

    const anchorRef = useSignal<HTMLElement>()
    const imageWrapperRef = useSignal<HTMLElement>()
    const imageEmphasis = useEmphasis(anchorRef)
    const anchorEmphasis = useEmphasis(imageWrapperRef)

    const handleClickImage = $(() => {
        if (!anchorRef.value) return
        anchorRef.value.click()
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

    useTask$(({ track }) => {
        track(sectionNameSignal)
        if (isServer) return
        data.value = getSectionDataBySectionName(
            "desktop",
            language.value
        ).get(sectionNameSignal.value)!
    })

    useTask$(({ track }) => {
        track(language)
        if (isServer) return
        data.value = getSectionDataBySectionName(
            "desktop",
            language.value
        ).get(sectionNameSignal.value)!
    })

    useRotate3D(imageWrapperRef, {
        maxRotateX: 20,
        maxRotateY: 18
    })

    return (
        <S.Section>
            <S.LeftWrapper>
                <S.Anchor
                    ref={anchorRef}
                    children={data.value.name}
                    href={data.value.site}
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
                    {data.value.anchorIcons.map((anchorIconProps, index) => (
                        <AnchorIcon
                            class={S.IconClass}
                            key={data.value.name + "repos-sec-anchor-key-" + index}
                            randomRotate={false}
                            {...anchorIconProps}
                        />
                    ))}
                </S.IconsWrapper>
                <S.TextList key={language.value + "repos-desktop-text"}>
                    {data.value.features.map((feature, index) => (
                        <S.TextItem
                            key={data.value.name + "repos-sec-ti-key-" + index}
                        >
                            {feature}
                        </S.TextItem>
                    ))}
                </S.TextList>
            </S.RightWrapper>
        </S.Section>
    )
})
