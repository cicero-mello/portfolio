import { $, component$ } from "@builder.io/qwik"
import * as S from "./styles.css"

export const Background = component$(() => {

    const bloodyStream = (
        "静寂の底から " +
        "目覚めるその柱たち 時を越え " +
        "深紅の血潮が " +
        "立ち上がる勇気を引き合わせる " +
        "受け継ぐ愛を " +
        "運命と呼ぶなら " +
        "微笑む目で次の手を " +
        "闇を欺いて 刹那を交わして " +
        "刃すり抜け 奴らの宿命を尽け " +
        "貫いた想いが未来を開く"
    )

    const randomCutAndJoinText = $((text: string): string => {
        const cutIndex = Math.floor(Math.random() * (text.length - 1)) + 1
        const firstHalf = text.slice(0, cutIndex)
        const secondHalf = text.slice(cutIndex)

        return secondHalf + firstHalf
    })

    const randomNumberBetween = (min: number, max: number) => (
        Math.floor(Math.random() * (max - min + 1)) + min
    )

    return (
        <S.Content aria-hidden="true">
            <S.LetterBox>
                {Array.from({ length: 10 }).map((_, i) => {
                    const animationTime = randomNumberBetween(220, 260)
                    const direction = i % 2 === 0 ? "reverse" : "normal"
                    return (
                        <S.Line key={i + "-hero-bg-line"}>
                            <S.LineFrase
                                children={randomCutAndJoinText(bloodyStream)}
                                style={{
                                    "--animation-time": `${animationTime}s`,
                                    "--animation-direction": direction
                                }}
                            />
                            <S.LineFrase
                                children={randomCutAndJoinText(bloodyStream)}
                                style={{
                                    "--animation-time": `${animationTime}s`,
                                    "--animation-direction": direction
                                }}
                            />
                        </S.Line>
                    )
                })}
            </S.LetterBox>
        </S.Content>
    )
})
