import { useLanguageContext } from "~/context/language"
import { getTextsByLanguage } from "~/languages"
import { component$ } from "@builder.io/qwik"
import { QwikSVG } from "~/components/svg"
import { Colors } from "~/styles"
import * as S from "./styles.css"

export const Mobile = component$(() => {
    const language = useLanguageContext()
    const texts = getTextsByLanguage(language.value)

    return (
        <S.Section key={language.value + "-gsap-mobile-text"}>
            <S.TopText>
                {texts.gsapSection.t1} {texts.gsapSection.t2} {texts.gsapSection.t3}
            </S.TopText>
            <S.Card>
                <S.CardTextWrapper>
                    <p>
                        {texts.gsapSection.t4} {texts.gsapSection.t5}
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
