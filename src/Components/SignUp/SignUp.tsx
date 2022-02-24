import React from 'react'
import ButtonPrimary from '../Buttons/ButtonPrimary'
import ButtonSecondary from '../Buttons/ButtonSecondary'
import Input from '../Input/Input'
import * as S from './styled'

const Logo = "https://www.socia.ao/_nuxt/img/logo.502e630.png"
type Props = {
  press:(tela:string)=>void
}
export default function SignUp({press}:Props) 
{
  return (
      <>
    <S.Container>
        <S.Logo src={Logo}/>
        <Input placeholder='Primeiro nome'/>
        <Input placeholder='Ultimo nome'/>
        <Input placeholder='E-mail'/>
        <Input placeholder='Senha' password/>
        <ButtonPrimary message="Entrar"/>
    </S.Container>
    <S.Separator> 
        <S.Row/>
            Ou
        <S.Row/>
    </S.Separator>
    <ButtonSecondary press={()=>press("sign")} message="Entrar"/>
    </>
  )
}
