import React from 'react'
import ButtonPrimary from '../Buttons/ButtonPrimary'
import * as S from './styled'

export default function ListaCompras() {
  return (
      <S.Container>
          <S.TopContainer>
                <S.ImageContainer>
                  <S.Image src='https://api.socia.ao/files/images/303b00ff-3b88-4111-99c2-ac3e36d5a455.jpg'/>
                </S.ImageContainer>
                <S.ProdutoNome>Nutry Tutti Frutti 1 L</S.ProdutoNome>
          </S.TopContainer>

        <S.Input placeholder='Indique a quantidade de' type={"number"}/>
        <S.SelectContainer placeholder='Indique a quantidade de'>
            <S.Option value="">Higiene e limpeza</S.Option>
            <S.Option value="">Frescos 2</S.Option>
        </S.SelectContainer>
        <ButtonPrimary message='Adicionar' height={35}/>
      </S.Container>
  )
}
