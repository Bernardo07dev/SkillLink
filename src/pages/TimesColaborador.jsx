// TIMES COLABORADOR
import Structure from '../components/Structure.jsx' 
import axios from "axios";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownWideShort } from '@fortawesome/free-solid-svg-icons';

const TimesColaborador = () => {
    const [getarea, setArea] = useState('todas')
    const [getstatus, setStatus] = useState('todos')
    const [times, setTimes] = useState([])
    const [filtrados, setFiltrados] = useState([]);

    const [areaTemp, setAreaTemp] = useState('todas');
    const [statusTemp, setStatusTemp] = useState('todos');

    useEffect(() => {
        const GetUser = async () => {
            const res = await axios.get('teams.json')
            setTimes(res.data)
            setFiltrados(res.data)
        }

        GetUser();
    }, [])

    function chunkArray(array, tamanho) {
        const resultado = [];
        for (let i = 0; i < array.length; i += tamanho) {
            resultado.push(array.slice(i, i + tamanho));
        }
        return resultado;
    }


    const aplicarFiltros = () => {
        setArea(areaTemp);
        setStatus(statusTemp);
    };

    useEffect(() => {
        if (!times || times.length === 0) return;

        const filtro = times.filter((p) => {
            const areaOk = getarea === "todas" || p.area === getarea;
            const statusOk = getstatus === "todos" || p.status === getstatus;
            return areaOk && statusOk;
        });

        setFiltrados(filtro);

    }, [getarea, getstatus, times]);


    return(
        <Structure estado="times">
            <main className="p-8">
                <h1 className="mt-4 mb-2 text-2xl font-semibold text-gray-100">Times e Colaboração</h1>
                <p className="text-sm font-medium text-gray-400 mb-4">Acompanhe os times que você faz parte, veja o desempenho da equipe e visualize como cada membro contribui para os projetos em andamento. Conecte-se com colegas, acompanhe responsabilidades e fique por dentro das entregas do time.</p>
                <div className='bg-[#182832] flex flex-row justify-start px-8 py-6 rounded-xl gap-4'>
                    <div className='w-[40%]'>
                        <p className='mb-2'>Área</p>
                        <select className="dark:bg-[#101C22] w-full px-6 text-gray-400 font-medium text-sm py-3 rounded-lg border-none" onChange={(e) => setAreaTemp(e.target.value)} value={areaTemp}>
                            <option value="todas">Todas</option>
                            <option value="Inteligência Artificial">Inteligência Artificial</option>
                            <option value="UX/UI">UX/UI</option>
                            <option value="Dados">Dados</option>
                            <option value="DevOps">DevOps</option>
                            <option value="Backend">Backend</option>
                            <option value="Produto">Produto</option>
                        </select>
                    </div>

                    <div className='w-[40%]'>
                        <p className='mb-2 text-gray-200'>Status</p>
                        <select className="dark:bg-[#101C22] w-full px-6 text-gray-400 font-medium text-sm py-3 rounded-lg border-none" onChange={(e) => setStatusTemp(e.target.value)} value={statusTemp}>
                            <option value="todos">Todos</option>
                            <option value="Ativo">Ativo</option>
                            <option value="Em formação">Em formação</option>
                            <option value="Concluído">Concluído</option>
                        </select>
                    </div>

                    <div className='px-12 cursor-pointer gap-1 mt-8 rounded-lg flex flex-row justify-start items-center bg-[#13A4EC]'>
                        <FontAwesomeIcon className='' icon={faArrowDownWideShort}></FontAwesomeIcon>
                        <p onClick={aplicarFiltros} className='text-sm font-medium'>Aplicar</p>
                    </div>
                </div>

                {filtrados.length === 0 ? <p className="text-gray-400 text-sm font-semibold mt-6 mx-4">Nenhum time encontrado...</p> : chunkArray(filtrados, 4).map((grupo, index) => (
                    <div key={index} className="flex flex-row">
                        {grupo.map((item, i) => (
                            <div key={i} className='bg-[#182832] p-6 rounded-lg w-[25%] flex flex-col justify-around mx-2 my-6'>
                                
                                <div className='flex flex-row'>
                                    <p className='w-[75%] tracking-tighter text-lg font-semibold text-gray-200'>
                                        {item.nome}
                                    </p>

                                    <div
                                        className={`${
                                            item.status === 'Ativo'
                                                ? 'bg-[#1A473B] text-[#48D97E]'
                                                : item.status === 'Em formação'
                                                ? 'bg-[#42442A] text-[#E8BF17]'
                                                : item.status === 'Concluído'
                                                ? 'bg-[#1F3A59] text-[#5898E7]'
                                                : 'bg-gray-800 text-gray-100'
                                        } text-xs font-semibold flex justify-center h-[30px] items-center rounded-full w-[55%]`}
                                    >
                                        {item.status}
                                    </div>
                                </div>

                                <p className='text-sm text-gray-500 font-medium mb-4'>
                                    Progresso: {item.progresso}%
                                </p>

                                <div className='flex flex-row gap-2 mb-4'>
                                    {item.habilidades.map((hard, idx) => (
                                        <div key={idx} className='p-2 text-center rounded-lg text-xs text-gray-400 font-semibold bg-[#283339]'>
                                            {hard}
                                        </div>
                                    ))}
                                </div>

                                <p className='text-sm text-gray-300'>
                                    <strong>Líder:</strong> {item.lider}
                                </p>

                                <button className='mt-4 font-semibold text-sm bg-[#13A4EC] py-2 rounded-md'>
                                    Ver Detalhes
                                </button>

                            </div>
                        ))}
                    </div>
                ))}
            </main>
        </Structure>
    )
}

export default TimesColaborador;