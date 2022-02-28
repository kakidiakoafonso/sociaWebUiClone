import React from 'react'
import ButtonPrimary from '../Buttons/ButtonPrimary'
import * as S from './styled'
export default function Banner() {
  return (
    <S.Container>
        <S.Left>
            <S.Text>Temos um presente para você</S.Text>
            <S.TextCarro>JETOUR XC</S.TextCarro>
            <S.TextUnidades>Unidades</S.TextUnidades>
            <S.TextPreco>18.500 AOA</S.TextPreco>
            <S.Button>
                <ButtonPrimary width="100%" height={35}
                    message='Participar da rifa'/>
            </S.Button>
        </S.Left>
        <S.Right>
            <S.CarImage src='https://api.socia.ao/files/images/1374f8b1-6c3c-4387-a1f6-5b9253d1e872.jpg'/>
        </S.Right>
    </S.Container>
  )
}
