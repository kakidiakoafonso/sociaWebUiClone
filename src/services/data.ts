export type Iproduto = {
    id:number,
    nome:string,
    preco:string,
    precoAntigo:number,
    unidade:"Uni"|"KG",
    image:string,
}
const api:Iproduto[] = [
    {
        id:1,
        nome:"ESSENCIAS FOSTER CLARKS BANANA 28ML",
        preco:"328,89",
        precoAntigo:657.79,
        unidade:"Uni",
        image:"https://www.socia.ao/_nuxt/img/brokenimage1.9db17c9.png"
    },
    {
        id:2,
        nome:"Arroz Familia Feliz",
        preco:"477,32",
        precoAntigo:657.79,
        unidade:"KG",
        image:"https://api.socia.ao/files/images/c6278012-315a-42ce-8293-e6e3d456b962.jpg"
    },
    {
        id:3,
        nome:"Peixe Carapau",
        preco:"1.640,88",
        precoAntigo:657.79,
        unidade:"KG",
        image:"https://api.socia.ao/files/images/aa0daaf7-a283-49ca-bdb3-686374ee46c5.jpg"
    },
    {
        id:4,
        nome:"Coxa Seara Brasil",
        preco:"1.168,7",
        precoAntigo:657.791,
        unidade:"KG",
        image:"https://api.socia.ao/files/images/f9d7cc8a-39a4-45e1-8a4a-c15623c57bd1.jpg"
    },
    {
        id:5,
        nome:"ARROZ BASMATI SONA GOLD PACOTE 1KG",
        preco:"2.352",
        precoAntigo:657.79,
        unidade:"KG",
        image:"https://api.socia.ao/files/images/f2c539b1-da8c-4ff8-b4cf-a46a02f30bf8.jpg"
    },
    {
        id:6,
        nome:"MASSA MACARRAO TIO LUCAS 400GR",
        preco:"352,8",
        precoAntigo:1657.79,
        unidade:"KG",
        image:"https://api.socia.ao/files/images/d912a962-1b23-4bd8-a34c-c5ac0764ca90.jpg"
    },
    {
        id:7,
        nome:"BACON SANODIA 115GM",
        preco:"1.202,47",
        precoAntigo:657.79,
        unidade:"KG",
        image:"https://api.socia.ao/files/images/75067c3c-3d1b-48d3-b4a0-2c17482db77a.jpg"
    },
    {
        id:8,
        nome:"BOLACHA NACIONAL MY COOKIE TRADICIONAL (150G)",
        preco:"902,78",
        precoAntigo:657.79,
        unidade:"Uni",
        image:"https://api.socia.ao/files/images/4a7917f2-a348-4281-8dcc-0f7ed41b84c0.jpg"
    },
    {
        id:9,
        nome:"LAYS BATATAS FRITAS SAL 45G",
        preco:"1.267,5",
        precoAntigo:657.79,
        unidade:"Uni",
        image:"https://api.socia.ao/files/images/9eafee01-3191-4b05-ba7c-1b5d27f9be2e.jpg"
    },
    {
        id:10,
        nome:"KINGSTAR SARDINHA 125G",
        preco:"590,63",
        precoAntigo:657.79,
        unidade:"KG",
        image:"https://api.socia.ao/files/images/711e3507-c85d-4d64-ac6a-bb498352d519.jpg"
    },
    {
        id:11,
        nome:"PATRIOTA FUBA AMARELA 1KG",
        preco:"668,48",
        precoAntigo:657.79,
        unidade:"KG",
        image:"https://api.socia.ao/files/images/e3cd8192-a29f-4068-ae39-f7680f188d05.jpg"
    },
    {
        id:12,
        nome:"Arroz & Massas",
        preco:"313,95",
        precoAntigo:657.79,
        unidade:"KG",
        image:"https://api.socia.ao/files/images/dd5a1f9a-4419-46bb-902e-86390474b342.jpg"
    }
]

export default api