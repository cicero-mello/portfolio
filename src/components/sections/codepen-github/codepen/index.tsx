import { component$, type HTMLAttributes, isServer, useSignal, useTask$ } from "@builder.io/qwik"
import { CodePenSVG } from "~/components/svg"
import { useEmphasis } from "~/hooks"
import { Colors } from "~/styles"
import * as S from "./styles.css"
import { useLanguageContext } from "~/context/language"
import { getTextsByLanguage } from "~/languages"

export const CodePenSection = component$((
    textWrapperProps: HTMLAttributes<HTMLElement>
) => {
    const language = useLanguageContext()
    const texts = getTextsByLanguage(language.value)

    const anchorRef = useSignal<HTMLElement>()
    const anchorEmphasis = useEmphasis(anchorRef)

    const svgAnchorRef = useSignal<HTMLElement>()
    const svgAnchorEmphasis = useEmphasis(svgAnchorRef)

    useTask$(({ track }) => {
        track(svgAnchorEmphasis)
        if (isServer) return
        if (svgAnchorEmphasis.value) {
            anchorRef.value?.classList.add("emphasis")
            return
        }
        anchorRef.value?.classList.remove("emphasis")
    })

    return (
        <S.Section>
            <S.TextWrapper {...textWrapperProps}>
                <S.Text>
                    {texts.codePenGitHubSection.t1} <br />
                    {texts.codePenGitHubSection.t2} <S.Anchor
                        children="CodePen"
                        target="_blank"
                        href="https://codepen.io/cicero-mello"
                        ref={anchorRef}
                    />
                </S.Text>
                <a
                    aria-disabled="true"
                    tabIndex={-1}
                    href="https://codepen.io/cicero-mello"
                    target="_blank"
                    ref={svgAnchorRef}
                >
                    <CodePenSVG
                        class={S.IconClass}
                        style={{
                            opacity:
                                (anchorEmphasis.value || svgAnchorEmphasis.value) ? 1 : 0.3
                        }}
                        pathColor={Colors.Toast}
                    />
                </a>
            </S.TextWrapper>
            <S.IframeWrapper>
                <iframe
                    class={S.IframeClass}
                    title="My First Cube"
                    src="https://codepen.io/cicero-mello/embed/dyevEYg?default-tab=result"
                    loading="lazy"
                />
            </S.IframeWrapper>
        </S.Section>
    )
})
