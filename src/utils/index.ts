type Direction = (
    "left" | "right"
)

const a = 0.65

export const onHitCenter = (
    element: HTMLElement,
    {
        onHitFromRight,
        onHitFromLeft
    }: any
) => {
    let lastDirection = (
        element.getBoundingClientRect().left > window.innerWidth * a ?
            "right" : "left"
    )

    const checkPosition = () => {
        const rect = element.getBoundingClientRect()
        const elementComesFrom: Direction = (
            rect.left > window.innerWidth * a ?
                "right" : "left"
        )

        if (lastDirection === elementComesFrom) return

        if (lastDirection == "right") {
            console.log("acertou o centro vindo da direita")
            onHitFromRight?.()
        }
        if (lastDirection == "left") {
            console.log("acertou o centro vindo da esquerda")
            onHitFromLeft?.()
        }

        lastDirection = elementComesFrom
    }

    let rafId: number | null = null
    let timeoutId: number | null = null

    const runCheckLoop = () => {
        checkPosition()
        rafId = requestAnimationFrame(runCheckLoop)
    }

    const onScrollOrResize = () => {
        // se não tá rodando o loop, inicia
        if (rafId === null) {
            runCheckLoop()
        }
        // reinicia o timeout a cada evento (debounce 800ms)
        if (timeoutId !== null) {
            clearTimeout(timeoutId)
        }
        timeoutId = window.setTimeout(() => {
            // para o loop depois de 800ms sem eventos
            if (rafId !== null) {
                cancelAnimationFrame(rafId)
                rafId = null
            }
            timeoutId = null
        }, 800)
    }

    window.addEventListener('scroll', onScrollOrResize)
    window.addEventListener('resize', onScrollOrResize)

    // roda uma vez imediatamente
    checkPosition()
}
