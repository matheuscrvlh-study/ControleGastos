import { useState } from "react";

export function Home() {

    const [gastos, setGastos] = useState([]);

    const [nome, setNome] = useState("");
    const [desc, setDesc] = useState("");
    const [valor, setValor] = useState("");
    const [data, setData] = useState("");

    function enviarForm() {
        const gasto = {
            nome: nome,
            descricao: desc,
            valor: Number(valor),
            data,
        };
        setGastos(prev => {
            const atualizado = [...prev, gasto];
            console.log(atualizado);
            return atualizado;
        })
    };

    const total = gastos.reduce((acc, gasto) => acc + gasto.valor, 0);

    return (
        <div>
            <header>
                <h1>Controle de Gastos</h1>
            </header>
            <main>
                <div>
                    <h2>GASTOS</h2>
                    <h2>Total Gastos: R$ {total}</h2>
                    <div>
                        <h3>Lista</h3>
                        <ul>
                            {gastos.map((g, i) => (
                                <li key={i}>
                                    {g.nome} - R$ {g.valor} - {g.data}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div>
                    <h2>Insira seu Gasto</h2>
                    
                    <input className="inputNome" type="text" placeholder="Nome"
                    value={nome} onChange={(e) => setNome(e.target.value)}/>
                    
                    <input className="inputDesc" type="text" placeholder="Descrição"
                    value={desc} onChange={(e) => setDesc(e.target.value)}/>

                    <input className="inputValor" type="number" placeholder="Valor"
                    value={valor} onChange={(e) => setValor(e.target.value)}/>

                    <input className="inputData" type="date" value={data} 
                    onChange={(e) => setData(e.target.value)}/>

                    <button type="button" onClick={enviarForm}>Incluir</button>
                </div>

            </main>
        </div>
    )
}