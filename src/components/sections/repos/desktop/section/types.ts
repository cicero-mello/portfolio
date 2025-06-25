import type { Signal } from "@builder.io/qwik"
import type { SectionName } from "../../types"

export interface SectionProps {
    sectionNameSignal: Signal<SectionName>
}
