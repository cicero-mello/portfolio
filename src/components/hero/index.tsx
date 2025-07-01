import { component$, useId, useVisibleTask$ } from "@builder.io/qwik"
import { useDevice } from "~/context/device"
import { startTyping } from "cm-typing-effect"
import { Background } from "./background"
import { MyPicture } from './my-picture'
import { useLanguageContext } from "~/context/language"
import { getTextsByLanguage } from "~/languages"
import * as S from "./styles.css"

export const Hero = component$(() => {
    const language = useLanguageContext()
    const text = getTextsByLanguage(language.value)

    const device = useDevice()

    const idText1 = useId()
    const idText2 = useId()
    const idText3 = useId()

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(async ({ track }) => {
        track(language)

        if (device.type === "mobile") return
        await startTyping(idText1, {
            startDelay: 1200,
            animationTime: 300,
            realisticTyping: true,
            endDelay: 1500
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
                <S.Text key={language.value + "hero"}>
                    <span
                        children={text.helloSection.t1}
                        id={idText1}
                        style={{
                            visibility: device.type === "desktop" ?
                                "hidden" : "unset"
                        }}
                    />
                    <span
                        children={text.helloSection.t2}
                        id={idText2}
                        style={{
                            visibility: device.type === "desktop" ?
                                "hidden" : "unset"
                        }}
                    />
                    <span
                        children={text.helloSection.t3}
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
