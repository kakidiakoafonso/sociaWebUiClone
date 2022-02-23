import React from 'react'
import * as S from './styled'

type Props = {
    message:string
}
export default function ButtonPrimary({message}:Props) {
  return (
      <S.Container>
          {message}
      </S.Container>
  )
}
