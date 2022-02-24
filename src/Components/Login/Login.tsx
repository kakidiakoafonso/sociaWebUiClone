import React from 'react'
import ButtonPrimary from '../Buttons/ButtonPrimary'
import ButtonSecondary from '../Buttons/ButtonSecondary'
import Input from '../Input/Input'
import * as S from './styled'

const Logo = "https://www.socia.ao/_nuxt/img/logo.502e630.png"
type Props = {
  press:(tla:string)=>void
}
export default function Login({press}:Props) {
  return (
      <>
    <S.Container>
        <S.Logo src={Logo}/>
        <Input placeholder='Telefone' type={"number"}/>
        <Input placeholder='Senha' password/>
        <ButtonPrimary message="Cadastrar"/>
        <S.Reset>Esqueceu a senha ?</S.Reset>
    </S.Container>
    <S.Separator> 
        <S.Row/>
            Ou
        <S.Row/>
    </S.Separator>
    <ButtonSecondary press={()=>press("login")} message="Cadastrar"/>
    </>
  )
}
