import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";

import './styles.css'

export function Produto() {
    const url = `http://localhost:3100/produtos`;
    const [nome, setNome] = useState("");
    const [valor, setValor] = useState("");

    // Lista os produtos via hook
    const { data: items, httpConfig, loading, error } = useFetch(url);
    
    // Adiciona um produto
    const handleSubmit = async (e) =>{
        e.preventDefault()

        const produto = {
            nome,
            valor
        };
        httpConfig(produto, "POST");
        setNome("");
        setValor("")
    }

    return (
        <div>
            <h1>Produtos</h1>
            <div className="lista">
                {loading && <p>Carregando ...</p>}
                {error && <p> {error} </p>}
                {!loading && (
                    <ul>
                        {items && items.map((produto) => (
                            <li key={produto.id}>
                                {produto.nome} - R$: {produto.valor}
                            </li>
                        ))}
                    </ul>
                )}
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

                    { loading  && <input type="submit" disabled value="Aguarde ..." />  }
                    { !loading && <input type="submit" value="Cadastrar" />  }
                </form>
            </div>
        </div>
    )
}