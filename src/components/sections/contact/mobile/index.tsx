import MyselfImage from "../../../../../assets/images/me-purple.webp?quality=100&jsx"
import { InstagramSVG, LinkedInSVG } from "~/components/svg"
import { component$, useSignal } from "@builder.io/qwik"
import { useLanguageContext } from "~/context/language"
import { ContactTextPtBR } from "../contact-text-pt-br"
import { ContactText } from "../contact-text"
import { useEmphasis } from "~/hooks"
import { Colors } from "~/styles"
import * as S from "./styles.css"
import { Email } from "./email"

export const Mobile = component$(() => {
    const language = useLanguageContext()

    const linkedInAnchorRef = useSignal<HTMLElement>()
    const instagramAnchorRef = useSignal<HTMLElement>()

    const linkedInEmphasis = useEmphasis(linkedInAnchorRef)
    const instagramEmphasis = useEmphasis(instagramAnchorRef)

    return (
        <S.SectionWrapper>
            <S.Section>
                {language.value === "en" ?
                    <ContactText class={S.ContactClass} /> :
                    <ContactTextPtBR class={S.ContactClass} />
                }
                <Email />
                <S.BottomWrapper>
                    <MyselfImage class={S.ImageClass} alt="Cícero Mello" />
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
                </S.BottomWrapper>
            </S.Section>
        </S.SectionWrapper>
    )
})
