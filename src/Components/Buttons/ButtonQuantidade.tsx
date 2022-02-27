import React,{useState} from 'react'
import * as S from './styled'
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai'

type Props = {
    message?:string
}
export default function ButtonQuantidade({message}:Props) 
{
    const [qtadade, setqtadade] = useState<number>(1)
    const handleMenusClick = ()=>{
        if(qtadade===1) return
        else setqtadade(qtadade-1)
    }
    const handlePlusClick = ()=>{
        // if(qtadade==0) return
        // else 
        setqtadade(qtadade+1)
    }
  return (
      <S.ContainerButtonQuantidade>
          <S.PlusMinusBtn onClick={handleMenusClick}><AiOutlineMinus/></S.PlusMinusBtn>
          <S.QtdadeText>{qtadade}</S.QtdadeText>
          <S.PlusMinusBtn onClick={handlePlusClick}><AiOutlinePlus/></S.PlusMinusBtn>
      </S.ContainerButtonQuantidade>
  )
}
