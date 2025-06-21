import { $, component$, isServer, useId, useOnWindow, useSignal } from "@builder.io/qwik"
import { gsap } from "~/gsap/codepen-github-section"
import { useDevice } from "~/context/device"
import { CodePenSection } from "./codepen"
import { GitHubSection } from "./github"
import { startGlitch } from "cm-glitch"
import * as S from "./styles.css"
import { delay } from "~/utils"

export const CodePenGitHubSection = component$(() => {
    const device = useDevice()

    const titleId = useId()
    const codePenSectionId = useId()
    const gitHubSectionId = useId()

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
            maxDistortionX: 300
        })

        await delay(800)
        codePenSectionRef.value!.style.visibility = "unset"
        await startGlitch(codePenSectionId, {
            animationTime: 400,
            distortionIntensity: 90,
            maxDistortionX: 40,
            maxDistortionY: 0
        })

        await delay(800)
        gitHubSectionRef.value!.style.visibility = "unset"
        startGlitch(gitHubSectionId, {
            animationTime: 800
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

    return (
        <S.Section class="codepen-github-section">
            <S.Title
                id={titleId}
                ref={titleRef}
                style={{
                    visibility: device.type === "mobile" ?
                        "unset" : "hidden"
                }}
            >
                Want to see my code?
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
