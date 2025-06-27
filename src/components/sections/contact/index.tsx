import MyselfImage from "../../../../assets/images/me-purple.webp?w=1080&h=1080&jsx"
import { $, component$, useId, useSignal, useVisibleTask$ } from "@builder.io/qwik"
import { InstagramSVG, LinkedInSVG } from "~/components/svg"
import { TrianglesLayer } from "./triangles-layer"
import { gsap } from "~/gsap/contact-section"
import { DynamicText } from "./dynamic-text"
import { ContactText } from "./contact-text"
import { startGlitch } from "cm-glitch"
import { useEmphasis } from "~/hooks"
import { Colors } from "~/styles"
import * as S from "./styles.css"
import { Email } from "./email"

export const ContactSection = component$(() => {
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

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(() => {
        applyTransitionInPaths(linkedInAnchorRef.value!)
        applyTransitionInPaths(instagramAnchorRef.value!)
        gsap.triggerInContactSection()
    })

    const handleClickImageWrapper = $(() => {
        startGlitch(imageWrapperId, {
            noObservers: true
        })
    })

    return (
        <S.SectionWrapper class="contact-section-wrapper">
            <S.Section class="contact-section">
                <TrianglesLayer />
                <DynamicText />
                <S.ContactWrapper>
                    <ContactText class={S.ContactClass} />
                    <S.ContactContent>
                        <S.MeImageWrapper
                            id={imageWrapperId}
                            onClick$={handleClickImageWrapper}
                        >
                            <MyselfImage class={S.ImageClass} alt="Cícero Mello" />
                        </S.MeImageWrapper>
                        <S.InfoWrapper>
                            <Email />
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
