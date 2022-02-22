import React from 'react'
import * as S from './styled'
import { FaInstagram ,FaFacebookF,FaLinkedinIn ,FaUser,

} from 'react-icons/fa';
import { colors } from '../../utils/colors';

const ICON_SIZE =  15
export default function Header() {
  return (
    <S.Container>
        <S.Content>
        <S.Wrapper>
            <S.Texto>apoio@socia.ao</S.Texto>
            <S.Separador/>
            <S.Texto>Entregas totalmente gratuítas!</S.Texto>
        </S.Wrapper>

        <S.RightWrapper>
            <S.IconsContainer>
                 <S.IconDiv>
                    <FaFacebookF style={{fontSize:ICON_SIZE}}/>
                 </S.IconDiv>
                 <S.IconDiv>
                    <FaInstagram style={{fontSize:ICON_SIZE}}/>
                 </S.IconDiv>
                 <S.IconDiv>
                    <FaLinkedinIn style={{fontSize:ICON_SIZE}}/>
                 </S.IconDiv>
                 <S.Separador/>
            </S.IconsContainer>
            <S.Item>
                <S.Separador style={{marginRight:10}}/>
                <FaUser style={{fontSize:ICON_SIZE, color:colors.primary}}/>
                <S.Buttons>
                    Login
                </S.Buttons>
                -
                <S.Buttons>
                    Cadastrar
                </S.Buttons>
            </S.Item>
        </S.RightWrapper>
        </S.Content>
    </S.Container>
  )
}
