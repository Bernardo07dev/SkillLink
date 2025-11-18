// DASHBOARD COLABORADOR
import Structure from '../components/Structure.jsx'
import axios from "axios";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck, faArrowRight, faTachographDigital, faBrain, faCalendar} from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import GraficoCircular from '../components/GraficoCircular.jsx';
import user1 from "../assets/img/emily.png"
import user2 from "../assets/img/jane.png"
import user3 from "../assets/img/mike.png"


const DashColaborador = () => {
    const [user, setUser] = useState({})

    useEffect(() => {
        const GetUser = async () => {
            const res = await axios.get('users.json')
            const UserColab = res.data.find((user) => user.id == 1)
            setUser(UserColab)
        }

        GetUser();
    }, [])

    return(
        <Structure estado="dash">
            <main className='flex flex-row w-full p-8 gap-6'>
                <section className='flex flex-col w-[70%] gap-8'>
                    {/* Seção Demandas */}
                    <div className='dark:bg-[#182832] p-8 justify-start items-start rounded-lg'>
                        <h1 className='text-xl font-semibold'>Bem vindo(a) de volta {user?.nome}</h1>
                        <p className='text-gray-400 text-sm'>Veja suas demandas para essa semana:</p>
                        <div className='flex flex-row mt-4 gap-4'>
                            <div className='bg-[#101c22b2] gap-1 w-[33.3%] flex flex-col p-6 rounded-lg cursor-pointer'>
                                <FontAwesomeIcon className='text-xl h-4 p-3 rounded-md mb-2 text-[#38BDF8] bg-[#0F2A36]' icon={faListCheck}></FontAwesomeIcon>
                                <p className='font-semibold text-gray-200'>Treta entre design e dev</p>
                                <p className='text-xs text-gray-500'>Task: design quer um componente novo, mas explode o prazo</p>
                            </div>
                            <div className='bg-[#101c22b2] w-[33.3%] gap-1 flex flex-col p-6 rounded-lg cursor-pointer'>
                                <FontAwesomeIcon className='text-xl h-4 p-3 rounded-md mb-2 text-[#38BDF8] bg-[#0F2A36]' icon={faListCheck}></FontAwesomeIcon>
                                <p className='font-semibold'>Alinhar roadmap</p>
                                <p className='text-xs text-gray-500'>Task: Preciso que atualize o roadmap do Q2</p>
                            </div>
                        </div>
                    </div>

                    {/* Seção Projetos */}
                    <div className='dark:bg-[#182832] w-full p-8 rounded-lg flex flex-row gap-6 justify-center'>
                        <div className='bg-linear-to-r from-[#00C6FF] to-[#0072FF] w-[45%] rounded-lg'></div>
                        <div className='w-[55%] flex flex-col'>
                            <h1 className='font-semibold text-lg mb-1'>Complete seu perfil: <strong>75% concluído</strong></h1>
                            <p className='text-gray-400 text-sm'>Adicone suas melhores habilidades, cursos e certificações</p>
                            <div class="w-[90%] bg-gray-700 rounded-full h-2 mt-4 mb-2">
                                <div class="bg-linear-to-r from-[#00C6FF] to-[#0072FF] h-2 rounded-full w-[75%]"></div>
                            </div>
                            <div className='w-fit my-2 bg-[#174157] cursor-pointer py-3 rounded-md text-[#00C6FF] flex flex-row items-center justify-center px-4 gap-2'>
                                <p className='font-semibold text-sm'>Ver perfil</p>
                                <FontAwesomeIcon className='font-semibold' icon={faArrowRight}></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>

                    {/* Seção Recomendações */}
                    <div className='dark:bg-[#182832] w-full p-8 rounded-lg flex flex-col gap-6 justify-start'>
                        <h1 className='font-semibold text-lg'>Cursos que recomendamos para você:</h1>
                        <div className='flex flex-row gap-6'>
                            <div className='w-[50%] border-2 border-[#c0bcff22] p-6 rounded-xl gap-2 flex flex-col'>
                                <FontAwesomeIcon className='text-4xl mb-2 text-[#13A4EC]' icon={faTachographDigital}></FontAwesomeIcon>
                                <h2 className='text-gray-200 font-bold'>UX/UI Fundamentals + Design Thinking</h2>
                                <p className='text-sm text-gray-500'>Aprenda os princípios essenciais de experiência do usuário, interface e prototipação.</p>
                                <div className='w-fit my-2 cursor-pointer rounded-md text-[#00C6FF] flex flex-row items-center justify-center gap-2 underline'>
                                    <p className='font-semibold text-sm'>Ver treinamento</p>
                                    <FontAwesomeIcon className='font-semibold' icon={faArrowRight}></FontAwesomeIcon>
                                </div>
                            </div>

                            <div className='w-[50%] border-2 border-[#c0bcff22] p-6 rounded-xl gap-2 flex flex-col'>
                                <FontAwesomeIcon className='text-4xl mb-2 text-[#13A4EC]' icon={faBrain}></FontAwesomeIcon>
                                <h2 className='text-gray-200 font-bold'>Introdução à Inteligência Artificial aplicada a Produtos</h2>
                                <p className='text-sm text-gray-500'>Entenda como a IA transforma produtos digitais, explore casos de uso práticos e aprenda a identificar oportunidades</p>
                                <div className='w-fit my-2 cursor-pointer rounded-md text-[#00C6FF] flex flex-row items-center justify-center gap-2 underline'>
                                    <p className='font-semibold text-sm'>Ver treinamento</p>
                                    <FontAwesomeIcon className='font-semibold' icon={faArrowRight}></FontAwesomeIcon>
                                </div>
                            </div> 
                        </div>
                    </div>

                    {/* Seção Times */}
                    <div className='dark:bg-[#182832] w-full p-8 rounded-lg flex flex-col gap-6 justify-start'>
                        <h1 className='font-semibold text-lg'>Times que recomendamos para você:</h1>
                        <div className='flex flex-row gap-4'>
                            <div className='w-[33.3%] bg-[#101C22] p-6 rounded-xl gap-2 flex flex-col'>
                                <div class="w-14 h-14 bg-[#10374A] font-bold flex justify-center items-center rounded-full text-[#13A4EC]">P</div>
                                <h2 className='text-gray-200 font-bold'>Projeto Phoenix</h2>
                                <p className='text-sm text-gray-500'>Assistente Inteligente de Suporte interno</p>
                                <p className='text-sm underline text-gray-400'>IA aplicada a Produtos</p>
                                <div className='w-fit my-2 cursor-pointer rounded-md bg-[#283339] flex flex-row items-center justify-center gap-2 py-4 px-6'>
                                    <p className='font-semibold text-sm'>Conectar</p>
                                </div>
                            </div>

                            <div className='w-[33.3%] bg-[#101C22] p-6 rounded-xl gap-2 flex flex-col'>
                                <div class="w-14 h-14 bg-[#2E274C] font-bold flex justify-center items-center rounded-full text-[#A855F7]">M</div>
                                <h2 className='text-gray-200 font-bold'>Onboarding Maverick</h2>
                                <p className='text-sm text-gray-500'>Melhoria completa do onboarding.</p>
                                <p className='text-sm underline text-gray-400'>Design Thinking</p>
                                <div className='w-fit my-2 cursor-pointer rounded-md bg-[#283339] flex flex-row items-center justify-center gap-2 py-4 px-6'>
                                    <p className='font-semibold text-sm'>Conectar</p>
                                </div>
                            </div>

                            <div className='w-[33.3%] bg-[#101C22]  p-6 rounded-xl gap-2 flex flex-col'>
                                <div class="w-14 h-14 bg-[#103B3C] font-bold flex justify-center items-center rounded-full text-[#14B7A5]">D</div>
                                <h2 className='text-gray-200 font-bold'>Métrics Dash</h2>
                                <p className='text-sm text-gray-500'>Dashboard de Métricas do Time Ágil.</p>
                                <p className='text-sm underline text-gray-400'>Gestão / Agilidade</p>
                                <div className='w-fit my-2 cursor-pointer rounded-md bg-[#283339] flex flex-row items-center justify-center gap-2 py-4 px-6'>
                                    <p className='font-semibold text-sm'>Conectar</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='flex flex-col w-[30%] gap-8'>
                    {/* Secction Feat com time */}
                    <div className='dark:bg-[#182832] p-8 justify-start items-center rounded-lg'>
                        <h1 className='font-semibold text-lg'>Seu feat com time:</h1>
                        <div className='flex justify-center w-full my-8'>
                            <GraficoCircular percentage={75}></GraficoCircular>
                        </div>
                        <p className='text-center text-sm text-gray-400'>Você possui 75% das competências requeridas para o Projeto Phoenix.</p>
                    </div>

                    {/* Secção Compromisso */}
                    <div className='dark:bg-[#182832] p-8 justify-start items-center rounded-lg'>
                        <h1 className='font-semibold text-lg mb-4'>Próximos compromissos:</h1>
                        <div className='p-6 dark:bg-[#101C22] rounded-lg'>
                            <h1 className='text-gray-200  mb-4'>Projeto UI/UX Plataforma</h1>
                            <div className='flex flex-row items-center gap-2 text-gray-500 mb-4 font-semibold'>
                                <FontAwesomeIcon className='font-semibold' icon={faCalendar}></FontAwesomeIcon>
                                <p className='text-sm'>Hoje, 13:30</p>
                            </div>
                            <div className='flex flex-row items-center gap-2 text-gray-500 font-semibold'>
                                <FontAwesomeIcon className='font-semibold' icon={faGoogle}></FontAwesomeIcon>
                                <p className='text-sm'>Google Meet</p>
                            </div>
                        </div>
                    </div>

                    {/* Secção Rede */}
                    <div className='dark:bg-[#182832] p-8 justify-start items-center rounded-lg'>
                        <h1 className='font-semibold text-lg mb-6'>Atividade Recente na sua Rede</h1>
                        <div className='flex flex-row gap-4 mb-6'>
                            <img className='w-[15%] h-[15%] rounded-full' src={user1}></img>
                            <div className='flex flex-col w-[85%]'>
                                <p className='text-sm'><strong>Helena Ramos</strong> recomendou você por <span className="text-[#4dbef6] font-bold">User Research</span></p>
                                <p className='text-sm mt-1 text-gray-400'>2d atrás</p>
                            </div>
                        </div>

                        <div className='flex flex-row gap-4 mb-6'>
                            <img className='w-[15%] h-[15%] rounded-full' src={user3}></img>
                            <div className='flex flex-col w-[85%]'>
                                <p className='text-sm'><strong>Bruno Pereiras</strong> entrou para a equipe do Projeto Phoenix</p>
                                <p className='text-sm mt-1 text-gray-400'>4d atrás</p>
                            </div>
                        </div>

                        <div className='flex flex-row gap-4'>
                            <img className='w-[15%] h-[15%] rounded-full' src={user2}></img>
                            <div className='flex flex-col w-[85%]'>
                                <p className='text-sm'><strong>Yara Martins</strong> atualizou o status de Mobile App V2 para “Em Revisão”</p>
                                <p className='text-sm mt-1 text-gray-400'>7d atrás</p>
                            </div>
                        </div>
                    </div>

                </section>
            </main>
        </Structure>
    )
}

export default DashColaborador;