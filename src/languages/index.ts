import type { LanguageType } from "~/context/language"
import { en } from "./en"
import { ptBr } from "./pt-br"

export const getTextsByLanguage = (
    lang: LanguageType
) => {

    if (lang === "en") return en
    else return ptBr
}
