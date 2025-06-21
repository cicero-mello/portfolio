import { component$, type HTMLAttributes, useSignal } from "@builder.io/qwik"
import { GitHubSVG } from "~/components/svg"
import { useEmphasis } from "~/hooks"
import { Colors } from "~/styles"
import * as S from "./styles.css"

export const GitHubSection = component$((
    props: HTMLAttributes<HTMLElement>
) => {
    const anchorRef = useSignal<HTMLElement>()
    const anchorEmphasis = useEmphasis(anchorRef)

    return (
        <S.Section {...props}>
            <S.Text>
                <span>Or check my public repos </span>
                <span>
                    on <S.Anchor
                        children="GitHub"
                        target="_blank"
                        href="https://github.com/cicero-mello"
                        ref={anchorRef}
                    />
                </span>
            </S.Text>
            <GitHubSVG
                class={S.IconClass}
                pathColor={Colors.Toast}
                style={{ opacity: anchorEmphasis.value ? 1 : 0.3 }}
            />
        </S.Section>
    )
})
