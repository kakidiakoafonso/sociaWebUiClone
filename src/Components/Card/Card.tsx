import React from 'react'
import * as S from './styled'


const img = "https://api.socia.ao/files/images/303b00ff-3b88-4111-99c2-ac3e36d5a455.jpg"

type Props = {
    onPress:()=>void
}
export default function Card({onPress}:Props) {
  return (
    <S.Container>
        
        <S.ImageContainer>
                <S.Image src={img}/>
        </S.ImageContainer>
        <S.DetailContainer>
            <S.DetailTop>
                <S.Top>
                    <S.PrecoAntigo>969.64</S.PrecoAntigo>
                    <S.Preco>860,06 AOA / Uni</S.Preco>
                </S.Top>
                <S.Bottom>
                    <S.Nome>Coca Cola 2L</S.Nome>
                </S.Bottom>
            </S.DetailTop>
            <S.DetailBottom>
                <S.AddBtn onClick={onPress}>Adicionar ao carrinho</S.AddBtn>
                <S.SociaBtn onClick={onPress}>Fazer socia</S.SociaBtn>
            </S.DetailBottom>
        </S.DetailContainer>
    </S.Container>
  )
}
