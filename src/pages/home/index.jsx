import { useState } from "react";

export function Home() {

    const [gastos, setGastos] = useState([]);

    const [nome, setNome] = useState("");
    const [desc, setDesc] = useState("");
    const [valor, setValor] = useState("");
    const [data, setData] = useState("");

    function enviarMovimento() {
        const gasto = {
            nome: nome,
            descricao: desc,
            valor: Number(valor),
            data: data,
        };

        setGastos(prev => {
            const atualizado = [...prev, gasto];
            console.log(atualizado);
            return atualizado
        });
    };

    const total = gastos.reduce((acc, item) => acc + item.valor, 0);

    return (
        <div>
            <header>
                <h1>Controle de Valores</h1>
            </header>
            <main>
                <div>
                    <h2>Movimentacoes</h2>
                    <div>
                        <p>Total Despesas {total}</p>
                        <p>Total Receitas</p>
                    </div>
                    <div>
                        <h3>Lista</h3>
                        <ul>
                            {gastos.map((m, i) => (
                                <li key={i}>
                                    {m.nome} - R$ {m.valor} - {m.data}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <h2>Insira sua Movimentação</h2>
                <div>
                    <input type="text" placeholder="Nome" value={nome} 
                    onChange={(e) => setNome(e.target.value)}/>

                    <input type="text" placeholder="Descricao" value={desc}
                    onChange={(e) => setDesc(e.target.value)}/>

                    <input type="number" placeholder="Valor" value={valor} 
                    onChange={(e) => setValor(e.target.value)}/>

                    <input type="date" value={data} onChange={(e) => setData(e.target.value)}/>

                    <button type="button" onClick={enviarMovimento}>Adicionar</button>
                </div>
            </main>
        </div>
    )
}