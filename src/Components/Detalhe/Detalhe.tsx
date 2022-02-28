import React from 'react'
import { useProduto } from '../../Context/ProdutoContext'
import ButtonPrimary from '../Buttons/ButtonPrimary'
import ButtonQuantidade from '../Buttons/ButtonQuantidade'
import ButtonSecondary from '../Buttons/ButtonSecondary'
import * as S from './styled'


type Props = {
    press:(tela:string)=>void
  }
export default function Detalhe({press}:Props) 
{
    const {produtoSelecionado} = useProduto()
  return (
    <S.Container>
        <S.DetailContainer>
            <S.NomeProduto>{produtoSelecionado.nome}</S.NomeProduto>
            <S.EcoContainer>
                <S.EcoContentContainer>
                    <S.EcoBoldText>Categoria:</S.EcoBoldText> <S.EcoNormalText>Sem informação</S.EcoNormalText>
                </S.EcoContentContainer>
                <S.EcoContentContainer>
                    <S.EcoBoldText>Preço unitário:</S.EcoBoldText> <S.EcoNormalText>477,32 AOA</S.EcoNormalText>
                </S.EcoContentContainer>
                <S.EcoContentContainer>
                    <S.EcoBoldText>Preço da caixa:</S.EcoBoldText> <S.EcoNormalText>{produtoSelecionado.preco} AOA</S.EcoNormalText>
                </S.EcoContentContainer>
                <S.EcoContentContainer>
                    <S.EcoBoldText>Quantidade:</S.EcoBoldText> <S.EcoNormalText>25 Kilogramas</S.EcoNormalText>
                </S.EcoContentContainer>
            </S.EcoContainer>
            <S.EntregasText>Entregas totalmente gratuítas!</S.EntregasText>
            <S.ChoiceContainer>
                <S.ChoiceWrapper>
                    <p>Fazer socia</p> <S.ComboBox type={"radio"}/>
                </S.ChoiceWrapper>
                <S.ChoiceWrapper>
                    <p>Comprar caixa</p> <S.ComboBox type={"radio"}/>
                </S.ChoiceWrapper>
            </S.ChoiceContainer>

            <S.ProductContainer>
                <S.Quantidade>Dividir com quantas pessoas?</S.Quantidade>

                <S.ProductDetailContainerWrapper>

                    <S.ProductDetailContainer>
                        <S.EcoNormalText>Vai receber</S.EcoNormalText>
                        <S.EcoBoldText>12 Un</S.EcoBoldText> 
                    </S.ProductDetailContainer>
                    <S.ProductDetailContainer>
                        <S.EcoNormalText>Vai pagar</S.EcoNormalText>
                        <S.EcoBoldText>10.416,73 AOA</S.EcoBoldText> 
                    </S.ProductDetailContainer>
                    <S.ProductDetailContainer>
                        <S.EcoNormalText>Vai poupar</S.EcoNormalText>
                        <S.EcoBoldText>520,84 AOA</S.EcoBoldText> 
                    </S.ProductDetailContainer>

                </S.ProductDetailContainerWrapper>
                

                <ButtonQuantidade/>
                <ButtonPrimary message='Fazer socia'
                width='100%' height={30} fontSize={12}/>
            </S.ProductContainer>
                <S.ChoiceContainer>
                    <S.OuText>OU</S.OuText>
                </S.ChoiceContainer>
                <ButtonSecondary message='Adicionar ao carrinho'
                    press={()=>console.log("A")} height={35}
                    width={"80%"} bordas
                />
        </S.DetailContainer>
        <S.ImageContainer>
            <S.Image src={produtoSelecionado.image}/>
            <S.ListaCompra onClick={()=>press("lista")}>
                Adicionar a uma lista de compras    
            </S.ListaCompra>
        </S.ImageContainer>

    </S.Container>
  )
}
