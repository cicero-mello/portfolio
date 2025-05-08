import { createContextId, type Signal } from "@builder.io/qwik"

export type LanguageType = "en" | "pt-BR"

export const LanguageContext = createContextId<Signal<LanguageType>>(
    "en"
)
