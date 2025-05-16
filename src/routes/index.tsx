import type { DocumentHead } from "@builder.io/qwik-city"
import { component$, useVisibleTask$ } from "@builder.io/qwik"
import * as S from "./styles.css"
import {
    CodePenGitHubSection,
    ContactSection,
    GsapSection,
    HelloSection,
    HistorySection,
    QuestionSection,
    ReactSection,
    ReposSection
} from "~/components"
import { initScrollControl } from "~/gsap/scroll-control"

export default component$(() => {

    useVisibleTask$(async () => {
        initScrollControl()
    })

    return (
        <S.Main>
            <HelloSection />

            <S.HorizontalWrapper1 class="h-section-1">
                <ReactSection />
                <HistorySection />
            </S.HorizontalWrapper1>

            <S.HorizontalWrapper2 class="h-section-2">
                <GsapSection />
                <QuestionSection />
                <CodePenGitHubSection />
            </S.HorizontalWrapper2>

            <ReposSection />
            <ContactSection />
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
