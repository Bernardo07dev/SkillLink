import {useState, useEffect} from "react"
import Logo from "/Logo-Skill.png"
import UserFace from "../assets/img/userface.png"
import { faBell, faChartLine, faPeopleGroup, faDiagramProject } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";

const Structure = () => {
    const [dark, setDark] = useState(true)
    const [user, setUser] = useState({})

    useEffect(() => {
        const GetUser = async () => {
            const res = await axios.get('users.json')
            const UserColab = res.data.find((user) => user.id == 1)
            setUser(UserColab)
            console.log(UserColab)
        }

        GetUser();
    }, [])

    const SetTheme = () => {
        if (dark){
            setDark(false)
        } else{
            setDark(true)
        }
    }

    return(
        <main className={`${dark ? "dark" : ""}  w-full min-h-screen flex flex-col bg-white dark:bg-[#101B21]`}>
            <header className="dark:bg-[#101B21] w-full fixed flex flex-row justify-between py-3 px-16 border-b-[0.5px] border-[#63667c4d]">
                <img className="w-[50px] h-[43px] cursor-pointer" src={Logo}></img>
                <div className="w-[20%] flex flex-row justify-end gap-4 items-center">
                    <FontAwesomeIcon className="bg-[#0F2A36] text-[18px] rounded-md cursor-pointer px-2 py-3 text-[#38BDF8]" icon={faBell}></FontAwesomeIcon>
                    <img className="w-8 h-8 rounded-full cursor-pointer" src={UserFace}></img>
                </div>
            </header>

            <header className="w-[20%] pt-18 min-h-screen dark:bg-[#182832] border-r-[0.5px] border-[#63667c4d]">
                <section className="py-6 px-6 flex flex-row items-center justify-center gap-4 dark:text-white">
                    <img className="w-[17%] h-[17%] rounded-full" src={UserFace}></img>
                    <div className="w-[85%]">
                        <p className=" font-semibold text-gray-200 -mb-px">{user.nome}</p>
                        <p className="text-sm text-gray-400">{user.cargo}</p>
                    </div>
                </section>

                <section className="flex flex-row items-center bg-[#174157] gap-2 px-4 mx-4 rounded-xl mb-4 cursor-pointer">
                    <FontAwesomeIcon className="text-[18px] cursor-pointer py-4 text-[#38BDF8]" icon={faChartLine}></FontAwesomeIcon>
                    <p className="dark:text-[#38BDF8] text-sm font-medium">Dashboard</p>
                </section>

                <section className="flex flex-row items-center bg-[#174157] gap-2 px-4 mx-4 rounded-xl mb-4 cursor-pointer">
                    <FontAwesomeIcon className="text-[18px] cursor-pointer py-4 text-[#38BDF8]" icon={faPeopleGroup}></FontAwesomeIcon>
                    <p className="dark:text-[#38BDF8] text-sm font-medium">Times</p>
                </section>

                <section className="flex flex-row items-center bg-[#174157] gap-2 px-4 mx-4 rounded-xl cursor-pointer">
                    <FontAwesomeIcon className="text-[18px] cursor-pointer py-4 text-[#38BDF8]" icon={faDiagramProject}></FontAwesomeIcon>
                    <p className="dark:text-[#38BDF8] text-sm font-medium">Projetos</p>
                </section>

            </header>

        </main>
    )
}

export default Structure;