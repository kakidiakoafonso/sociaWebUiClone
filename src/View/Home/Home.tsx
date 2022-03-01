import React, { useEffect, useState } from 'react'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import {AiOutlineArrowUp,AiOutlineShoppingCart} from 'react-icons/ai'
import * as S from './styled'
import { colors } from '../../utils/colors'
import Card from '../../Components/Card/Card'
import Modal from '../../Components/Modal/Modal'
import Detalhe from '../../Components/Detalhe/Detalhe'
import ListaCompras from '../../Components/Lista/ListaCompras'

import "./style.css"
import Empty from '../../Components/Empty/Empty'
import Footer from '../../Components/Footer/Footer'
import api, { Iproduto } from '../../services/data'
import { useProduto } from '../../Context/ProdutoContext'
import ProductList from '../../Components/ProductList/ProductList'

export default function Home() 
{
  const [modalLoginIsOpen, setmodalLoginIsOpen] = useState<boolean>(false)
  const [telaAtual, settelaAtual] = useState<string>("detalhe")

  const {carrinho,setprodutoSelecionado} = useProduto()

  const handleTela = (tela:string) =>{
    settelaAtual(tela)
  }
  const handleModalClick = (produto?:Iproduto) =>{
    setmodalLoginIsOpen(!modalLoginIsOpen)
    settelaAtual("detalhe")
    if(produto) setprodutoSelecionado(produto)

  }
  const handleCartButtonClick = () =>{
    setmodalLoginIsOpen(true)
    settelaAtual("carrinho")

  }
  const handleUpClick = () =>{
    window.scroll({top:0,behavior:'smooth'})
  }
  const handleCartClick = () =>
  {
    if(carrinho.lenght ===0)
      settelaAtual('empty')
    else
      settelaAtual('carrinho')

    setmodalLoginIsOpen(true)
  }

  useEffect(()=>{settelaAtual('empty')},[carrinho])


  return (
      <S.Container>
        <S.Wrapper>

          <S.CategoryContainer>
              <S.CategoryText>Em promoção</S.CategoryText>
              <S.Separador/>
              <S.ContainerTextIcon>
                <S.VerTodosText>Ver todos</S.VerTodosText>
                <HiOutlineArrowNarrowRight color={colors.primary}/>
              </S.ContainerTextIcon>
          </S.CategoryContainer>

          <S.CardsContainer>
              {
                api.map((produto:Iproduto)=><Card onPress={handleModalClick} produto={produto}/>)
              }
          </S.CardsContainer>

          <S.CategoryContainer>
              <S.CategoryText>Mais vendidos</S.CategoryText>
              <S.Separador/>
              <S.ContainerTextIcon>
                <S.VerTodosText>Ver todos</S.VerTodosText>
                <HiOutlineArrowNarrowRight color={colors.primary}/>
              </S.ContainerTextIcon>
          </S.CategoryContainer>

          <S.CardsContainer>
              {
                api.map((produto:Iproduto)=><Card onPress={handleModalClick} produto={produto}/>)
              }
          </S.CardsContainer>
        </S.Wrapper>


        <Modal onClose={()=>setmodalLoginIsOpen(false)}
            isOpen={modalLoginIsOpen}>
              {telaAtual === "lista" &&  <ListaCompras />}
              {telaAtual === "detalhe" &&  <Detalhe press={handleTela}/>}
              {telaAtual === "empty" &&  <Empty/>}
              {telaAtual === "carrinho" &&  <ProductList/>}
              
        </Modal>

        <S.FloatContainer>
              <S.Up onClick={handleUpClick}><AiOutlineArrowUp/></S.Up>
              <S.Cart onClick={handleCartClick}>
                <AiOutlineShoppingCart size={25}/>
                <S.Badge>
                  <S.BadgeText>{carrinho.length}</S.BadgeText>
                </S.Badge>
              </S.Cart>
        </S.FloatContainer>
            
        <Footer/>
      </S.Container>
    
  )
}
