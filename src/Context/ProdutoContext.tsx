import React,{useContext,createContext,useState} from 'react'
import { Iproduto } from '../services/data'

type IContext = {
    produtoSelecionado:any,
    setprodutoSelecionado:any,
    carrinho:any
    setcarrinho:any,
    toast:any,
    settoast:any,
    animationType:any,
    setanimationType:any,
}
type Props = {
    children:any
}
export const ProdutoContext = createContext<IContext>({} as IContext)
export default function Context({children}:Props) 
{
    const [produtoSelecionado, setprodutoSelecionado] = useState<Iproduto>({} as Iproduto)
    const [carrinho, setcarrinho] = useState<Iproduto[]>([])
    const [toast, settoast] = useState<boolean>(false)
    const [animationType, setanimationType] = useState<"fadeIn"|"fadeOut">("fadeIn")

  return (
    <ProdutoContext.Provider  value={
        {
            produtoSelecionado,setprodutoSelecionado,carrinho,setcarrinho,
            toast,settoast,animationType,setanimationType
        }}>
        {children}
    </ProdutoContext.Provider>
  )
}

export function useProduto ()
{
    const context = useContext(ProdutoContext)
    return context
}
