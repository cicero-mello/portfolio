import { $, component$, useOnWindow } from "@builder.io/qwik"
import type { DocumentHead } from "@builder.io/qwik-city"
import { useDevice } from "~/context/device"
import * as S from "./styles.css"
import {
    CodePenGitHubSection,
    ContactSection,
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
            <ContactSection />
        </S.Main>
    )
})

export const head: DocumentHead = {
    title: "Cícero Mello | Front-End Developer",
    meta: [
        {
            name: "description",
            content:
                "I'm Cícero Mello, a front-end developer focused on React, animations, and building modern web interfaces."
        },
        {
            property: "og:title",
            content: "Cícero Mello - Front-End Developer"
        },
        {
            property: "og:description",
            content: "Explore my projects and know more about me!"
        },
        {
            property: "og:type",
            content: "website"
        },
        {
            property: "og:url",
            content: "https://ciceromello.com"
        },
        {
            property: "og:image",
            content: "https://ciceromello.com/og-image.jpg"
        },
        {
            name: "twitter:card",
            content: "summary_large_image"
        },
        {
            name: "twitter:title",
            content: "Cícero Mello | Front-End Developer"
        },
        {
            name: "twitter:description",
            content: "Explore my projects and know more about me!"
        },
        {
            name: "twitter:image",
            content: "https://ciceromello.com/og-image.jpg"
        },
    ],
    links: [
        {
            rel: "canonical",
            href: "https://ciceromello.com",
        },
    ]
}
