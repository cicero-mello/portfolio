import { $ } from "@builder.io/qwik"

export const disableTabOutside = $((container: HTMLElement) => {
    const focusableSelectors = [
        "a[href]",
        "area[href]",
        "input:not([disabled])",
        "select:not([disabled])",
        "textarea:not([disabled])",
        "button:not([disabled])",
        "iframe",
        "object",
        "embed",
        `[tabindex]:not([tabindex="-1"])`,
        "[contenteditable]"
    ]

    const focusableElements = Array.from(
        document.querySelectorAll(focusableSelectors.join(","))
    ) as HTMLElement[]

    const outsideElements = focusableElements.filter(
        el => !container.contains(el)
    )

    outsideElements.forEach(el => {
        el.dataset.prevTabIndex = el.getAttribute("tabindex") ?? undefined
        el.setAttribute("tabindex", "-1")
    })

    const restoreTabIndexes = $(() => {
        outsideElements.forEach(el => {
            const prev = el.dataset.prevTabIndex
            if (prev === undefined) el.removeAttribute("tabindex")
            else el.setAttribute("tabindex", prev)
            delete el.dataset.prevTabIndex
        })
    })

    return restoreTabIndexes
})
