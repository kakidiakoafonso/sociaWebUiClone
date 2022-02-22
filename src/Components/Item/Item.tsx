import React from 'react'
import * as S from './styled'

const img = "https://www.socia.ao/_nuxt/img/brokenimage1.9db17c9.png"
type Props = {
  nome:string,
  delay:number
}
export default function Item({delay,nome}:Props) 
{
  const newDelay = (delay+1) * 1
  console.log(newDelay);
  
  return (
    <S.Container delay={newDelay}>
            <S.Nome>{nome}</S.Nome>
    </S.Container>
  )
}
