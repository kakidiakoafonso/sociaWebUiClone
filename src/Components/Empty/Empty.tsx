import React from 'react'
import * as S from './styled'
import {AiOutlineArrowUp,AiOutlineShoppingCart} from 'react-icons/ai'

export default function Empty() {
  return (
    <S.Container>
        <AiOutlineShoppingCart size={300}/>
        <S.Text>Sem produtos no carrinho</S.Text>
    </S.Container>
  )
}
