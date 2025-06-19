import { component$, type HTMLAttributes, useSignal } from "@builder.io/qwik"
import { CodePenSVG } from "~/components/svg"
import { useEmphasis } from "~/hooks"
import { Colors } from "~/styles"
import * as S from "./styles.css"

export const CodePenSection = component$((
    props: HTMLAttributes<HTMLElement>
) => {
    const anchorRef = useSignal<HTMLElement>()
    const anchorEmphasis = useEmphasis(anchorRef)

    return (
        <S.Section {...props}>
            <S.TextWrapper>
                <S.Text>
                    You can check <br />
                    my <S.Anchor
                        children="CodePen"
                        target="_blank"
                        href="https://codepen.io/cicero-mello"
                        ref={anchorRef}
                    />
                </S.Text>
                <CodePenSVG
                    class={S.IconClass}
                    style={{ opacity: anchorEmphasis.value ? 1 : 0.3 }}
                    pathColor={Colors.Toast}
                />
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
