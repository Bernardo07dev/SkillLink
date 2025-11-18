// DASHBOARD COLABORADOR
import Structure from '../components/Structure.jsx'
import axios from "axios";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
            <main className='flex flex-row w-full p-8'>
                <section className='flex flex-col w-[65%] gap-8'>
                    {/* Seção Demandas */}
                    <div className='dark:bg-[#182832] p-8 justify-start items-start rounded-lg'>
                        <h1 className='text-xl font-semibold'>Bem vindo(a) de volta {user?.nome}</h1>
                        <p className='text-gray-400 text-sm'>Veja suas demandas para essa semana:</p>
                        <div className='flex flex-row mt-4 gap-4'>
                            <div className='bg-[#13A4EC] w-[33.3%] flex flex-col p-6 rounded-lg cursor-pointer'>
                                <FontAwesomeIcon className='text-2xl mb-2' icon={faListCheck}></FontAwesomeIcon>
                                <p className='font-semibold'>Treta entre design e dev</p>
                                <p className='text-xs font-light'>Task: design quer um componente novo, mas explode o prazo</p>
                            </div>
                            <div className='bg-[#13A4EC] w-[33.3%] flex flex-col p-6 rounded-lg cursor-pointer'>
                                <FontAwesomeIcon className='text-2xl mb-2' icon={faListCheck}></FontAwesomeIcon>
                                <p className='font-semibold'>Alinhar roadmap</p>
                                <p className='text-xs font-light'>Task: Preciso que atualize o roadmap do Q2</p>
                            </div>
                        </div>
                    </div>

                    {/* Seção Projetos */}
                    <div className='dark:bg-[#182832] w-full p-8 rounded-lg flex flex-row gap-6 justify-center'>
                        <div className='bg-linear-to-r from-[#00C6FF] to-[#0072FF] w-[50%] rounded-lg'></div>
                        <div className='w-[50%] flex flex-col'>
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
                    <div className='dark:bg-[#182832] w-full p-8 rounded-lg flex flex-row gap-6 justify-center'>
                        <div className='bg-linear-to-r from-[#00C6FF] to-[#0072FF] w-[50%] rounded-lg'></div>
                        <div className='w-[50%] flex flex-col'>
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
                </section>
            </main>
        </Structure>
    )
}

export default DashColaborador;