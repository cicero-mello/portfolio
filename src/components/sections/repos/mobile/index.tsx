import { useLanguageContext } from "~/context/language"
import { getSectionDataBySectionName } from "../core"
import { component$ } from "@builder.io/qwik"
import { Section } from "./section"
import * as S from "./styles.css"

export const Mobile = component$(() => {
    const language = useLanguageContext()

    const sectionDataBySectionName = getSectionDataBySectionName(
        "mobile",
        language.value
    )

    return (
        <S.Section key={language.value + "-repos-mobile-text"}>
            {[...sectionDataBySectionName].map(([, value], i) => (
                <Section
                    {...value}
                    key={value.name + "-rsmm-" + i}
                />
            ))}
        </S.Section>
    )
})
