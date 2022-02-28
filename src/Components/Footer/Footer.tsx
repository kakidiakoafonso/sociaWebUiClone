import React from 'react'
import * as S from './styled'
import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai'

const ICON_SIZE = 40
export default function Footer() 
{
    const handleGit = () => {window.open("https://github.com/kakidiakoafonso", "_blank");}
    const handleLinkedin = () => {window.open("https://linkedin.com/in/kakidiako-afonso-498106129/", "_blank");}
  return (
    <S.Container>
        <S.StoresContainer>
            <S.Links onClick={handleGit}>
                <AiFillGithub size={ICON_SIZE}/>
            </S.Links>
            <S.Links onClick={handleLinkedin}>
                <AiFillLinkedin size={ICON_SIZE}/>
            </S.Links>
        </S.StoresContainer>

        <S.RightsContainer>
            <S.Text>Powered by - Kakidiako Afonso</S.Text>
        </S.RightsContainer>
    </S.Container>
  )
}
