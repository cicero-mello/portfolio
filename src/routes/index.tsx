import type { DocumentHead } from "@builder.io/qwik-city"
import { component$ } from "@builder.io/qwik"
import * as S from "./styles.css"
import {
    HelloSection,
    HistorySection,
    ReactSection,
} from "~/components"

export default component$(() => {

    return (
        <S.Main>
            <HelloSection />
            <ReactSection />
            <HistorySection />
            <h1>Hello</h1>
        </S.Main>
    )
})

export const head: DocumentHead = {
    title: "Cícero Mello",
    meta: [
        {
            name: "description",
            content: "Description Content",
        },
    ],
}
