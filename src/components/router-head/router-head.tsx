import { component$ } from "@builder.io/qwik"
import { useDocumentHead, useLocation } from "@builder.io/qwik-city"

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
    const head = useDocumentHead()
    const loc = useLocation()

    return (
        <>
            <title>{head.title}</title>

            <link rel="canonical" href={`https://www.ciceromello.com${loc.url.pathname}`} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="msvalidate.01" content="0777FA82A07C603B679CB620841DE3BB" />
            <link
                rel="icon"
                type="image/png"
                sizes="150x150"
                href="https://www.ciceromello.com/favicon.png"
            />
            {head.meta.map((m) => (
                <meta key={m.key} {...m} />
            ))}

            {head.links.map((l) => (
                <link key={l.key} {...l} />
            ))}

            {head.styles.map((s) => (
                <style
                    key={s.key}
                    {...s.props}
                    {...(s.props?.dangerouslySetInnerHTML
                        ? {}
                        : { dangerouslySetInnerHTML: s.style })}
                />
            ))}

            {head.scripts.map((s) => (
                <script
                    key={s.key}
                    {...s.props}
                    {...(s.props?.dangerouslySetInnerHTML
                        ? {}
                        : { dangerouslySetInnerHTML: s.script })}
                />
            ))}
        </>
    )
})
