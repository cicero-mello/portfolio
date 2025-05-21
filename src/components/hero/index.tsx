import Image from '../../../assets/images/me-brown.webp?w=3017&h=3017&jsx'
import { component$ } from "@builder.io/qwik"
import { Background } from "./background"
import * as S from "./styles.css"

export const Hero = component$(() => {

    return (
        <S.Content>
            <S.Card>
                <S.ImageButton>
                    <Image class={S.imageClass} />
                </S.ImageButton>
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
