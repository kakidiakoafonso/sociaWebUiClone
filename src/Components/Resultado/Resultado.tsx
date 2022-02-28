import React from 'react'
import { Iproduto } from '../../services/data'
import * as S from './styled'

const img = "https://www.socia.ao/_nuxt/img/brokenimage1.9db17c9.png"
type Props = {
  data:Iproduto
}
export default function Resultado({data}:Props) {
  return (
    <S.Container>
        <S.ImageContainer>
            <S.Image src={data.image}/>
        </S.ImageContainer>

        <S.PrecoContainer>
            <S.Nome>{data.nome}</S.Nome>
            <S.Preco>{data.preco} AOA</S.Preco>
        </S.PrecoContainer>
        <S.Separador/>
    </S.Container>
  )
}
