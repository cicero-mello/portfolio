export type Direction = "left" | "right"

export interface OnElementHitWindowParams {
    element: HTMLElement
    screenXPercent?: number
    onHitFromRight?: () => void | Promise<void>
    onHitFromLeft?: () => void | Promise<void>
    persistingCheckTime?: number
}
