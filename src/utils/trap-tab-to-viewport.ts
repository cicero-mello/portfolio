export const alwaysTrapTabToViewport = (root: HTMLElement = document.body) => {
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

    const selector = focusableSelectors.join(",")
    const isFocusable = (element: Element): boolean => (
        element instanceof HTMLElement && element.matches(selector)
    )

    const handleEnterViewport = (element: HTMLElement) => {
        const prev = element.dataset.prevTabIndex
        if (prev !== undefined) {
            element.setAttribute("tabindex", prev)
            delete element.dataset.prevTabIndex
            return
        }

        element.removeAttribute("tabindex")
    }

    const handleExitViewport = (element: HTMLElement) => {
        element.dataset.prevTabIndex = element.getAttribute("tabindex") ?? ""
        element.setAttribute("tabindex", "-1")
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const el = entry.target as HTMLElement
            if (entry.isIntersecting) {
                handleEnterViewport(el)
                return
            }
            handleExitViewport(el)
        })
    }, { threshold: 0 })

    const observeIfFocusable = (element: Element) => {
        if (!isFocusable(element)) return
        observer.observe(element)
    }

    root.querySelectorAll(selector).forEach(observeIfFocusable)

    const mutationObserver = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (!(node instanceof HTMLElement)) return

                observeIfFocusable(node)
                node.querySelectorAll(selector).forEach(observeIfFocusable)
            })
        })
    })

    mutationObserver.observe(root, {
        childList: true,
        subtree: true,
    })
}
