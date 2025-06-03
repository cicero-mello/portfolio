import type { DocumentHead } from "@builder.io/qwik-city"
import { component$, useVisibleTask$ } from "@builder.io/qwik"
import * as S from "./styles.css"
import {
    HelloSection,
    ReactSection,
} from "~/components"
import { initScrollControl } from "~/gsap/scroll-control"

export default component$(() => {

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(() => {
        initScrollControl()
    })

    return (
        <S.Main>
            <HelloSection />
            <ReactSection />
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
