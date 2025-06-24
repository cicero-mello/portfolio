import { $, component$, useId, useOnWindow, useSignal } from "@builder.io/qwik"
import * as S from "./styles.css"
import { Section } from "./section"
import type { SectionName } from "./section/types"
import { gsap } from "~/gsap/repos-section"
import { startGlitch } from "cm-glitch"
import { Scrollbar } from "./scrollbar"

const sectionList: SectionName[] = [
    "c-streaming",
    "poke-info",
    "ice-crud"
]

export const ReposSection = component$(() => {
    const animationSetupIsDone = useSignal(false)

    const sectionRef = useSignal<HTMLElement>()
    const sectionId = useId()
    const glitchWrapperId = useId()
    const percent = useSignal(0)

    const currentSection = useSignal<SectionName>("c-streaming")
    const sectionIndex = useSignal(0)

    const onProgress = $((progress: number) => {
        percent.value = progress
    })

    const sectionChangeGlitch = $(() => {
        startGlitch(glitchWrapperId, {
            noObservers: true,
            distortionIntensity: 100,
            maxDistortionY: 100
        })
    })

    const handleNextSection = $(() => {
        if (sectionIndex.value === sectionList.length - 1) {
            sectionIndex.value = 0
            currentSection.value = sectionList[sectionIndex.value]
            sectionChangeGlitch()
            return
        }
        sectionIndex.value += 1
        currentSection.value = sectionList[sectionIndex.value]
        sectionChangeGlitch()
    })

    const handlePreviousSection = $(() => {
        if (sectionIndex.value === 0) {
            sectionIndex.value = sectionList.length - 1
            currentSection.value = sectionList[sectionIndex.value]
            sectionChangeGlitch()
            return
        }
        sectionIndex.value -= 1
        currentSection.value = sectionList[sectionIndex.value]
        sectionChangeGlitch()
    })

    const showAll = $(() => {
        sectionRef.value!.style.visibility = "unset"
        startGlitch(sectionId, {
            noObservers: true,
            direction: "reverse",
            animationTime: 300,
            maxDistortionX: 100,
            maxDistortionY: 30
        })
    })

    const setupAnimations = $(() => {
        if (animationSetupIsDone.value) return
        animationSetupIsDone.value = true
        gsap.showInTrigger(showAll)
        gsap.changeSectionTrigger(
            sectionList.length,
            handleNextSection,
            handlePreviousSection,
            onProgress
        )
    })

    useOnWindow("scroll", setupAnimations)
    useOnWindow("keydown", setupAnimations)

    return (
        <S.Section
            id={sectionId}
            ref={sectionRef}
            class="repos-section"
            style={{ visibility: "hidden" }}
        >
            <Scrollbar percent={percent.value} markers={3} />
            <S.GlitchWrapper id={glitchWrapperId}>
                <Section
                    name="c-streaming"
                    isVisible={currentSection.value === "c-streaming"}
                />
                <Section
                    name="poke-info"
                    isVisible={currentSection.value === "poke-info"}
                />
                <Section
                    name="ice-crud"
                    isVisible={currentSection.value === "ice-crud"}
                />
            </S.GlitchWrapper>
        </S.Section>
    )
})
