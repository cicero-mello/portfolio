import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik"
import * as S from "./styles.css"
import { Section } from "./section"
import { SectionName } from "./section/types"
import { gsap } from "~/gsap/repos-section"
import { startGlitch } from "cm-glitch"
import { Scrollbar } from "./scrollbar"

const sectionList: SectionName[] = [
    "c-streaming",
    "poke-info",
    "ice-crud"
]

export const ReposSection = component$(() => {
    const percent = useSignal(0)

    const currentSection = useSignal<SectionName>("c-streaming")
    const sectionIndex = useSignal(0)

    const onProgress = $((progress: number) => {
        console.log(progress)
        percent.value = progress
    })

    const newGlitch = $(() => {
        startGlitch("repo-glitch", {
            noObservers: true,
            // direction: "reverse",
            animationTime: 300,
            distortionIntensity: 100,
            maxDistortionY: 100,
            maxDistortionX: 0
        })
    })

    const handleNextSection = $(() => {
        if (sectionIndex.value === sectionList.length - 1) {
            sectionIndex.value = 0
            currentSection.value = sectionList[sectionIndex.value]
            newGlitch()
            return
        }
        sectionIndex.value += 1
        currentSection.value = sectionList[sectionIndex.value]
        newGlitch()
    })

    const handlePreviousSection = $(() => {
        if (sectionIndex.value === 0) {
            sectionIndex.value = sectionList.length - 1
            currentSection.value = sectionList[sectionIndex.value]
            newGlitch()
            return
        }
        sectionIndex.value -= 1
        currentSection.value = sectionList[sectionIndex.value]
        newGlitch()
    })

    useVisibleTask$(() => {
        gsap.changeSectionTrigger(
            sectionList.length,
            handleNextSection,
            handlePreviousSection,
            onProgress
        )
    })

    return (
        <S.Section
            class="repos-section"
        >
            <Scrollbar percent={percent.value} markers={3} />
            <S.GlitchWrapper id="repo-glitch">
                <Section name={currentSection.value} />
            </S.GlitchWrapper>
        </S.Section>
    )
})
