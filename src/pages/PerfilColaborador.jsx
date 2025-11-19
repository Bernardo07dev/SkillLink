import Structure from '../components/Structure.jsx'
import axios from "axios";
import { useState, useEffect } from "react";
import UserFace from "../assets/img/userface.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin, faRocket, faSliders, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

const PerfilColaborador = () => {
    const [user, setUser] = useState({})
    const [skill, setSKill] = useState([])
    const [showSkill, setshowSkill] = useState("todas")

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
            <section className='dark:bg-[#182832] flex flex-row gap-4 m-8 mb-6 p-8 rounded-lg'>
                    <div className='w-[50%] flex flex-row gap-4'>
                        <img className='w-[22%] h-full rounded-full' src={UserFace}></img>
                        <div className='flex flex-col justify-center'>
                            <h1 className='text-3xl font-semibold dark:text-gray-200'>{user.nome}</h1>
                            <p className='text-gray-400 mb-1 font-medium'>{user?.experiencias?.[0]?.cargo}</p>
                            <div className='flex flex-row text-gray-500 items-center text-sm'>
                                <FontAwesomeIcon icon={faMapPin}></FontAwesomeIcon>
                                <p>{user?.localizacao}</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[50%] flex flex-row gap-4 justify-end items-center'>
                        <button className='dark:bg-[#174157] text-sm font-semibold px-6 bg-[#D0EDFB] cursor-pointer py-3 rounded-md text-[#13A4EC] dark:text-[#00C6FF]'>Editar Perfil</button>
                        <button className='dark:bg-[#13A4EC] text-sm font-semibold px-6 bg-[#D0EDFB] cursor-pointer py-3 rounded-md text-[#13A4EC] dark:text-white'>Compartilhar Perfil</button>
                    </div>
            </section>

            <section className='w-full flex flex-row'>
                <div className='flex flex-col w-[65%] mr-2 ml-8 gap-6'>
                    {/* Seção Sobre */}
                    <div className='flex flex-col p-8 dark:bg-[#182832] rounded-lg'>
                        <h1 className='text-xl text-gray-100 font-semibold mb-1'>Sobre</h1>
                        <p className='text-sm text-gray-400'>Sou Kleber Ferraz, um profissional dedicado e focado em resultados, com mais de 5 anos de experiência em gestão de projetos e análise de dados complexos. Atualmente radicado no Rio de Janeiro/RJ e atuando na área de Marketing, busco sempre aplicar uma visão estratégica e crítica para impulsionar o crescimento e a eficiência.</p>
                    </div>

                    {/* Secção Habilidade */}
                    <div className='flex flex-col p-8 dark:bg-[#182832] rounded-lg'>
                        <h1 className='text-xl text-gray-100 font-semibold mb-1'>Habilidades</h1>
                        <div className='flex flex-row mt-2 mb-6 gap-2'>
                            <button onClick={() => setshowSkill('todas')} class={`${showSkill === 'todas' ? 'bg-[#13A4EC]' : 'bg-[#283339]'} px-5 py-2 text-sm cursor-pointer rounded-lg font-medium`}>Todas</button>
                            <button onClick={() => setshowSkill('hard')} class={`${showSkill === 'hard' ? 'bg-[#13A4EC]' : 'bg-[#283339]'} px-5 py-2 text-sm cursor-pointer rounded-lg font-medium`}>HardSkills</button>
                            <button onClick={() => setshowSkill('soft')} class={`${showSkill === 'soft' ? 'bg-[#13A4EC]' : 'bg-[#283339]'} px-5 py-2 text-sm cursor-pointer rounded-lg font-medium`}>SoftSkills</button>
                        </div>
                        <div className="flex flex-col gap-6 text-sm font-medium text-gray-400">
                            {showSkill === 'hard' ? user.habilidadesTecnicas.map((habilidade, index) => (
                                <div className='flex flex-row items-center gap-4'>
                                    <p key={index}>{habilidade}</p>
                                    <div class="w-[60%] bg-[#283339] rounded-full h-2">
                                        <div class="bg-linear-to-r from-[#00C6FF] to-[#0072FF] h-2 rounded-full w-[75%]"></div>
                                    </div>
                                </div>
                            )) : showSkill === 'soft' ? user.softSkills.map((soft, i) => (
                                <div className='flex flex-row items-center gap-4'>
                                    <p key={i}>{soft}</p>
                                    <div class="w-[60%] bg-[#283339] rounded-full h-2">
                                        <div class="bg-linear-to-r from-[#00C6FF] to-[#0072FF] h-2 rounded-full w-[75%]"></div>
                                    </div>
                                </div>
                            )) : showSkill === 'todas' ? skill.map((s, indice) => (
                                <div className='flex flex-row items-center gap-4'>
                                    <p key={indice}>{s}</p>
                                    <div class="w-[60%] bg-gray-700 rounded-full h-2">
                                        <div class="bg-linear-to-r from-[#00C6FF] to-[#0072FF] h-2 rounded-full w-[75%]"></div>
                                    </div>
                                </div>
                            )): null}
                        </div>
                    </div>
                </div>

                <div className='flex flex-col w-[35%] mr-8 ml-4 gap-6'>
                    {/* Seção Objetivos Carreira */}
                    <div className='dark:bg-[#182832] p-8 rounded-lg'>
                        <h1 className='text-xl text-gray-100 font-semibold mb-4'>Objetivos de Carreira</h1>
                        <div className='flex flex-row text-gray-300 text-sm gap-4 mb-6'>
                            <FontAwesomeIcon className='text-lg text-[#00C6FF] mt-2' icon={faRocket}></FontAwesomeIcon>
                            <p>Fazer a transição para uma função de Gerenciamento de Produtos (Product Management) nos próximos 2 anos.</p>
                        </div>
                        <div className='flex flex-row text-gray-300 text-sm gap-4 mb-6'>
                            <FontAwesomeIcon className='text-lg text-[#00C6FF] mt-2' icon={faSliders}></FontAwesomeIcon>
                            <p>Aprender ativamente modelagem 3D e princípios de design de realidade aumentada.</p>
                        </div>
                        <div className='flex flex-row text-gray-300 text-sm gap-4'>
                            <FontAwesomeIcon className='text-lg text-[#00C6FF] mt-2' icon={faPeopleGroup}></FontAwesomeIcon>
                            <p>Orientar designers juniores e contribuir para o crescimento da comunidade de design.</p>
                        </div>
                    </div>
                </div>

            </section>
        </Structure>
    )
}

export default PerfilColaborador;