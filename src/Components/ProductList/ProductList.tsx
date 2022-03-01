import React from 'react'
import * as S from './styled'
import {BsFillTrashFill} from 'react-icons/bs'
import { useProduto } from '../../Context/ProdutoContext'
import { Iproduto } from '../../services/data'
import ButtonQuantidade from '../Buttons/ButtonQuantidade'
import ButtonPrimary from '../Buttons/ButtonPrimary'
export default function ProductList() 
{
    const {carrinho,setcarrinho} = useProduto()
    const removeCart = (produtoAtual:Iproduto) => 
    {
        const newCarrinho = carrinho.filter((item:Iproduto)=>{ return produtoAtual!==item})
        setcarrinho(newCarrinho)
    }
  return (
    <S.Container>
        <S.Left>

           {
               carrinho.map((data:Iproduto,index:number)=>(
                <S.ProductContainer key={index}>
                <S.Image src={data.image}/>
                    <S.LeftWrapper>
                        <S.LeftTop>
                            <S.LeftNomeText>{data.nome}</S.LeftNomeText>
                            <S.LeftPrecoText>| {data.preco}</S.LeftPrecoText>
                            <S.LeftIcon onClick={()=>removeCart(data)}>
                                <BsFillTrashFill size={20}/>
                            </S.LeftIcon>
                        </S.LeftTop>
                        <S.LeftButtonQtd>
                            <ButtonQuantidade/>
                        </S.LeftButtonQtd>
                    </S.LeftWrapper>
                </S.ProductContainer>
               ))
           }

        </S.Left>
        <S.Right>
            <S.Content>
                <S.Label>SUBTOTAL</S.Label><S.Value>5.096,88 AOA</S.Value>
            </S.Content>
            <S.Content>
                <S.Label>PONTOS</S.Label><S.Value>0 AOA</S.Value>
            </S.Content>
            <S.Content>
                <S.Label>DESCONTOS</S.Label><S.Value>254,84 AOA</S.Value>
            </S.Content>
            <S.Content>
                <S.Label>CUSTO DO SERVIÇO</S.Label><S.Value>1.000 AOA</S.Value>
            </S.Content>
            <S.Content style={{marginTop:20}}>
                <S.Label>TOTAL A PAGAR</S.Label><S.Value>6.066,3 AOA</S.Value>
            </S.Content>
            <ButtonPrimary message='Finaliar'
                height={35} width={"90%"}
            />
        </S.Right>
    </S.Container>
  )
}
