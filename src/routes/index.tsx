import type { DocumentHead } from "@builder.io/qwik-city"
import { $, component$, useOnWindow } from "@builder.io/qwik"
import { useDevice } from "~/context/device"
import * as S from "./styles.css"
import {
    CodePenGitHubSection,
    GSAPSection,
    HelloSection,
    HistorySection,
    ReactSection,
    ReposSection,
} from "~/components"

export default component$(() => {
    const device = useDevice()

    useOnWindow("resize", $(() => {
        if (device.type === "desktop") {
            window.scrollTo(0, 0)
        }
    }))

    return (
        <S.Main id="smooth-content">
            <HelloSection />
            <ReactSection />
            <HistorySection />
            <GSAPSection />
            <CodePenGitHubSection />
            <ReposSection />
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
