import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useState, useEffect} from "react"
import { faChartLine, faPeopleGroup, faDiagramProject } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserFace from "../assets/img/userface.png"

const Sidebar = (props) => {
    const [user, setUser] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        const GetUser = async () => {
            const res = await axios.get('users.json')
            const UserColab = res.data.find((user) => user.id == 1)
            setUser(UserColab)
            console.log(UserColab)
        }

        GetUser();
    }, [])

    return(
        <header className="w-full pt-18 h-full dark:bg-[#182832] bg-white shadow-xs">
            <section className="py-6 px-8 flex flex-row items-center justify-center gap-4 dark:text-white">
                <img className="w-[17%] h-[17%] rounded-full" src={UserFace}></img>
                <div className="w-[85%]">
                    <p className=" font-semibold dark:text-gray-200 -mb-px-2">{user.nome}</p>
                    <p className="text-sm text-gray-400">{user?.experiencias?.[0]?.cargo}</p>
                </div>
            </section>

            <section onClick={() => navigate('/DashColaborador')} className={`${props.estado == 'dash' ?  'dark:bg-[#174157] bg-[#D0EDFB]' : ''} flex flex-row items-center gap-2 px-4 mx-6 rounded-xl mb-1 cursor-pointer`}>
                <FontAwesomeIcon className={`${props.estado == 'dash' ?  'dark:text-[#38BDF8] text-[#13A4EC]' : 'dark:text-gray-300'} text-[18px] cursor-pointer py-3`} icon={faChartLine}></FontAwesomeIcon>
                <p className={`${props.estado == 'dash' ?  'dark:text-[#38BDF8] text-[#13A4EC]' : 'dark:text-gray-300'} text-sm font-medium`}>Dashboard</p>
            </section>

            <section onClick={() => navigate('/TimesColaborador')} className={`${props.estado == 'times' ?  'dark:bg-[#174157] bg-[#D0EDFB]' : ''} flex flex-row items-center gap-2 px-4 mx-6 rounded-xl cursor-pointer`}>
                <FontAwesomeIcon className={`${props.estado == 'times' ?  'dark:text-[#38BDF8] text-[#13A4EC]' : 'dark:text-gray-300'} text-[18px] cursor-pointer py-3`} icon={faPeopleGroup}></FontAwesomeIcon>
                <p className={`${props.estado == 'times' ?  'dark:text-[#38BDF8] text-[#13A4EC]' : 'dark:text-gray-300'} text-sm font-medium`}>Times</p>
            </section>

                
            <section onClick={() => navigate('/ProjetosColaborador')}  className={`${props.estado == 'projetos' ?  'dark:bg-[#174157] bg-[#D0EDFB]' : ''} flex flex-row items-center gap-2 px-4 mx-6 rounded-xl cursor-pointer`}>
                <FontAwesomeIcon className={`${props.estado == 'projetos' ?  'dark:text-[#38BDF8] text-[#13A4EC]' : 'dark:text-gray-300'} text-[18px] cursor-pointer py-3`} icon={faDiagramProject}></FontAwesomeIcon>
                <p className={`${props.estado == 'projetos' ?  'dark:text-[#38BDF8] text-[#13A4EC]' : 'dark:text-gray-300'}  text-sm font-medium`}>Projetos</p>
            </section>
        </header>
    )
}

export default Sidebar;