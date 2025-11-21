// PROJETOS COLABORADOR
import { useState, useEffect } from "react";
import Structure from '../components/Structure.jsx'
import axios from "axios";

const ProjetosColaborador = () => {
    const [getstatus, setStatus] = useState('todos')
    const [getarea, setArea] = useState('todas')
    const [projetos, setProjetos] = useState([])
    const [filtrados, setFiltrados] = useState([]);

    useEffect(() => {
        const GetUser = async () => {
            const res = await axios.get('projetos.json')
            setProjetos(res.data)
            setFiltrados(res.data)
        }

        GetUser();
    }, [])

    useEffect(() => {
        if (!projetos || projetos.length === 0) return;

        const getProject = projetos.filter((p) => {
            const statusOk = getstatus === "todos" || p.status === getstatus;
            const areaOk = getarea === "todas" || p.area === getarea;

            return statusOk && areaOk;
        });

        setFiltrados(getProject);
    
    }, [getstatus, getarea, projetos])

    return(
        <Structure estado="projetos">
            <main className="p-8">
                <h1 className="mt-4 mb-2 text-2xl font-semibold dark:text-gray-100">Meus Projetos</h1>
                <p className="text-sm font-medium text-gray-400">Acompanhe o andamento das iniciativas e participe dos projetos ativos da equipe.</p>
                <div className='mt-4'>
                    {/* Select Status */}
                    <select className="dark:bg-[#182832] bg-white mr-4 px-4 text-gray-400 font-medium text-sm p-3 rounded-full border-none" onChange={(e) => setStatus(e.target.value)} value={getstatus}>
                        <option value="todos">Status: Todos</option>
                        <option value="Em andamento">Status: Em andamento</option>
                        <option value="Em revisão">Status: Em revisão</option>
                        <option value="Concluído">Status: Concluído</option>
                    </select>

                    <select className="dark:bg-[#182832] bg-white px-6 text-gray-400 font-medium text-sm p-3 rounded-full border-none" onChange={(e) => setArea(e.target.value)} value={getarea}>
                        <option value="todas">Área: Todas</option>
                        <option value="UX">Área: UX</option>
                        <option value="Backend">Área: Backend</option>
                        <option value="IA">Área: IA</option>
                        <option value="Produto">Área: Produto</option>
                    </select>

                    <div className='flex flex-col xl:flex-row'>
                        {filtrados && filtrados.length > 0 ? filtrados.map((valor, i) => (
                            <div className='dark:bg-[#182832] bg-white p-6 rounded-lg xl:w-[25%] lg:w-[35%] md:w-[50%] flex flex-col justify-around mx-2 my-6'>
                                <div className='flex flex-row'>
                                    <p className='w-[75%] tracking-tighter text-lg font-semibold dark:text-gray-200' key={i}>{valor.nome}</p>
                                        <div className={`${valor.status === 'Concluído' ? 'dark:bg-[#1A473B] bg-[#c8ead9] text-[#15d65c] dark:text-[#48D97E]' : valor.status === 'Em andamento' ? 'dark:bg-[#42442A] bg-[#eff0afc7] text-[#E8BF17]' : valor.status === 'Em revisão' ? 'dark:bg-[#1F3A59] bg-[#bccaefc7] text-[#5898E7]' : 'bg-gray-800 text-gray-100'} text-xs font-semibold flex justify-center h-[30px] items-center rounded-full w-[55%]`}>{valor.status}</div>
                                </div>
                                <p className='text-sm text-gray-500 font-medium mb-4'>Progresso: {valor.progresso}%</p>
                                <div className='flex flex-row gap-2 mb-4'>
                                    {valor.habilidades.map((hard, index) => (
                                        <div key={index} className='p-2 text-center rounded-lg text-xs text-gray-400 font-semibold bg-gray-100 dark:bg-[#283339]'>{hard}</div>
                                    ))}
                                </div>
                                <p className='text-sm text-gray-600 dark:text-gray-300'><strong>Líder:</strong> {valor.lider}</p>
                                <button className='mt-4 font-semibold text-sm bg-[#13A4EC] py-2 rounded-md'>Ver Detalhes</button>
                            </div>
                        )) : ( <p className='my-6 mx-2 text-sm text-gray-300'>Nenhum projeto encontrado...</p> )}
                    </div>
                </div>
            </main>
        </Structure>
    )
}

export default ProjetosColaborador;