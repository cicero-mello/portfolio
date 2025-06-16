import { $, component$, isServer, type Signal, useContext, useOnWindow, useSignal } from "@builder.io/qwik"
import { BottomIconsContext, type VisibilityControl } from "~/context/history-section/desktop"
import { StackAnchor } from "./stack-anchor"
import * as Icon from "~/components/svg"
import * as S from "./styles.css"

export const BottomIcons = component$(() => {
    const context = useContext(BottomIconsContext)
    const contextSetupIsDone = useSignal(false)

    const refs = {
        CSS: useSignal<HTMLAnchorElement>(),
        StyledComponents: useSignal<HTMLAnchorElement>(),
        Javascript: useSignal<HTMLAnchorElement>(),
        Vite: useSignal<HTMLAnchorElement>(),
        Prisma: useSignal<HTMLAnchorElement>(),
        Qwik: useSignal<HTMLAnchorElement>(),
        Preact: useSignal<HTMLAnchorElement>(),
        Tanstack: useSignal<HTMLAnchorElement>(),
        Zod: useSignal<HTMLAnchorElement>(),
        Axios: useSignal<HTMLAnchorElement>(),
        React: useSignal<HTMLAnchorElement>(),
        Figma: useSignal<HTMLAnchorElement>(),
        Typescript: useSignal<HTMLAnchorElement>(),
        C: useSignal<HTMLAnchorElement>(),
        HTML: useSignal<HTMLAnchorElement>(),
        Node: useSignal<HTMLAnchorElement>(),
        Fastify: useSignal<HTMLAnchorElement>(),
        Zustand: useSignal<HTMLAnchorElement>(),
        Vitest: useSignal<HTMLAnchorElement>(),
        Java: useSignal<HTMLAnchorElement>(),
        Git: useSignal<HTMLAnchorElement>(),
        NPM: useSignal<HTMLAnchorElement>(),
        Tailwind: useSignal<HTMLAnchorElement>(),
        Swagger: useSignal<HTMLAnchorElement>(),
        Docker: useSignal<HTMLAnchorElement>(),
        ReactHookForm: useSignal<HTMLAnchorElement>(),
        Next: useSignal<HTMLAnchorElement>(),
        GSAP: useSignal<HTMLAnchorElement>(),
    }

    const showIcon = $((icon: Signal<HTMLAnchorElement | undefined>) => {
        if (!icon.value) return
        icon.value.style.transform = "scale(1)"
        icon.value.style.pointerEvents = "unset"
        icon.value.tabIndex = 0
    })

    const hideIcon = $((icon: Signal<HTMLAnchorElement | undefined>) => {
        if (!icon.value) return
        icon.value.style.transform = "scale(0)"
        icon.value.style.pointerEvents = "none"
        icon.value.tabIndex = -1
    })

    useOnWindow("scroll", $(() => {
        if (isServer || contextSetupIsDone.value) return
        contextSetupIsDone.value = true
        for (const [key, ref] of Object.entries(refs)) {
            context[`show${key}` as keyof VisibilityControl] = $(() => showIcon(ref))
            context[`hide${key}` as keyof VisibilityControl] = $(() => hideIcon(ref))
        }
    }))

    return (
        <S.Wrapper>
            <S.Line class="small-line">
                <StackAnchor
                    ref={refs.Vite}
                    name="Vite"
                    href="https://vite.dev/"
                    svgComponent={Icon.ViteSVG}
                    class={S.StackAnchorClass}
                />
                <StackAnchor
                    ref={refs.Prisma}
                    name="Prisma"
                    href="https://www.prisma.io/"
                    svgComponent={Icon.PrismaSVG}
                    class={S.StackAnchorClass}
                />
                <StackAnchor
                    ref={refs.Qwik}
                    name="Qwik"
                    href="https://qwik.dev/"
                    svgComponent={Icon.QwikSVG}
                    class={S.StackAnchorClass}
                />
                <StackAnchor
                    ref={refs.CSS}
                    name="CSS"
                    href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
                    svgComponent={Icon.CSS3SVG}
                    class={S.StackAnchorClass}
                />
                <StackAnchor
                    ref={refs.StyledComponents}
                    name="Styled-Components"
                    href="https://styled-components.com/"
                    svgComponent={Icon.StyledComponentsSVG}
                    class={S.StackAnchorClass}
                />
                <StackAnchor
                    ref={refs.Javascript}
                    name="Javascript"
                    href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
                    svgComponent={Icon.JavaScriptSVG}
                    class={S.StackAnchorClass}
                />
                <StackAnchor
                    ref={refs.Preact}
                    name="Preact"
                    href="https://preactjs.com/"
                    svgComponent={Icon.PreactSVG}
                    class={S.StackAnchorClass}
                />
                <StackAnchor
                    ref={refs.Tanstack}
                    name="Tanstack"
                    href="https://tanstack.com/"
                    svgComponent={Icon.TanstackSVG}
                    class={S.StackAnchorClass}
                />
                <StackAnchor
                    ref={refs.Zod}
                    name="Zod"
                    href="https://zod.dev/"
                    svgComponent={Icon.ZodSVG}
                    class={S.StackAnchorClass}
                />
            </S.Line>
            <S.Line>
                <StackAnchor
                    ref={refs.NPM}
                    name="NPM"
                    href="https://www.npmjs.com/"
                    svgComponent={Icon.NPMSVG}
                    class={S.StackAnchorClass}
                />
                <StackAnchor
                    ref={refs.Tailwind}
                    name="Tailwind"
                    href="https://tailwindcss.com/"
                    svgComponent={Icon.TailwindSVG}
                    class={S.StackAnchorClass}
                />
                <StackAnchor
                    ref={refs.Figma}
                    name="Figma"
                    href="https://www.figma.com"
                    svgComponent={Icon.FigmaSVG}
                    class={S.StackAnchorClass}
                />
                <StackAnchor
                    ref={refs.Typescript}
                    name="Typescript"
                    href="https://www.typescriptlang.org/"
                    svgComponent={Icon.TypescriptSVG}
                    class={S.StackAnchorClass}
                />
                <StackAnchor
                    ref={refs.C}
                    name="C"
                    href="https://www.w3schools.com/c/c_intro.php"
                    svgComponent={Icon.CSVG}
                    class={S.StackAnchorClass}
                />
                <StackAnchor
                    ref={refs.HTML}
                    name="HTML"
                    href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
                    svgComponent={Icon.HTML5SVG}
                    class={S.StackAnchorClass}
                />
                <StackAnchor
                    ref={refs.Node}
                    name="Node"
                    href="https://nodejs.org"
                    svgComponent={Icon.NodeSVG}
                    class={S.StackAnchorClass}
                />
                <StackAnchor
                    ref={refs.Fastify}
                    name="Fastify"
                    href="https://fastify.dev/"
                    svgComponent={Icon.FastifySVG}
                    class={S.StackAnchorClass}
                />
                <StackAnchor
                    ref={refs.Zustand}
                    name="Zustand"
                    href="https://zustand-demo.pmnd.rs/"
                    svgComponent={Icon.ZustandSVG}
                    class={S.StackAnchorClass}
                />
                <StackAnchor
                    ref={refs.Vitest}
                    name="Vitest"
                    href="https://vitest.dev/"
                    svgComponent={Icon.VitestSVG}
                    class={S.StackAnchorClass}
                />
            </S.Line>
            <S.Line class="small-line">
                <StackAnchor
                    ref={refs.Swagger}
                    name="Swagger"
                    href="https://swagger.io/"
                    svgComponent={Icon.SwaggerSVG}
                    class={S.StackAnchorClass}
                />
                <StackAnchor
                    ref={refs.Docker}
                    name="Docker"
                    href="https://www.docker.com/"
                    svgComponent={Icon.DockerSVG}
                    class={S.StackAnchorClass}
                />
                <StackAnchor
                    ref={refs.Axios}
                    name="Axios"
                    href="https://axios-http.com/ptbr/docs/intro"
                    svgComponent={Icon.AxiosSVG}
                    class={S.StackAnchorClass}
                />
                <StackAnchor
                    ref={refs.React}
                    name="React"
                    href="https://react.dev/"
                    svgComponent={Icon.ReactSVG}
                    class={S.StackAnchorClass}
                />
                <StackAnchor
                    ref={refs.Java}
                    name="Java"
                    href="https://www.java.com/"
                    svgComponent={Icon.JavaSVG}
                    class={S.StackAnchorClass}
                />
                <StackAnchor
                    ref={refs.Git}
                    name="Git"
                    href="https://git-scm.com/"
                    svgComponent={Icon.GitSVG}
                    class={S.StackAnchorClass}
                />
                <StackAnchor
                    ref={refs.ReactHookForm}
                    name="React Hook Form"
                    href="https://react-hook-form.com/"
                    svgComponent={Icon.ReactHookFormSVG}
                    class={S.StackAnchorClass}
                />
                <StackAnchor
                    ref={refs.Next}
                    name="Next.js"
                    href="https://nextjs.org/"
                    svgComponent={Icon.NextSVG}
                    class={S.StackAnchorClass}
                />
                <StackAnchor
                    ref={refs.GSAP}
                    name="GSAP"
                    href="https://gsap.com/"
                    svgComponent={Icon.GSAPSVG}
                    class={S.StackAnchorClass}
                />
            </S.Line>
        </S.Wrapper>
    )
})
