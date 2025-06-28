import { component$ } from "@builder.io/qwik"
import * as S from "./styles.css"
import { TriangleBigSVG } from "~/components/svg"
import { Colors } from "~/styles"

export const TrianglesLayer = component$(() => {

    return (
        <S.Screen>
            <TriangleBigSVG class={S.ClassT1} />
            <TriangleBigSVG
                class={S.ClassT1Shadow}
                pathColor={Colors.Onyx}
            />

            <TriangleBigSVG class={S.ClassT2} />
            <TriangleBigSVG
                class={S.ClassT2Shadow}
                pathColor={Colors.Onyx}
            />

            <TriangleBigSVG class={S.ClassT3} />
            <TriangleBigSVG
                class={S.ClassT3Shadow}
                pathColor={Colors.Onyx}
            />

            <TriangleBigSVG class={S.ClassT4} />
            <TriangleBigSVG
                class={S.ClassT4Shadow}
                pathColor={Colors.Onyx}
            />
        </S.Screen>
    )
})
