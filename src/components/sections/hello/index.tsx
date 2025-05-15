import { component$ } from "@builder.io/qwik"
import { Header } from "../../header"
import { Hero } from "../../hero"
import * as S from "./styles.css"

export const HelloSection = component$(() => {

    return (
        <S.Section>
            <Header />
            <Hero />
            <S.ScrollDownButton
                children="Scroll Down"
            />
        </S.Section>
    )
})
