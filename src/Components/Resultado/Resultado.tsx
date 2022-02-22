import React from 'react'
import * as S from './styled'

const img = "https://www.socia.ao/_nuxt/img/brokenimage1.9db17c9.png"
export default function Resultado() {
  return (
    <S.Container>
        <S.ImageContainer>
            <S.Image src={img}/>
        </S.ImageContainer>

        <S.PrecoContainer>
            <S.Nome>Batata rena nacional</S.Nome>
            <S.Preco>11.400.08 AOA</S.Preco>
        </S.PrecoContainer>
        <S.Separador/>
    </S.Container>
  )
}
