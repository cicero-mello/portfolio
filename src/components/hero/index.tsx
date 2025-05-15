import { component$ } from "@builder.io/qwik"
import * as S from "./styles.css"
import { Background } from "./background"

export const Hero = component$(() => {

    return (
        <S.Content>
            <S.Card>
                <S.Image
                    src="/assets/images/me-brown.webp"
                />
                <S.Text>
                    Hi<br />
                    I'm Cícero<br />
                    and I like to code<br />
                </S.Text>
            </S.Card>
            <Background />
        </S.Content>
    )
})
