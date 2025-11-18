import {useState, useEffect} from "react"
import Logo from "/Logo-Skill.png"
import UserFace from "../assets/img/userface.png"
import {faBell} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx"

const Structure = (props) => {
    const [dark, setDark] = useState(true)
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

    const SetTheme = () => {
        if (dark){
            setDark(false)
        } else{
            setDark(true)
        }
    }

    return(
        <main className={`${dark ? "dark" : ""} min-w-full min-h-screen flex flex-col bg-white dark:bg-[#101B21]`}>
            <header className="dark:bg-[#101B21] w-full fixed flex flex-row justify-between py-3 px-16 border-b-[0.5px] border-[#63667c4d]">
                <img className="w-[50px] h-[43px] cursor-pointer" src={Logo}></img>
                <div className="w-[20%] flex flex-row justify-end gap-4 items-center">
                    <FontAwesomeIcon className="bg-[#0F2A36] text-[18px] rounded-md cursor-pointer px-2 py-3 text-[#38BDF8]" icon={faBell}></FontAwesomeIcon>
                    <img className="w-8 h-8 rounded-full cursor-pointer" src={UserFace}></img>
                </div>
            </header>

            <section className="flex flex-row w-full">
                <div className="w-[300px]">
                    <Sidebar estado={props.estado}></Sidebar>
                </div>

                <div className="w-full my-16 dark:text-white">
                    {props.children}
                </div>
            </section>
         </main>
    )
}

export default Structure;