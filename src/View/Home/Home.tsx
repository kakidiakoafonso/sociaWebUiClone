import React, { useState } from 'react'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import * as S from './styled'
import Header from '../../Components/Header/Header'
import Menu from '../../Components/Menu/Menu'
import { colors } from '../../utils/colors'
import Card from '../../Components/Card/Card'
import Modal from '../../Components/Modal/Modal'
import Login from '../../Components/Login/Login'
import SignUp from '../../Components/SignUp/SignUp'


const produtos = [1,2,3,4,5,6,7,8]
export default function Home() 
{
  const [modalLoginIsOpen, setmodalLoginIsOpen] = useState<boolean>(false)
  const [cadastrar, setcadastrar] = useState<boolean>(true)

  const handleCadastroEntrar = () =>setcadastrar(!cadastrar)
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
                produtos.map(e=><Card onPress={()=>setmodalLoginIsOpen(true)}/>)
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
                produtos.map(e=><Card onPress={()=>setmodalLoginIsOpen(true)}/>)
              }
          </S.CardsContainer>
        </S.Wrapper>


        <Modal onClose={()=>setmodalLoginIsOpen(false)}
            isOpen={modalLoginIsOpen}>
              {
                !cadastrar?
                <Login press={handleCadastroEntrar}/>
                :
                <SignUp press={handleCadastroEntrar}/>
              }
        </Modal>
      </S.Container>
    
  )
}
