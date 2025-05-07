import { component$ } from "@builder.io/qwik"
import * as S from "./styles.css"
import { Header, Hero } from "~/components"

export const HelloSection = component$(() => {

    return (
        <S.Section>
            (
            <Header />
            <Hero />
            )
        </S.Section>
    )
})
