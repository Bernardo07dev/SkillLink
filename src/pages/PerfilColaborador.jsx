import Structure from '../components/Structure.jsx'
import axios from "axios";
import { useState, useEffect } from "react";
import UserFace from "../assets/img/userface.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin, faRocket, faSliders, faPeopleGroup, faTrophy, faCircleCheck, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import phoenix from '../assets/img/ph.jpg'
import {useNavigate} from "react-router-dom";

const PerfilColaborador = () => {
    const [user, setUser] = useState({})
    const [skill, setSKill] = useState([])
    const [showSkill, setshowSkill] = useState("todas")
    const navigate = useNavigate()

    useEffect(() => {
        const GetUser = async () => {
            const res = await axios.get('users.json')
            const UserColab = res.data.find((user) => user.id == 2)
            const getSkill = [...UserColab.habilidadesTecnicas, ...UserColab.softSkills]
            setUser(UserColab)
            setSKill(getSkill)
        }

        GetUser();
    }, [])

    console.log(skill)

    return(
        <Structure>
            <section className='dark:bg-[#182832] bg-white flex flex-col sm:flex-row md:gap-4 m-8 mb-6 p-8 rounded-lg'>
                    <div className='sm:w-[50%] sm:mb-0 mb-8 w-full flex flex-row gap-4'>
                        <img className='md:w-[22%] w-[18%] h-[80%] md:h-full rounded-full object-fill' src={UserFace}></img>
                        <div className='flex flex-col justify-center'>
                            <h1 className='text-3xl font-semibold dark:text-gray-200'>{user.nome}</h1>
                            <p className='text-gray-400 mb-1 font-medium'>{user?.experiencias?.[0]?.cargo}</p>
                            <div className='flex flex-row text-gray-500 items-center text-sm'>
                                <FontAwesomeIcon icon={faMapPin}></FontAwesomeIcon>
                                <p>{user?.localizacao}</p>
                            </div>
                        </div>
                    </div>
                    <div className='sm:w-[50%] w-full flex flex-row gap-4 justify-center md:justify-end items-center'>
                        <button className='dark:bg-[#174157] text-sm font-semibold px-6 bg-[#D0EDFB] cursor-pointer py-3 rounded-md text-[#13A4EC] dark:text-[#00C6FF]'>Editar Perfil</button>
                        <button className='dark:bg-[#13A4EC] text-sm font-semibold px-6 bg-[#D0EDFB] cursor-pointer py-3 rounded-md text-[#13A4EC] dark:text-white'>Compartilhar Perfil</button>
                    </div>
            </section>

            <section className='w-full flex flex-col md:flex-row md:gap-0 gap-6'>
                <div className='flex flex-col w-full md:w-[65%] px-8 md:pl-8 md:px-0 gap-6'>
                    {/* Seção Sobre */}
                    <div className='flex flex-col p-8 dark:bg-[#182832] bg-white rounded-lg'>
                        <h1 className='text-xl dark:text-gray-100 font-semibold mb-1'>Sobre</h1>
                        <p className='text-sm text-gray-400'>Sou Kleber Ferraz, um profissional dedicado e focado em resultados, com mais de 5 anos de experiência em gestão de projetos e análise de dados complexos. Atualmente radicado no Rio de Janeiro/RJ e atuando na área de Marketing, busco sempre aplicar uma visão estratégica e crítica para impulsionar o crescimento e a eficiência.</p>
                    </div>

                    {/* Secção Habilidade */}
                    <div className='flex flex-col p-8 dark:bg-[#182832] bg-white rounded-lg'>
                        <h1 className='text-xl dark:text-gray-100 font-semibold mb-1'>Habilidades</h1>
                        <div className='flex flex-col lg:flex-row mt-2 mb-6 gap-2'>
                            <button onClick={() => setshowSkill('todas')} class={`${showSkill === 'todas' ? 'bg-[#13A4EC] dark:text-black text-white' : 'dark:bg-[#283339] bg-gray-100 '} px-5 py-2 text-sm cursor-pointer rounded-lg font-medium`}>Todas</button>
                            <button onClick={() => setshowSkill('hard')} class={`${showSkill === 'hard' ? 'bg-[#13A4EC] dark:text-black text-white' : 'dark:bg-[#283339] bg-gray-100'} px-5 py-2 text-sm cursor-pointer rounded-lg font-medium`}>HardSkills</button>
                            <button onClick={() => setshowSkill('soft')} class={`${showSkill === 'soft' ? 'bg-[#13A4EC] dark:text-black text-white' : 'dark:bg-[#283339] bg-gray-100'} px-5 py-2 text-sm cursor-pointer rounded-lg font-medium`}>SoftSkills</button>
                        </div>
                        <div className="flex flex-col gap-6 text-sm font-medium text-gray-400">
                            {showSkill === 'hard' ? user.habilidadesTecnicas.map((habilidade, index) => (
                                <div className='flex flex-row items-center gap-4'>
                                    <p key={index}>{habilidade}</p>
                                    <div class="w-[60%] dark:bg-[#283339] bg-gray-200 rounded-full h-2">
                                        <div class="bg-linear-to-r from-[#00C6FF] to-[#0072FF] h-2 rounded-full w-[75%]"></div>
                                    </div>
                                </div>
                            )) : showSkill === 'soft' ? user.softSkills.map((soft, i) => (
                                <div className='flex flex-row items-center gap-4'>
                                    <p key={i}>{soft}</p>
                                    <div class="w-[60%] dark:bg-[#283339] bg-gray-200 rounded-full h-2">
                                        <div class="bg-linear-to-r from-[#00C6FF] to-[#0072FF] h-2 rounded-full w-[75%]"></div>
                                    </div>
                                </div>
                            )) : showSkill === 'todas' ? skill.map((s, indice) => (
                                <div className='flex flex-row items-center gap-4'>
                                    <p key={indice}>{s}</p>
                                    <div class="w-[60%] dark:bg-[#283339] bg-gray-200 rounded-full h-2">
                                        <div class="bg-linear-to-r from-[#00C6FF] to-[#0072FF] h-2 rounded-full w-[75%]"></div>
                                    </div>
                                </div>
                            )): null}
                        </div>
                    </div>

                    {/* Secção Projeto */}
                    <div className='dark:bg-[#182832] bg-white p-8 flex flex-col rounded-lg'>
                        <h1 className='text-xl dark:text-gray-100 font-semibold mb-6'>Projeto Atual</h1>
                        <div className='w-[50%] rounded-md'>
                            <img className='rounded-lg mb-3' src={phoenix}></img>
                            <h2 className='text-lg text-gray-600 dark:text-gray-100 font-semibold'>Time Phoenix</h2>
                            <p className='text-xs text-gray-400'>Designer Líder de UX para a plataforma de análise empresarial (analytics) de próxima geração</p>
                            <div onClick={() => navigate('/TimesColaborador')} className='w-fit my-2 cursor-pointer rounded-md dark:bg-[#174157] bg-[#E2E8F0] flex flex-row items-center justify-center gap-2 py-3 px-6'>
                                <p className='font-semibold text-sm'>Ver Time</p>
                            </div>
                        </div>    
                    </div>
                </div>

                <div className='flex flex-col w-full md:w-[35%] px-8 md:pl-4 md:pr-8 gap-6'>
                    {/* Seção Objetivos Carreira */}
                    <div className='dark:bg-[#182832] bg-white p-8 rounded-lg'>
                        <h1 className='text-xl dark:text-gray-100 font-semibold mb-4'>Objetivos de Carreira</h1>
                        <div className='flex flex-row text-gray-700 dark:text-gray-300 text-sm gap-4 mb-6'>
                            <FontAwesomeIcon className='text-lg text-[#00C6FF] mt-2' icon={faRocket}></FontAwesomeIcon>
                            <p>Fazer a transição para uma função de Gerenciamento de Produtos (Product Management) nos próximos 2 anos.</p>
                        </div>
                        <div className='flex flex-row text-gray-700 dark:text-gray-300 text-sm gap-4 mb-6'>
                            <FontAwesomeIcon className='text-lg text-[#00C6FF] mt-2' icon={faSliders}></FontAwesomeIcon>
                            <p>Aprender ativamente modelagem 3D e princípios de design de realidade aumentada.</p>
                        </div>
                        <div className='flex flex-row text-gray-700 dark:text-gray-300 text-sm gap-4'>
                            <FontAwesomeIcon className='text-lg text-[#00C6FF] mt-2' icon={faPeopleGroup}></FontAwesomeIcon>
                            <p>Orientar designers juniores e contribuir para o crescimento da comunidade de design.</p>
                        </div>
                    </div>

                    {/* Seção Objetivos Carreira */}
                    <div className='dark:bg-[#182832] bg-white p-8 rounded-lg'>
                        <h1 className='text-xl dark:text-gray-100 font-semibold mb-4'>Atividade Recente</h1>
                        <div className='flex flex-row text-gray-700 dark:text-gray-300 text-sm gap-3 mb-6'>
                            <FontAwesomeIcon className='text-lg bg-[#C8E6F5] dark:bg-[#1C3947] p-4 rounded-full text-[#00C6FF] mt-2' icon={faTrophy}></FontAwesomeIcon>
                            <div className='flex flex-col'>
                                <p>Ganhou o distintivo (ou medalha) 'Protótipos Avançados</p>
                                <p className='text-gray-500'>2d atrás</p>
                            </div>
                        </div>
                        <div className='flex flex-row text-gray-700 dark:text-gray-300 text-sm gap-3 mb-6 items-center'>
                            <FontAwesomeIcon className='text-lg bg-[#C8E6F5] dark:bg-[#1C3947] px-4 py-[1em] rounded-full text-[#00C6FF] mt-2' icon={faCircleCheck}></FontAwesomeIcon>
                            <div className='flex flex-col'>
                                <p>Concluiu o Sprint 4 do Projeto Phoenix</p>
                                <p className='text-gray-500'>4d atrás</p>
                            </div>
                        </div>
                        <div className='flex flex-row text-gray-700 dark:text-gray-300 text-sm gap-3 items-center'>
                            <FontAwesomeIcon className='text-lg dark:bg-[#3A2949] bg-[#E6D6F7] px-4 py-[1em] rounded-full text-[#C084FC] mt-2' icon={faUserPlus}></FontAwesomeIcon>
                            <div className='flex flex-col'>
                                <p>Juntou-se à Equipe da Guilda de Inovação.</p>
                                <p className='text-gray-500'>6d atrás</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </Structure>
    )
}

export default PerfilColaborador;