import { $, component$, isServer, useId, useOnWindow, useSignal, useTask$, useVisibleTask$ } from "@builder.io/qwik"
import { useLanguageContext } from "~/context/language"
import { gsap } from "~/gsap/codepen-github-section"
import { getTextsByLanguage } from "~/languages"
import { useDevice } from "~/context/device"
import { CodePenSection } from "./codepen"
import { GitHubSection } from "./github"
import { startGlitch } from "cm-glitch"
import * as S from "./styles.css"

export const CodePenGitHubSection = component$(() => {
    const language = useLanguageContext()
    const texts = getTextsByLanguage(language.value)

    const device = useDevice()

    const titleId = useId()
    const codePenSectionId = useId()
    const gitHubSectionId = useId()

    const sectionRef = useSignal<HTMLElement>()
    const titleRef = useSignal<HTMLElement>()
    const codePenSectionRef = useSignal<HTMLElement>()
    const gitHubSectionRef = useSignal<HTMLElement>()

    const animationSetupIsDone = useSignal(false)

    const startAnimations = $(async () => {
        titleRef.value!.style.visibility = "unset"
        await startGlitch(titleId, {
            animationTime: 300,
            direction: "reverse",
            distortionIntensity: 80,
            maxDistortionY: 30,
            maxDistortionX: 300,
            earlyCleanup: true
        })

        codePenSectionRef.value!.style.visibility = "unset"
        await startGlitch(codePenSectionId, {
            animationTime: 400,
            distortionIntensity: 90,
            maxDistortionX: 40,
            maxDistortionY: 0,
            earlyCleanup: true
        })

        gitHubSectionRef.value!.style.visibility = "unset"
        startGlitch(gitHubSectionId, {
            animationTime: 800,
            earlyCleanup: true
        })
    })

    const setupAnimations = $(() => {
        if (
            isServer
            || animationSetupIsDone.value
            || device.type === "mobile"
        ) return
        animationSetupIsDone.value = true
        gsap.triggerInCodePenGitHubSection(
            startAnimations
        )
    })

    useOnWindow("scroll", setupAnimations)
    useOnWindow("keydown", setupAnimations)

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(() => {
        if (device.type === "mobile") {
            sectionRef.value?.classList.add("mobile")
        }
    })

    useTask$(({ track }) => {
        track(language)
        if (isServer) return
        animationSetupIsDone.value = false
    })

    return (
        <S.Section
            class="codepen-github-section"
            ref={sectionRef}
            key={language.value + "-codepen-github-section"}
        >
            <S.Title
                id={titleId}
                ref={titleRef}
                style={{
                    visibility: device.type === "mobile" ?
                        "unset" : "hidden"
                }}
            >
                {texts.codePenGitHubSection.title}
            </S.Title>
            <CodePenSection
                id={codePenSectionId}
                ref={codePenSectionRef}
                style={{
                    visibility: device.type === "mobile" ?
                        "unset" : "hidden"
                }}
            />
            <GitHubSection
                id={gitHubSectionId}
                ref={gitHubSectionRef}
                style={{
                    visibility: device.type === "mobile" ?
                        "unset" : "hidden"
                }}
            />
        </S.Section>
    )
})
