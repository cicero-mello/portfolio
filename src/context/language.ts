import { createContextId, isServer, useContext, useContextProvider, useSignal, useTask$, type Signal } from "@builder.io/qwik"

export type LanguageType = "en" | "pt-BR"

export const LanguageContext = createContextId<Signal<LanguageType>>(
    "language-context"
)

export const useLanguageContext = () => useContext(LanguageContext)

export const useLanguageContextSetup = () => {
    const languageSignal = useSignal<LanguageType>("en")
    useContextProvider(LanguageContext, languageSignal)

    useTask$(({ track }) => {
        track(languageSignal)
        if (isServer) return
        document.documentElement.lang = languageSignal.value
    })
}
