import MyselfImage from "../../../../../assets/images/me-purple.webp?w=1080&h=1080&jsx"
import { $, component$, useId, useSignal, useVisibleTask$ } from "@builder.io/qwik"
import { InstagramSVG, LinkedInSVG } from "~/components/svg"
import { useLanguageContext } from "~/context/language"
import { TrianglesLayer } from "./triangles-layer"
import { gsap } from "~/gsap/contact-section"
import { DynamicText } from "./dynamic-text"
import { ContactText } from "../contact-text"
export { ContactTextPtBR } from "../contact-text-pt-br"
import { startGlitch } from "cm-glitch"
import { useEmphasis } from "~/hooks"
import { Colors } from "~/styles"
import { Email } from "./email"
import * as S from "./styles.css"
import { ContactTextPtBR } from "../contact-text-pt-br"

export const Desktop = component$(() => {
    const language = useLanguageContext()

    const emailButtonRef = useSignal<HTMLElement>()
    const sectionRef = useSignal<HTMLElement>()

    const imageWrapperId = useId()
    const linkedInAnchorRef = useSignal<HTMLElement>()
    const instagramAnchorRef = useSignal<HTMLElement>()

    const linkedInEmphasis = useEmphasis(linkedInAnchorRef)
    const instagramEmphasis = useEmphasis(instagramAnchorRef)

    const applyTransitionInPaths = $((fatherElement: HTMLElement) => {
        const paths = fatherElement.querySelectorAll("path")
        paths.forEach((path) => {
            path.style.transition = "120ms ease-in-out"
        })
    })

    const redirectFirstFocus = $(() => {
        document.addEventListener("focusin", () => {
            if (
                !emailButtonRef.value
                || !sectionRef.value?.classList.contains("visible")
            ) return
            emailButtonRef.value.focus()
        }, {
            capture: true,
            once: true
        })
    })

    const removeFocus = $(async () => {
        if (document.activeElement) {
            const elemento = document.activeElement as HTMLElement
            elemento.blur()
        }
    })

    const enableCyclicFocus = $((): void => {
        if (!emailButtonRef.value || !instagramAnchorRef.value) return

        emailButtonRef.value.addEventListener('keydown', (e: KeyboardEvent) => {
            if (e.key === 'Tab' && e.shiftKey) {
                e.preventDefault()
                instagramAnchorRef.value!.focus()
            }
        })

        instagramAnchorRef.value.addEventListener('keydown', (e: KeyboardEvent) => {
            if (e.key === 'Tab' && !e.shiftKey) {
                e.preventDefault()
                emailButtonRef.value!.focus()
            }
        })
    })

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(() => {
        applyTransitionInPaths(linkedInAnchorRef.value!)
        applyTransitionInPaths(instagramAnchorRef.value!)
        enableCyclicFocus()
        gsap.triggerInContactSection(
            redirectFirstFocus,
            removeFocus
        )
    })

    const handleClickImageWrapper = $(() => {
        startGlitch(imageWrapperId, {
            earlyCleanup: true
        })
    })

    return (
        <S.SectionWrapper class="contact-section-wrapper">
            <S.Section class="contact-section" ref={sectionRef}>
                <TrianglesLayer />
                <DynamicText />
                <S.ContactWrapper>
                    {language.value === "en" ?
                        <ContactText class={S.ContactClass} /> :
                        <ContactTextPtBR class={S.ContactClass} />
                    }
                    <S.ContactContent>
                        <S.MeImageWrapper
                            id={imageWrapperId}
                            onClick$={handleClickImageWrapper}
                        >
                            <MyselfImage class={S.ImageClass} alt="Cícero Mello" />
                        </S.MeImageWrapper>
                        <S.InfoWrapper>
                            <Email buttonRef={emailButtonRef} />
                            <S.AnchorsWrapper>
                                <S.Anchor
                                    ref={linkedInAnchorRef}
                                    aria-label="LinkedIn"
                                    href="https://www.linkedin.com/in/cicero-mello"
                                    target="_blank"
                                >
                                    <LinkedInSVG
                                        class={S.SVGClass}
                                        pathColor={
                                            linkedInEmphasis.value ?
                                                Colors.Cloud : Colors.Lavender
                                        }
                                    />
                                </S.Anchor>
                                <S.Anchor
                                    ref={instagramAnchorRef}
                                    aria-label="Instagram"
                                    href="https://www.instagram.com/umcicero/"
                                    target="_blank"
                                >
                                    <InstagramSVG
                                        class={S.SVGClass}
                                        pathColor={
                                            instagramEmphasis.value ?
                                                Colors.Cloud : Colors.Lavender
                                        }
                                    />
                                </S.Anchor>
                            </S.AnchorsWrapper>
                        </S.InfoWrapper>
                    </S.ContactContent>
                </S.ContactWrapper>
            </S.Section>
        </S.SectionWrapper>
    )
})
