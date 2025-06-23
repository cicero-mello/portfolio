import { HistoryCard } from "~/components/history-card"
import { component$ } from "@builder.io/qwik"
import * as Icon from "../../../svg"
import * as S from "./styles.css"

export const Mobile = component$(() => {

    return (
        <S.MainSection>
            <S.Title>TIMELINE</S.Title>
            <Icon.TriangleSVG class={S.TriangleSVGClass} />
            <HistoryCard
                title="2017"
                description1="First contact with Programming (with electronics) in High School"
                description2="Most of the time was focused on Microcontrollers"
                descriptionIcon={Icon.BagSVG}
                anchorIcons={[
                    {
                        ariaLabel: "C",
                        href: "https://www.w3schools.com/c/c_intro.php",
                        icon: Icon.CSVG
                    }
                ]}
            />
            <Icon.TriangleSVG class={S.TriangleSVGClass} />
            <HistoryCard
                title="2020"
                description1="Knowledge Expansion to Web Development in Internship/Job"
                description2="Initially FullStack, after, focus on Frontend"
                descriptionIcon={Icon.SuitCaseSVG}
                anchorIcons={[
                    {
                        ariaLabel: "C",
                        href: "https://www.w3schools.com/c/c_intro.php",
                        icon: Icon.CSVG
                    },
                    {
                        ariaLabel: "CSS",
                        href: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
                        icon: Icon.CSS3SVG
                    },
                    {
                        ariaLabel: "Styled-Components",
                        href: "https://styled-components.com/",
                        icon: Icon.StyledComponentsSVG
                    },
                    {
                        ariaLabel: "Javascript",
                        href: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
                        icon: Icon.JavaScriptSVG
                    },
                    {
                        ariaLabel: "Axios",
                        href: "https://axios-http.com/ptbr/docs/intro",
                        icon: Icon.AxiosSVG
                    },
                    {
                        ariaLabel: "React",
                        href: "https://react.dev/",
                        icon: Icon.ReactSVG
                    },
                    {
                        ariaLabel: "Typescript",
                        href: "https://www.typescriptlang.org/",
                        icon: Icon.TypescriptSVG
                    },
                    {
                        ariaLabel: "HTML",
                        href: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
                        icon: Icon.HTML5SVG
                    },
                    {
                        ariaLabel: "Java",
                        href: "https://www.java.com/",
                        icon: Icon.JavaSVG
                    },
                    {
                        ariaLabel: "Git",
                        href: "https://git-scm.com/",
                        icon: Icon.GitSVG
                    }
                ]}
            />
            <Icon.TriangleSVG class={S.TriangleSVGClass} />
            <HistoryCard
                title="2022"
                description1="Stopping work to focus on health issues"
                description2="Gradually I returned to coding"
                descriptionIcon={Icon.VitalsSVG}
                anchorIcons={[
                    {
                        ariaLabel: "C",
                        href: "https://www.w3schools.com/c/c_intro.php",
                        icon: Icon.CSVG
                    },
                    {
                        ariaLabel: "CSS",
                        href: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
                        icon: Icon.CSS3SVG
                    },
                    {
                        ariaLabel: "Styled-Components",
                        href: "https://styled-components.com/",
                        icon: Icon.StyledComponentsSVG
                    },
                    {
                        ariaLabel: "Javascript",
                        href: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
                        icon: Icon.JavaScriptSVG
                    },
                    {
                        ariaLabel: "Axios",
                        href: "https://axios-http.com/ptbr/docs/intro",
                        icon: Icon.AxiosSVG
                    },
                    {
                        ariaLabel: "React",
                        href: "https://react.dev/",
                        icon: Icon.ReactSVG
                    },
                    {
                        ariaLabel: "Typescript",
                        href: "https://www.typescriptlang.org/",
                        icon: Icon.TypescriptSVG
                    },
                    {
                        ariaLabel: "HTML",
                        href: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
                        icon: Icon.HTML5SVG
                    },
                    {
                        ariaLabel: "Java",
                        href: "https://www.java.com/",
                        icon: Icon.JavaSVG
                    },
                    {
                        ariaLabel: "Git",
                        href: "https://git-scm.com/",
                        icon: Icon.GitSVG
                    }
                ]}
            />
            <Icon.TriangleSVG class={S.TriangleSVGClass} />
            <HistoryCard
                title="2024/2025"
                description1="Start projects with learning purposes by myself"
                description2="(Even the classics are built with my own ideas)"
                descriptionIcon={Icon.RocketSVG}
                anchorIcons={[
                    {
                        ariaLabel: "C",
                        href: "https://www.w3schools.com/c/c_intro.php",
                        icon: Icon.CSVG
                    },
                    {
                        ariaLabel: "CSS",
                        href: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
                        icon: Icon.CSS3SVG
                    },
                    {
                        ariaLabel: "Styled-Components",
                        href: "https://styled-components.com/",
                        icon: Icon.StyledComponentsSVG
                    },
                    {
                        ariaLabel: "Javascript",
                        href: "https://developer.mozilla.org/docs/Web/JavaScript",
                        icon: Icon.JavaScriptSVG
                    },
                    {
                        ariaLabel: "Axios",
                        href: "https://axios-http.com",
                        icon: Icon.AxiosSVG
                    },
                    {
                        ariaLabel: "React",
                        href: "https://react.dev/",
                        icon: Icon.ReactSVG
                    },
                    {
                        ariaLabel: "Typescript",
                        href: "https://www.typescriptlang.org/",
                        icon: Icon.TypescriptSVG
                    },
                    {
                        ariaLabel: "HTML",
                        href: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
                        icon: Icon.HTML5SVG
                    },
                    {
                        ariaLabel: "Java",
                        href: "https://www.java.com/",
                        icon: Icon.JavaSVG
                    },
                    {
                        ariaLabel: "Git",
                        href: "https://git-scm.com/",
                        icon: Icon.GitSVG
                    },
                    {
                        ariaLabel: "Docker",
                        href: "https://www.docker.com/",
                        icon: Icon.DockerSVG
                    },
                    {
                        ariaLabel: "Preact",
                        href: "https://preactjs.com/",
                        icon: Icon.PreactSVG
                    },
                    {
                        ariaLabel: "Prisma",
                        href: "https://www.prisma.io/",
                        icon: Icon.PrismaSVG
                    },
                    {
                        ariaLabel: "React Hook Form",
                        href: "https://react-hook-form.com/",
                        icon: Icon.ReactHookFormSVG
                    },
                    {
                        ariaLabel: "Fastify",
                        href: "https://fastify.dev/",
                        icon: Icon.FastifySVG
                    },
                    {
                        ariaLabel: "Tailwind CSS",
                        href: "https://tailwindcss.com/",
                        icon: Icon.TailwindSVG
                    },
                    {
                        ariaLabel: "Swagger",
                        href: "https://swagger.io/",
                        icon: Icon.SwaggerSVG
                    },
                    {
                        ariaLabel: "NPM",
                        href: "https://www.npmjs.com/",
                        icon: Icon.NPMSVG
                    },
                    {
                        ariaLabel: "Next.js",
                        href: "https://nextjs.org/",
                        icon: Icon.NextSVG
                    },
                    {
                        ariaLabel: "Node",
                        href: "https://nodejs.org",
                        icon: Icon.NodeSVG
                    },
                    {
                        ariaLabel: "Zod",
                        href: "https://zod.dev/",
                        icon: Icon.ZodSVG
                    },
                    {
                        ariaLabel: "Vitest",
                        href: "https://vitest.dev/",
                        icon: Icon.VitestSVG
                    },
                    {
                        ariaLabel: "Figma",
                        href: "https://www.figma.com",
                        icon: Icon.FigmaSVG
                    },
                    {
                        ariaLabel: "Vite",
                        href: "https://vite.dev/",
                        icon: Icon.ViteSVG
                    },
                    {
                        ariaLabel: "Tanstack",
                        href: "https://tanstack.com/",
                        icon: Icon.TanstackSVG
                    },
                    {
                        ariaLabel: "Zustand",
                        href: "https://zustand-demo.pmnd.rs/",
                        icon: Icon.ZustandSVG
                    },
                    {
                        ariaLabel: "Qwik",
                        href: "https://qwik.dev/",
                        icon: Icon.QwikSVG
                    },
                    {
                        ariaLabel: "GSAP",
                        href: "https://gsap.com/",
                        icon: Icon.GSAPSVG
                    }
                ]}
            />
            <Icon.TriangleSVG class={S.TriangleSVGClass} />
            <S.FinalMessage>
                ...and the learning<br />
                continues
            </S.FinalMessage>
        </S.MainSection>
    )
})
