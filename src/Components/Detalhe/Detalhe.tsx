import React from 'react'
import * as S from './styled'
export default function Detalhe() {
  return (
    <S.Container>
        <S.DetailContainer>
            <S.NomeProduto>Arroz Familia Feliz</S.NomeProduto>
            <S.EcoContainer>
                <S.EcoContentContainer>
                    <S.EcoBoldText>Categoria:</S.EcoBoldText> <S.EcoNormalText>Sem informação</S.EcoNormalText>
                </S.EcoContentContainer>
                <S.EcoContentContainer>
                    <S.EcoBoldText>Preço unitário:</S.EcoBoldText> <S.EcoNormalText>477,32 AOA</S.EcoNormalText>
                </S.EcoContentContainer>
                <S.EcoContentContainer>
                    <S.EcoBoldText>Preço da caixa:</S.EcoBoldText> <S.EcoNormalText>11.932,9 AOA</S.EcoNormalText>
                </S.EcoContentContainer>
                <S.EcoContentContainer>
                    <S.EcoBoldText>Quantidade:</S.EcoBoldText> <S.EcoNormalText>25 Kilogramas</S.EcoNormalText>
                </S.EcoContentContainer>
            </S.EcoContainer>
            <S.EntregasText>Entregas totalmente gratuítas!</S.EntregasText>
        </S.DetailContainer>
    </S.Container>
  )
}
