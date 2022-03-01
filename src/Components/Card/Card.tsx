import React, { useEffect,useState } from 'react'
import { useProduto } from '../../Context/ProdutoContext'
import { Iproduto } from '../../services/data'
import * as S from './styled'
import { useToast } from '@chakra-ui/react'
import ButtonQuantidade from '../Buttons/ButtonQuantidade'



type Props = {
    onPress:(Produto:Iproduto)=>void,
    produto:Iproduto
}
export default function Card({onPress,produto}:Props) 
{
    const toast = useToast()
    const {setcarrinho,carrinho,setanimationType,animationType} = useProduto()
    const [noCarrinho, setnoCarrinho] = useState<boolean>(false)
    useEffect(()=>{
        if(carrinho.includes(produto))
            setnoCarrinho(true)
    },[])
    const addCarrinho = ()=>
    {
        if(!carrinho.includes(produto))
            {
                setcarrinho((prev:any)=> [...prev,produto])
                toast({
                    title: 'Produto adicionado.',
                    description: "Produto adicionado com sucesso.",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                    position: 'top-right'
                  })
            }
        else{
            toast({
                title: 'Produto já está no carrinho.',
                description: "O produto selecionado já foi adicionado ao carrinho.",
                status: 'warning',
                duration: 9000,
                isClosable: true,
                position: 'top-right'                
              })
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
                {
                    noCarrinho? 
                    <S.BtnQtdContainer>
                        <ButtonQuantidade/>
                    </S.BtnQtdContainer>                    
                    :
                    <S.AddBtn onClick={addCarrinho}>Adicionar ao carrinho</S.AddBtn>
                }
                <S.SociaBtn onClick={()=>onPress(produto)}>Fazer socia</S.SociaBtn>
            </S.DetailBottom>
        </S.DetailContainer>
    </S.Container>
  )
}
