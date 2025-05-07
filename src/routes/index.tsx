import type { DocumentHead } from "@builder.io/qwik-city"
import { component$ } from "@builder.io/qwik"
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
} from "~/components/sections/"

export default component$(() => {
    return (
        <S.Main>
            <HelloSection />

            <S.HorizontalWrapper>
                <ReactSection />
                <HistorySection />
            </S.HorizontalWrapper>

            <S.HorizontalWrapper>
                <GsapSection />
                <QuestionSection />
                <CodePenGitHubSection />
            </S.HorizontalWrapper>

            <ReposSection />
            <ContactSection />
        </S.Main>
    )
})

export const head: DocumentHead = {
    title: "Cícero Mello | Software Developer",
    meta: [
        {
            name: "description",
            content: "Description Content",
        },
    ],
}
