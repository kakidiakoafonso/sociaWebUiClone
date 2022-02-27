import React from 'react'
import * as S from './styled'

export default function ListaCompras() {
  return (
      <S.Container>
          <S.TopContainer>
                <S.Image src='https://api.socia.ao/files/images/303b00ff-3b88-4111-99c2-ac3e36d5a455.jpg'/>
                <S.ProdutoNome>Nutry Tutti Frutti 1 L</S.ProdutoNome>
          </S.TopContainer>

        <S.Input placeholder='Indique a quantidade de'/>
        <S.SelectContainer placeholder='Indique a quantidade de'>
            
        </S.SelectContainer>
      </S.Container>
  )
}
