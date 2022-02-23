import React from 'react'
import * as S from './styled'

type Props = {
  press:()=>void,
  message:string
}
export default function ButtonSecondary({press,message}:Props) {
  return (
    <S.SecondButton onClick={press}>
        {message}
    </S.SecondButton>
  )
}
