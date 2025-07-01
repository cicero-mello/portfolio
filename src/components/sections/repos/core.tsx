import * as Icon from "~/components/svg"
import type { SectionData, SectionName } from "./types"

import CStreaming from "../../../../assets/images/c-streaming.webp?w=1920&h=1440&jsx"
import CStreamingOptimized from "../../../../assets/images/c-streaming.webp?jsx"

import PokeInfo from "../../../../assets/images/poke-info.webp?w=1920&h=1440&jsx"
import PokeInfoOptimized from "../../../../assets/images/poke-info.webp?jsx"

import IceCrud from "../../../../assets/images/ice-crud.webp?w=1920&h=1440&jsx"
import IceCrudOptimized from "../../../../assets/images/ice-crud.webp?jsx"

import { $ } from "@builder.io/qwik"
import type { LanguageType } from "~/context/language"
import { getTextsByLanguage } from "~/languages"
import type { DeviceType } from "~/context/device/types"
import * as DesktopStyles from "./desktop/section/styles.css"
import * as MobileStyles from "./mobile/section/styles.css"

export const getSectionDataBySectionName = (
    deviceType: DeviceType,
    language: LanguageType
) => {
    const text = getTextsByLanguage(language)

    const sectionDataBySectionName = new Map<SectionName, SectionData>([
        ["c-streaming", {
            name: "C-Streaming",
            image: $(() => (
                deviceType === "desktop" ?
                    <CStreaming class={DesktopStyles.ImageClass} alt="C-Streaming" />
                    : <CStreamingOptimized class={MobileStyles.ImageClass} alt="C-Streaming" />
            )),
            site: "https://c-streaming.vercel.app/",
            features: [
                text.repos.cStreaming.f1,
                text.repos.cStreaming.f2,
                text.repos.cStreaming.f3,
                text.repos.cStreaming.f4,
                text.repos.cStreaming.f5,
                text.repos.cStreaming.f6,
            ],
            anchorIcons: [
                {
                    svgComponent: Icon.TypescriptSVG,
                    href: "https://www.typescriptlang.org/",
                    ariaLabel: "Typescript"
                },
                {
                    svgComponent: Icon.GatsbySVG,
                    href: "https://www.gatsbyjs.com/",
                    ariaLabel: "Gatsby"
                },
                {
                    svgComponent: Icon.StyledComponentsSVG,
                    href: "https://styled-components.com/",
                    ariaLabel: "Styled-Components"
                },
                {
                    svgComponent: Icon.ZustandSVG,
                    href: "https://zustand-demo.pmnd.rs/",
                    ariaLabel: "Zustand"
                },
                {
                    svgComponent: Icon.FigmaSVG,
                    href: "https://www.figma.com",
                    ariaLabel: "Figma"
                },
            ]
        }],
        ["poke-info", {
            name: "PokéInfo",
            image: $(() => (
                deviceType === "desktop" ?
                    <PokeInfo class={DesktopStyles.ImageClass} alt="PokéInfo" />
                    : <PokeInfoOptimized class={MobileStyles.ImageClass} alt="PokéInfo" />
            )),
            site: "https://poke-info.vercel.app/",
            features: [
                text.repos.pokeInfo.f1,
                text.repos.pokeInfo.f2,
                text.repos.pokeInfo.f3,
                text.repos.pokeInfo.f4,
                text.repos.pokeInfo.f5,
                text.repos.pokeInfo.f6,
                text.repos.pokeInfo.f7,
                text.repos.pokeInfo.f8,
                text.repos.pokeInfo.f9
            ],
            anchorIcons: [
                {
                    svgComponent: Icon.TypescriptSVG,
                    href: "https://www.typescriptlang.org/",
                    ariaLabel: "Typescript"
                },
                {
                    svgComponent: Icon.PreactSVG,
                    href: "https://preactjs.com/",
                    ariaLabel: "Preact"
                },
                {
                    svgComponent: Icon.ViteSVG,
                    href: "https://vite.dev/",
                    ariaLabel: "Vite"
                },
                {
                    svgComponent: Icon.StyledComponentsSVG,
                    href: "https://styled-components.com/",
                    ariaLabel: "Styled-Components"
                },
                {
                    svgComponent: Icon.AxiosSVG,
                    href: "https://axios-http.com",
                    ariaLabel: "Axios"
                },
                {
                    svgComponent: Icon.TanstackSVG,
                    href: "https://tanstack.com/",
                    ariaLabel: "Tanstack"
                },
                {
                    svgComponent: Icon.FigmaSVG,
                    href: "https://www.figma.com",
                    ariaLabel: "Figma"
                },
            ]
        }],
        ["ice-crud", {
            name: "Ice-CRUD",
            image: $(() => (
                deviceType === "desktop" ?
                    <IceCrud class={DesktopStyles.ImageClass} alt="Ice-CRUD" />
                    : <IceCrudOptimized class={MobileStyles.ImageClass} alt="Ice-CRUD" />
            )),
            site: "https://github.com/cicero-mello/ice-crud-frontend",
            features: [
                text.repos.iceCrud.f1,
                text.repos.iceCrud.f2,
                text.repos.iceCrud.f3,
                text.repos.iceCrud.f4,
                text.repos.iceCrud.f5,
                text.repos.iceCrud.f6
            ],
            anchorIcons: [
                {
                    svgComponent: Icon.TypescriptSVG,
                    href: "https://www.typescriptlang.org/",
                    ariaLabel: "Typescript"
                },
                {
                    svgComponent: Icon.NextSVG,
                    href: "https://nextjs.org/",
                    ariaLabel: "Next.js"
                },
                {
                    svgComponent: Icon.TailwindSVG,
                    href: "https://tailwindcss.com/",
                    ariaLabel: "Tailwind"
                },
                {
                    svgComponent: Icon.ReactHookFormSVG,
                    href: "https://react-hook-form.com/",
                    ariaLabel: "React-Hook-Form"
                },
                {
                    svgComponent: Icon.TanstackSVG,
                    href: "https://tanstack.com/",
                    ariaLabel: "Tanstack"
                },
                {
                    svgComponent: Icon.FigmaSVG,
                    href: "https://www.figma.com",
                    ariaLabel: "Figma"
                },
                {
                    svgComponent: Icon.DockerSVG,
                    href: "https://www.docker.com/",
                    ariaLabel: "Docker"
                },
                {
                    svgComponent: Icon.FastifySVG,
                    href: "https://fastify.dev/",
                    ariaLabel: "Fastify"
                },
                {
                    svgComponent: Icon.SwaggerSVG,
                    href: "https://swagger.io/",
                    ariaLabel: "Swagger"
                },
                {
                    svgComponent: Icon.PrismaSVG,
                    href: "https://www.prisma.io/",
                    ariaLabel: "Prisma"
                },
                {
                    svgComponent: Icon.PostgresSVG,
                    href: "https://www.postgresql.org",
                    ariaLabel: "PostgreSQL"
                },
                {
                    svgComponent: Icon.VitestSVG,
                    href: "https://vitest.dev/",
                    ariaLabel: "Vitest"
                },
                {
                    svgComponent: Icon.NodeSVG,
                    href: "https://nodejs.org",
                    ariaLabel: "Node"
                },
            ]
        }]
    ])

    return sectionDataBySectionName
}
