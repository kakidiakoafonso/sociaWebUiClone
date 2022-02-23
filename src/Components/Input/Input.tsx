import React from 'react'
import * as S from './styled'
import {AiFillEyeInvisible} from 'react-icons/ai'

type Props = {
    placeholder:string,
    type?: "text"|"number",
    password?:boolean
}
export default function Input({placeholder,type="text",password=false}:Props) 
{
  return (
      <S.Container>
          <S.Input placeholder={placeholder} type={type}/>
          {
              password && <AiFillEyeInvisible style={{fontSize:22,color:'#ccc'}}/>
          }
      </S.Container>
  )
}
