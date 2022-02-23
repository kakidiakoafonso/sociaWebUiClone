import React from 'react'
import * as S from './styled'
import {AiOutlineClose} from 'react-icons/ai'
import { colors } from '../../utils/colors'

type Props = {
    children?: React.ReactNode,
    isOpen:boolean
    onClose: ()=>void
}
export default function Modal({children,isOpen,onClose}:Props) 
{
    if(!isOpen) return null
  return (
    <S.Container>
        <S.Content>
            <S.Icon onClick={onClose}>
                <AiOutlineClose style={{fontSize:35,color:colors.primary}}/>
            </S.Icon>
            {children}
        </S.Content>
    </S.Container>
  )
}
