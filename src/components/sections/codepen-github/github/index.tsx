import { component$, type HTMLAttributes, isServer, useSignal, useTask$ } from "@builder.io/qwik"
import { useLanguageContext } from "~/context/language"
import { getTextsByLanguage } from "~/languages"
import { GitHubSVG } from "~/components/svg"
import { useEmphasis } from "~/hooks"
import { Colors } from "~/styles"
import * as S from "./styles.css"

export const GitHubSection = component$((
    props: HTMLAttributes<HTMLElement>
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
        <S.Section {...props}>
            <S.Text>
                <span>{texts.codePenGitHubSection.t3}</span>
                <span>
                    {texts.codePenGitHubSection.t4} <S.Anchor
                        children="GitHub"
                        target="_blank"
                        href="https://github.com/cicero-mello"
                        ref={anchorRef}
                    />
                </span>
            </S.Text>
            <a
                ref={svgAnchorRef}
                tabIndex={-1}
                aria-disabled="true"
                target="_blank"
                href="https://github.com/cicero-mello"
            >
                <GitHubSVG
                    class={S.IconClass}
                    pathColor={Colors.Toast}
                    style={{
                        opacity:
                            (anchorEmphasis.value || svgAnchorEmphasis.value) ?
                                1 : 0.3
                    }}
                />
            </a>
        </S.Section>
    )
})
