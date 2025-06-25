import { getSectionDataBySectionName } from "../core"
import { component$ } from "@builder.io/qwik"
import { Section } from "./section"
import * as S from "./styles.css"

const sectionDataBySectionName = getSectionDataBySectionName("mobile")

export const Mobile = component$(() => {

    return (
        <S.Section>
            {[...sectionDataBySectionName].map(([, value], i) => (
                <Section
                    {...value}
                    key={value.name + "-rsmm-" + i}
                />
            ))}
        </S.Section>
    )
})
