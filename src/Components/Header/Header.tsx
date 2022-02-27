import React,{useState} from 'react'
import * as S from './styled'
import { FaInstagram ,FaFacebookF,FaLinkedinIn ,FaUser,

} from 'react-icons/fa';
import { colors } from '../../utils/colors';
import Modal from '../Modal/Modal';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';

const ICON_SIZE =  15
export default function Header() {


    const [modalLoginIsOpen, setmodalLoginIsOpen] = useState<boolean>(false)    
    const [telaAtual, settelaAtual] = useState<string>("detalhe")
    
    const handleTela = (tela:string) =>{
        settelaAtual(tela)
      }

    const handleModalClick = () =>{
        setmodalLoginIsOpen(!modalLoginIsOpen)
        settelaAtual("login")
      }
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
                <S.Buttons onClick={handleModalClick}>
                    Login
                </S.Buttons>
                -
                <S.Buttons onClick={handleModalClick}>
                    Cadastrar
                </S.Buttons>
            </S.Item>
        </S.RightWrapper>
        </S.Content>

        <Modal onClose={()=>setmodalLoginIsOpen(false)}
            isOpen={modalLoginIsOpen}>
              {telaAtual === "login" &&  <Login press={handleTela}/>}
              {telaAtual === "sign" &&  <SignUp press={handleTela}/>}
        </Modal>
    </S.Container>
  )
}
