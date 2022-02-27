import React from 'react'
import * as S from './styled'

type Props = {
    message:string
    width?:string
    height?:number
    fontSize?:number
}
export default function ButtonPrimary({message,width="80%",height=40,fontSize=18}:Props) {
  return (
      <S.Container style={{width,height,fontSize}}>
          {message}
      </S.Container>
  )
}
