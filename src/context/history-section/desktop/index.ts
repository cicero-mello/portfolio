import { $, createContextId, useContextProvider, useStore } from "@builder.io/qwik"

export interface VisibilityControl {
    showCSS: () => void | Promise<void>
    hideCSS: () => void | Promise<void>
    showStyledComponents: () => void | Promise<void>
    hideStyledComponents: () => void | Promise<void>
    showJavascript: () => void | Promise<void>
    hideJavascript: () => void | Promise<void>
    showVite: () => void | Promise<void>
    hideVite: () => void | Promise<void>
    showPrisma: () => void | Promise<void>
    hidePrisma: () => void | Promise<void>
    showQwik: () => void | Promise<void>
    hideQwik: () => void | Promise<void>
    showPreact: () => void | Promise<void>
    hidePreact: () => void | Promise<void>
    showTanstack: () => void | Promise<void>
    hideTanstack: () => void | Promise<void>
    showZod: () => void | Promise<void>
    hideZod: () => void | Promise<void>
    showAxios: () => void | Promise<void>
    hideAxios: () => void | Promise<void>
    showReact: () => void | Promise<void>
    hideReact: () => void | Promise<void>
    showFigma: () => void | Promise<void>
    hideFigma: () => void | Promise<void>
    showTypescript: () => void | Promise<void>
    hideTypescript: () => void | Promise<void>
    showC: () => void | Promise<void>
    hideC: () => void | Promise<void>
    showHTML: () => void | Promise<void>
    hideHTML: () => void | Promise<void>
    showNode: () => void | Promise<void>
    hideNode: () => void | Promise<void>
    showFastify: () => void | Promise<void>
    hideFastify: () => void | Promise<void>
    showZustand: () => void | Promise<void>
    hideZustand: () => void | Promise<void>
    showVitest: () => void | Promise<void>
    hideVitest: () => void | Promise<void>
    showJava: () => void | Promise<void>
    hideJava: () => void | Promise<void>
    showGit: () => void | Promise<void>
    hideGit: () => void | Promise<void>
    showNPM: () => void | Promise<void>
    hideNPM: () => void | Promise<void>
    showTailwind: () => void | Promise<void>
    hideTailwind: () => void | Promise<void>
    showSwagger: () => void | Promise<void>
    hideSwagger: () => void | Promise<void>
    showDocker: () => void | Promise<void>
    hideDocker: () => void | Promise<void>
    showReactHookForm: () => void | Promise<void>
    hideReactHookForm: () => void | Promise<void>
    showNext: () => void | Promise<void>
    hideNext: () => void | Promise<void>
    showGSAP: () => void | Promise<void>
    hideGSAP: () => void | Promise<void>
}

export const BottomIconsContext = createContextId<VisibilityControl>(
    "history-desktop-bottom-icons-context"
)

export const useBottomIconsContextSetup = () => {
    useContextProvider(
        BottomIconsContext,
        useStore<VisibilityControl>({
            showCSS: $(() => console.log("show CSS")),
            hideCSS: $(() => console.log("hide CSS")),
            showStyledComponents: $(() => console.log("show Styled-Components")),
            hideStyledComponents: $(() => console.log("hide Styled-Components")),
            showJavascript: $(() => console.log("show Javascript")),
            hideJavascript: $(() => console.log("hide Javascript")),
            showVite: $(() => console.log("show Vite")),
            hideVite: $(() => console.log("hide Vite")),
            showPrisma: $(() => console.log("show Prisma")),
            hidePrisma: $(() => console.log("hide Prisma")),
            showQwik: $(() => console.log("show Qwik")),
            hideQwik: $(() => console.log("hide Qwik")),
            showPreact: $(() => console.log("show Preact")),
            hidePreact: $(() => console.log("hide Preact")),
            showTanstack: $(() => console.log("show Tanstack")),
            hideTanstack: $(() => console.log("hide Tanstack")),
            showZod: $(() => console.log("show Zod")),
            hideZod: $(() => console.log("hide Zod")),
            showAxios: $(() => console.log("show Axios")),
            hideAxios: $(() => console.log("hide Axios")),
            showReact: $(() => console.log("show React")),
            hideReact: $(() => console.log("hide React")),
            showFigma: $(() => console.log("show Figma")),
            hideFigma: $(() => console.log("hide Figma")),
            showTypescript: $(() => console.log("show Typescript")),
            hideTypescript: $(() => console.log("hide Typescript")),
            showC: $(() => console.log("show C")),
            hideC: $(() => console.log("hide C")),
            showHTML: $(() => console.log("show HTML")),
            hideHTML: $(() => console.log("hide HTML")),
            showNode: $(() => console.log("show Node")),
            hideNode: $(() => console.log("hide Node")),
            showFastify: $(() => console.log("show Fastify")),
            hideFastify: $(() => console.log("hide Fastify")),
            showZustand: $(() => console.log("show Zustand")),
            hideZustand: $(() => console.log("hide Zustand")),
            showVitest: $(() => console.log("show Vitest")),
            hideVitest: $(() => console.log("hide Vitest")),
            showJava: $(() => console.log("show Java")),
            hideJava: $(() => console.log("hide Java")),
            showGit: $(() => console.log("show Git")),
            hideGit: $(() => console.log("hide Git")),
            showNPM: $(() => console.log("show NPM")),
            hideNPM: $(() => console.log("hide NPM")),
            showTailwind: $(() => console.log("show Tailwind")),
            hideTailwind: $(() => console.log("hide Tailwind")),
            showSwagger: $(() => console.log("show Swagger")),
            hideSwagger: $(() => console.log("hide Swagger")),
            showDocker: $(() => console.log("show Docker")),
            hideDocker: $(() => console.log("hide Docker")),
            showReactHookForm: $(() => console.log("show React Hook Form")),
            hideReactHookForm: $(() => console.log("hide React Hook Form")),
            showNext: $(() => console.log("show Next.js")),
            hideNext: $(() => console.log("hide Next.js")),
            showGSAP: $(() => console.log("show GSAP")),
            hideGSAP: $(() => console.log("hide GSAP")),
        })
    )
}
