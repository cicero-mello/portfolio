export const pxToRemBasedPx = (pxValue: number): number => {
    const baseFontSize = 16
    const rootFontSizeStr = getComputedStyle(document.documentElement).fontSize
    const currentRootFontSize = parseFloat(rootFontSizeStr)
    const scaleFactor = currentRootFontSize / baseFontSize
    return pxValue * scaleFactor
}
