// PÁGINA CURSOS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCirclePlay, faCircle, faClock} from '@fortawesome/free-solid-svg-icons';
import Structure from '../components/Structure.jsx';
import user2 from "../assets/img/jane.png"

const Cursos = () => {
    return(
        <Structure estado="cursos">
            <main className="p-8 flex flex-row gap-6">
                <section className='w-[70%]'>
                    <h1 className="mt-4 mb-2 text-2xl font-semibold dark:text-gray-100">UX/UI Fundamentals + Design Thinking</h1>
                    <p className="text-sm font-medium text-gray-400 mb-4">Acompanhe os times dos quais você faz parte e visualize o progresso de cada iniciativa em tempo real. 
                    Entenda como cada membro contribui para os resultados, identifique pontos de melhoria, fortaleça a colaboração 
                    entre áreas e mantenha-se atualizado sobre entregas, responsabilidades e etapas em andamento. Essa visão clara 
                    ajuda você a trabalhar com mais contexto, alinhamento e impacto dentro da equipe.</p>
                    <div className='dark:bg-[#182832] bg-white p-8 rounded-2xl'>
                        <h1 className='text-lg font-semibold dark:text-gray-200'>Modulos do curso</h1>
                        <div className='mt-4 flex flex-row justify-between p-6 border-2 dark:border-gray-700 border-gray-100 rounded-2xl w-full'>
                            <div className='flex flex-row gap-4 items-center'>
                                <FontAwesomeIcon className='dark:bg-[#1A473B] bg-[#c8ead9] text-[#22C55E] p-3 text-xl rounded-full' icon={faCheck}></FontAwesomeIcon>
                                <div>
                                    <h1 className='dark:text-gray-300 text-gray-600 font-semibold'>Módulo 1: Introdução a design de sistemas</h1>
                                    <p className='text-gray-500 text-sm font-semibold'>Completo</p>
                                </div>
                            </div>
                            <button className='py-2 px-4 rounded-lg bg-gray-100 dark:bg-[#283339] text-gray-600 dark:text-gray-100 text-sm font-medium'>Ver novamente</button>
                        </div>
                        <div className='mt-4 flex flex-row justify-between p-6 border-2 dark:border-gray-700 border-gray-100 rounded-2xl w-full'>
                            <div className='flex flex-row gap-4 items-center'>
                                <FontAwesomeIcon className='dark:bg-[#1F3A59] bg-[#bccaefc7] text-[#13a4ec7b] dark:text-[#13A4EC] p-3 text-xl rounded-full' icon={faCirclePlay}></FontAwesomeIcon>
                                <div>
                                    <h1 className='dark:text-gray-300 text-gray-600 font-semibold'>Módulo 2: Integração avançada de Design</h1>
                                    <p className='text-gray-500 text-sm font-semibold'>Em progresso</p>
                                </div>
                            </div>
                            <button className='py-2 px-4 rounded-lg bg-[#13A4EC] text-gray-100 text-sm font-medium'>Continuar</button>
                        </div>
                        <div className='mt-4 flex flex-row justify-between p-6 border-2 dark:border-gray-700 border-gray-100 rounded-2xl w-full'>
                            <div className='flex flex-row gap-4 items-center'>
                                <FontAwesomeIcon className='dark:bg-[#283339] bg-[#E2E8F0] text-white p-3 text-xl rounded-full' icon={faCircle}></FontAwesomeIcon>
                                <div>
                                    <h1 className='dark:text-gray-300 text-gray-600 font-semibold'>Módulo 3: Pesquisa de usuário e teste</h1>
                                    <p className='text-gray-500 text-sm font-semibold'>Não começou</p>
                                </div>
                            </div>
                            <button className='py-2 px-4 rounded-lg bg-gray-100 dark:bg-[#283339] text-gray-600 dark:text-gray-100  text-sm font-medium cursor-pointer'>Começar</button>
                        </div>
                    </div>
                </section>

                <section className='w-[30%] my-12'>
                    <div className='dark:bg-[#182832] bg-white p-8 rounded-xl mb-6'>
                        <div className='flex flex-row justify-between mb-4'>
                            <p className='text-sm text-gray-400 font-medium'>Seu progresso</p>
                            <p className='text-sm text-[#13A4EC] font-semibold'>55%</p>
                        </div>
                        <div className='dark:bg-[#283339] bg-gray-100 w-full rounded-full'>
                            <div className='bg-[#13A4EC] py-1 w-[55%] rounded-full'></div>
                        </div>
                        <button className='bg-[#13A4EC] dark:text-black text-white mt-6 p-3 rounded-xl w-full font-semibold text-sm'>Ir para curso</button>
                        <div className='flex flex-row dark:text-gray-500 text-gray-400 mt-6 gap-1 items-center'>
                            <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                            <p className='font-medium text-sm'>Tempo estimado de 4h</p>
                        </div>
                    </div>

                    <div className='dark:bg-[#182832] bg-white p-8 rounded-xl mb-6'>
                        <h1 className='dark:text-gray-100 font-medium mb-4'>Instrutor</h1>
                        <div className='flex flex-row gap-4'>
                            <img className='w-[20%] rounded-full' src={user2}></img>
                            <div>
                                <h1 className='text-lg font-semibold text-gray-600 dark:text-gray-200'>Yara Martins</h1>
                                <p className='font-medium text-gray-400 text-sm'>Líder em Design e UX</p>
                            </div>
                        </div>
                    </div>

                    
                    <div className='dark:bg-[#182832] bg-white p-8 rounded-xl'>
                        <h1 className='dark:text-gray-100 font-medium mb-5'>Habilidade que este curso tem:</h1>
                        <div className='flex flex-row gap-2'>
                            <p className='text-sm text-gray-400 bg-gray-100 dark:bg-[#283339] px-5 py-1 rounded-full'>UI Design</p>
                            <p className='text-sm text-gray-400 bg-gray-100 dark:bg-[#283339] px-5 py-1 rounded-full'>UX Research</p>
                        </div>
                        <div className='flex flex-row gap-2 mt-4'>
                            <p className='text-sm text-gray-400 bg-gray-100 dark:bg-[#283339] px-5 py-1 rounded-full'>Prototipação</p>
                            <p className='text-sm text-gray-400 bg-gray-100 dark:bg-[#283339] px-5 py-1 rounded-full'>Design Sistem</p>
                        </div>
                    </div>
                </section>

            </main>
        </Structure>
    )
}

export default Cursos;