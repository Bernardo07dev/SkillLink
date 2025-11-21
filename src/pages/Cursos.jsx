// PÁGINA CURSOS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Structure from '../components/Structure.jsx';

const Cursos = () => {
    return(
        <Structure estado="cursos">
            <main className="p-8">
                <section className='w-[75%]'>
                    <h1 className="mt-4 mb-2 text-2xl font-semibold text-gray-100">UX/UI Fundamentals + Design Thinking</h1>
                    <p className="text-sm font-medium text-gray-400 mb-4">Acompanhe os times dos quais você faz parte e visualize o progresso de cada iniciativa em tempo real. 
                    Entenda como cada membro contribui para os resultados, identifique pontos de melhoria, fortaleça a colaboração 
                    entre áreas e mantenha-se atualizado sobre entregas, responsabilidades e etapas em andamento. Essa visão clara 
                    ajuda você a trabalhar com mais contexto, alinhamento e impacto dentro da equipe.</p>
                    <div className='dark:bg-[#182832] p-8 rounded-lg'>
                        <h1 className='text-lg font-semibold text-gray-200'>Modulos do curso</h1>
                        <div className='mt-4 flex flex-row justify-between p-6 border border-gray-700 rounded-2xl w-full'>
                            <div className='flex flex-row gap-4 items-center'>
                                <FontAwesomeIcon className='bg-[#1A473B] text-[#22C55E] p-4 text-lg rounded-full' icon={faCheck}></FontAwesomeIcon>
                                <div>
                                    <h1 className='text-gray-300 font-semibold'>Módulo 1: Introdução a design de sistemas</h1>
                                    <p className='text-gray-500 text-sm font-semibold'>Completo</p>
                                </div>
                            </div>
                            <button className='py-2 px-4 rounded-lg bg-[#283339] text-gray-100 text-sm font-medium'>Ver novamente</button>
                        </div>
                        <div className='mt-4 flex flex-row justify-between p-6 border border-gray-700 rounded-2xl w-full'>
                            <div className='flex flex-row gap-4 items-center'>
                                <FontAwesomeIcon className='bg-[#1A473B] text-[#22C55E] p-4 text-lg rounded-full' icon={faCheck}></FontAwesomeIcon>
                                <div>
                                    <h1 className='text-gray-300 font-semibold'>Módulo 1: Introdução a design de sistemas</h1>
                                    <p className='text-gray-500 text-sm font-semibold'>Completo</p>
                                </div>
                            </div>
                            <button className='py-2 px-4 rounded-lg bg-[#283339] text-gray-100 text-sm font-medium'>Ver novamente</button>
                        </div>
                    </div>
                </section>
            </main>
        </Structure>
    )
}

export default Cursos;