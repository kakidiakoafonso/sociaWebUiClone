import React from 'react'
import { useProduto } from '../../Context/ProdutoContext'
import { Iproduto } from '../../services/data'
import * as S from './styled'


const img = "https://api.socia.ao/files/images/303b00ff-3b88-4111-99c2-ac3e36d5a455.jpg"

type Props = {
    onPress:(Produto:Iproduto)=>void,
    produto:Iproduto
}
export default function Card({onPress,produto}:Props) 
{
    const {setcarrinho,carrinho,setanimationType,animationType} = useProduto()
    const addCarrinho = ()=>
    {
        if(!carrinho.includes(produto))
            {
                setcarrinho((prev:any)=> [...prev,produto])
                if(animationType==="fadeIn") setanimationType("fadeOu")
                if(animationType==="fadeOut") setanimationType("fadeIn")
            }
    }
  return (
    <S.Container >
        
        <S.ImageContainer  onClick={()=>onPress(produto)}>
                <S.Image src={produto.image}/>
        </S.ImageContainer>
        <S.DetailContainer>
            <S.DetailTop>
                <S.Top>
                    <S.PrecoAntigo>{produto.precoAntigo}</S.PrecoAntigo>
                    <S.Preco>{produto.preco} AOA / {produto.unidade}</S.Preco>
                </S.Top>
                <S.Bottom>
                    <S.Nome>{produto.nome}</S.Nome>
                </S.Bottom>
            </S.DetailTop>
            <S.DetailBottom>
                <S.AddBtn onClick={addCarrinho}>Adicionar ao carrinho</S.AddBtn>
                <S.SociaBtn onClick={()=>onPress(produto)}>Fazer socia</S.SociaBtn>
            </S.DetailBottom>
        </S.DetailContainer>
    </S.Container>
  )
}
