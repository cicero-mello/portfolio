import { component$ } from "@builder.io/qwik"
import { QwikSVG } from "~/components/svg"
import { Colors } from "~/styles"
import * as S from "./styles.css"

export const Mobile = component$(() => {

    return (
        <S.Section>
            <S.TopText>
                I enjoy learning on my own and use AI to
                explore any tech that interests me
            </S.TopText>
            <S.Card>
                <S.CardTextWrapper>
                    <p>
                        For instance, this was my
                        first time experimenting with
                    </p>
                    <S.Anchor
                        children="Qwik"
                        href="https://qwik.dev/"
                        target="_blank"
                    />
                </S.CardTextWrapper>
                <QwikSVG
                    class={S.IconClass}
                    pathColor={Colors.Onyx}
                    bgColor={Colors.Fawn}
                />
            </S.Card>
        </S.Section>
    )
})
