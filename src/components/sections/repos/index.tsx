import { component$, useSignal } from "@builder.io/qwik"
import * as S from "./styles.css"
import { Section } from "./section"
import { SectionName } from "./section/types"

export const ReposSection = component$(() => {
    const name = useSignal<SectionName>("c-streaming")

    return (
        <S.Section onClick$={() => {
            if (name.value === "c-streaming") {
                name.value = "poke-info"
                return
            }
            if (name.value === "poke-info") {
                name.value = "ice-crud"
                return
            }
            name.value = "c-streaming"
        }}>
            <Section name={name.value} />
        </S.Section>
    )
})
