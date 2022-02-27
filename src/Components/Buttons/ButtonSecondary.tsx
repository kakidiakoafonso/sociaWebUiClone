import React from 'react'
import { colors } from '../../utils/colors'
import * as S from './styled'

type Props = {
  press:()=>void,
  message:string
  height?:number
  width?:number|string
  bordas?:boolean
}
export default function ButtonSecondary({press,message,height=40,width=400,bordas=false}:Props) {
  const border = bordas? `1px solid ${colors.primary}`:"none"
  return (
    <S.SecondButton onClick={press} style={{height,width,border }}>
        {message}
    </S.SecondButton>
  )
}
