import React from 'react'
import { useProduto } from '../../Context/ProdutoContext'
import * as S from './styled'

type Props = {
    click?:(animation:string)=>void
}
export default function Toast({click}:Props) 
{
    const {animationType} =  useProduto() 

  return (
    <S.Container> 
        
    </S.Container>
  )
}
