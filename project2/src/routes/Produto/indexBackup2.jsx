import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";

import './styles.css'

export function Produto2() {
// const NewPost = () => {
    const url = `http://localhost:3000/produtos`;

    // const [produto, setProduto] = useState([]);
    
    const [nome, setNome] = useState("");
    const [valor, setValor] = useState("");

    /**  lista os produtos
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(url);
            const data = await res.json();

            setProduto(data);
        }
        fetchData();
    }, []);
    */
    const { data: items, httpConfig } = useFetch(url);
    // console.log(items)
    
    // adiciona um produto
    const handleSubmit = async (e) =>{
        e.preventDefault()

        const produto = {
            nome,
            valor
        };

    /** Adicionar antigo
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(produto),
        });
        // console.log(produto);

        // carregamento dinamico

        const addedProduto = await res.json();

        setProduto((prevProdutos) => [...prevProdutos, addedProduto]);
    */
        httpConfig(produto, "POST");
        setNome("");
        setValor("")
    }
    return (
        <div>
            <h1>Produtos</h1>
            <div className="lista">
                <ul>
                    {items && items.map((produto) => (
                        <li key={produto.id}>
                            {produto.nome} - R$: {produto.valor}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="add-produt">
                <form onSubmit={handleSubmit}>
                    <label>  Produto: </label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <label> Preço:  </label>
                    <input
                        type="number"
                        value={valor}
                        onChange={ (e) => setValor(e.target.value) }
                    />
                    <input type="submit" value="Cadastrar" />
                </form>
            </div>
        </div>
    )
}