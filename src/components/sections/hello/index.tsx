import { component$ } from "@builder.io/qwik"
import * as S from "./styles.css"
import { Header } from "../../header"
import { Hero } from "../../hero"

export const HelloSection = component$(() => {

    return (
        <S.Section>
            <Header />
            <Hero />
        </S.Section>
    )
})
