import { createContextId, useContext, type Signal } from "@builder.io/qwik"

export type LanguageType = "en" | "pt-BR"

export const LanguageContext = createContextId<Signal<LanguageType>>(
    "language-context"
)

export const useLanguageContext = () => useContext(LanguageContext)
