import { component$, useId, useVisibleTask$ } from "@builder.io/qwik"
import { useDevice } from "~/context/device"
import { startTyping } from "cm-typing-effect"
import { Background } from "./background"
import { MyPicture } from './my-picture'
import * as S from "./styles.css"

export const Hero = component$(() => {
    const device = useDevice()

    const idText1 = useId()
    const idText2 = useId()
    const idText3 = useId()

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(async () => {
        if (device.type === "mobile") return
        await startTyping(idText1, {
            startDelay: 2500,
            animationTime: 300,
            realisticTyping: true,
            endDelay: 2000
        })
        await startTyping(idText2, {
            realisticTyping: true,
            animationTime: 700,
            endDelay: 1800
        })
        await startTyping(idText3, {
            realisticTyping: true,
        })
    })

    return (
        <S.Content>
            <S.Card>
                <MyPicture />
                <S.Text>
                    <span
                        children="Hi"
                        id={idText1}
                        style={{
                            visibility: device.type === "desktop" ?
                                "hidden" : "unset"
                        }}
                    />
                    <span
                        children="I'm Cícero"
                        id={idText2}
                        style={{
                            visibility: device.type === "desktop" ?
                                "hidden" : "unset"
                        }}
                    />
                    <span
                        children="and I like to code"
                        id={idText3}
                        style={{
                            visibility: device.type === "desktop" ?
                                "hidden" : "unset"
                        }}
                    />
                </S.Text>
            </S.Card>
            <Background />
        </S.Content >
    )
})
