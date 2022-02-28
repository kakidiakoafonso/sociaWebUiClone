import React,{useState} from 'react'
import * as S from './styled'
import { AiFillHome,AiOutlineSearch,AiOutlineLineChart ,
    AiOutlineShoppingCart,AiFillHeart,AiOutlineArrowDown,AiOutlineArrowUp
} from 'react-icons/ai';
import { BsFillBagPlusFill,BsFillTelephoneFill} from 'react-icons/bs';
import { FaConciergeBell,FaGifts,FaIgloo} from 'react-icons/fa';
import Resultado from '../Resultado/Resultado';
import Item from '../Item/Item';
import api, { Iproduto } from '../../services/data';


const result = [1,2,3,4,5,6]
const Categorias = ["Todas","Negócio Local","Aves", "Carnes", "Peixes", 
"Cortes de Frango","Arroz & Massa",
"Bebe","Bebidas alcoolicas"]
const iconMenuSize = 40
export default function Menu() 
{
    const [searchInputFocused, setsearchInputFocused] = useState<boolean>(false)
    const [showMenu, setshowMenu] = useState<boolean>(false)
    const handleClick = () =>
    {
        // alert("Click");
        setshowMenu(!showMenu)        
    }
    return (
    <S.Container>
        <S.LeftContainer>
            <S.LogoContainer>
                <img src='https://www.socia.ao/_nuxt/img/logo.502e630.png'/>
            </S.LogoContainer>
            <S.MenuButtonContainer>
                <S.MenuButton onClick={handleClick}>
                    <p>Categorias</p>
                
                {
                    !showMenu?
                    <AiOutlineArrowUp/>
                    :
                    <AiOutlineArrowDown/>
                }
                </S.MenuButton>

                <S.MenuItemContainer display={showMenu? "block":"none"}>
                    {
                        api.map((e:Iproduto,index)=><Item key={index} delay={index} nome={e.nome}/>)
                    }
                </S.MenuItemContainer>
            </S.MenuButtonContainer>
        </S.LeftContainer>

        <S.CenterContainer>
            <S.MenuListContainer>
                <S.MenuListItem>
                    <AiFillHome />
                    <S.LinkText>Início</S.LinkText>            
                </S.MenuListItem>
                <S.MenuListItem>
                    <BsFillBagPlusFill />
                    <S.LinkText>Produtos</S.LinkText>            
                </S.MenuListItem>
                <S.MenuListItem>
                    <FaConciergeBell />
                    <S.LinkText>Recentes</S.LinkText>            
                </S.MenuListItem>
                <S.MenuListItem>
                    <AiOutlineLineChart />
                    <S.LinkText>Mais vendidos</S.LinkText>            
                </S.MenuListItem>
                <S.MenuListItem>
                    <FaGifts />
                    <S.LinkText>Promoções</S.LinkText>            
                </S.MenuListItem>
                <S.MenuListItem>
                    <FaIgloo />
                    <S.LinkText>Congela</S.LinkText>            
                </S.MenuListItem>
            </S.MenuListContainer>
            <S.SearchContainer>
               <S.SearchWrapper>
                   <S.Input type={'text'} placeholder='Pesquisar produto'
                   onFocus={()=>setsearchInputFocused(true)}
                   onBlur={()=>setsearchInputFocused(false)}
                   />
                   <AiOutlineSearch style={{fontSize:25,color:'#222'}}/>
               </S.SearchWrapper>

            <S.SearchResult display={searchInputFocused? "block":"none"}> 
                {
                    api.map((produto:Iproduto,index)=>
                    <Resultado key={index} data={produto}/>)
                }
            </S.SearchResult>
            </S.SearchContainer>
        </S.CenterContainer>


        <S.RightContainer>
            <S.RightTopContainer>
                <AiFillHeart style={{color:'red',fontSize:20}}/>
                <AiOutlineShoppingCart style={{color:'#222',fontSize:20}}/>
                <S.TextTotal>Total: 0 AOA</S.TextTotal>
            </S.RightTopContainer>

            <S.RightBottomContainer>
                <S.IconPhone><BsFillTelephoneFill/></S.IconPhone>
                <S.RightBottomRight>
                    <S.TextTelefone>+244 945 176 405</S.TextTelefone>
                    <S.TextSuporte>Suporte 24/24</S.TextSuporte>
                </S.RightBottomRight>
            </S.RightBottomContainer>
        </S.RightContainer>
    </S.Container>
  )
}
