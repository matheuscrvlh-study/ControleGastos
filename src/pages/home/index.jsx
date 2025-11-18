import { useEffect, useState } from "react";

export function Home() {

    const [movimentos, setMovimentos] = useState([]);

    const [nome, setNome] = useState("");
    const [desc, setDesc] = useState("");
    const [valor, setValor] = useState("");
    const [data, setData] = useState("");

    function adicionarMovimento() {
        const novoMovimento = {
            nome: nome,
            desc: desc,
            valor: Number(valor),
            data: data,
            tipo: "despesa",
        };
        setMovimentos([...movimentos, novoMovimento]);
    };

    // USE EFFECT - MOSTRAR VALOR
    useEffect(() => {
        console.log(movimentos);
    }, [movimentos]);

    // DESPESA
    const despesa = movimentos
        .filter(mov => mov.tipo === "despesa")
        .reduce((acc, mov) => acc + mov.valor, 0);

    // RECEITA
    const receita = movimentos
        .filter(mov => mov.tipo === "receita")
        .reduce((acc, mov) => acc + mov.valor, 0);

    // TOTAL
    const total = movimentos.reduce((acc, mov) => acc + mov.valor, 0);

    return (
        <div>
            <header>
                <h1>Controle Financeiro</h1>
            </header>
            <main>
                <div>
                    <h2>Movimentos</h2>
                    <p>Despesas {despesa}</p>
                    <p>Receitas {receita}</p>
                    <p>Valor Final {total}</p>
                    <ul>
                        {movimentos.map((mov, index) => (
                            <li key={index}>
                                {mov.nome} - R$ {mov.valor} - {mov.data}
                            </li> 
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>Adicionar Movimento</h2>
                    <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
                    <input type="text" placeholder="descrição" value={desc} onChange={(e) => setDesc(e.target.value)}/>
                    <input type="number" placeholder="Valor" value={valor} onChange={(e) => setValor(e.target.value)}/>
                    <input type="date" value={data} onChange={(e) => setData(e.target.value)}/>
                    <button type="button" onClick={adicionarMovimento}>Adicionar</button>
                </div>
            </main>
        </div>
    )
}