import * as Icon from "~/components/svg"
import type { SectionData, SectionName } from "./types"

import CStreaming from "../../../../assets/images/c-streaming.webp?w=1920&h=1440&jsx"
import CStreamingOptimized from "../../../../assets/images/c-streaming.webp?jsx"

import PokeInfo from "../../../../assets/images/poke-info.webp?w=1920&h=1440&jsx"
import PokeInfoOptimized from "../../../../assets/images/poke-info.webp?jsx"

import IceCrud from "../../../../assets/images/ice-crud.webp?w=1920&h=1440&jsx"
import IceCrudOptimized from "../../../../assets/images/ice-crud.webp?jsx"

import { $ } from "@builder.io/qwik"
import type { DeviceType } from "~/context/device/types"
import * as DesktopStyles from "./desktop/section/styles.css"
import * as MobileStyles from "./mobile/section/styles.css"

export const getSectionDataBySectionName = (deviceType: DeviceType) => (
    new Map<SectionName, SectionData>([
        ["c-streaming", {
            name: "C-Streaming",
            image: $(() => (
                deviceType === "desktop" ?
                    <CStreaming class={DesktopStyles.ImageClass} />
                    : <CStreamingOptimized class={MobileStyles.ImageClass} />
            )),
            site: "https://c-streaming.vercel.app/",
            features: [
                "Streaming-Style UI",
                "Hight Accessibility",
                "Page Transitions",
                "Responsive/Adaptive Layout",
                "Web Storage Features",
                "Original Design"
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
            name: "Poke-Info",
            image: $(() => (
                deviceType === "desktop" ?
                    <PokeInfo class={DesktopStyles.ImageClass} />
                    : <PokeInfoOptimized class={MobileStyles.ImageClass} />
            )),
            site: "https://poke-info.vercel.app/",
            features: [
                "Creative UI",
                "Responsive/Adaptive Layout",
                "Page Transitions",
                "Web Storage Features",
                "External API Consumption",
                "Cache Management",
                "Infinite Scroll",
                "Virtualization",
                "Original Design"
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
                    <IceCrud class={DesktopStyles.ImageClass} />
                    : <IceCrudOptimized class={MobileStyles.ImageClass} />
            )),
            site: "https://github.com/cicero-mello/ice-crud-frontend",
            features: [
                "Full Stack App",
                "CRUD Features",
                "Auth Management",
                "Unit Tests",
                "Documented Api",
                "Original Design"
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
)
