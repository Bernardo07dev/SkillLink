import {useState} from "react"
import Logo from "/Logo-Skill.png"
import UserFace from "../assets/img/userface.png"
import {faBell} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useNavigate} from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx"

const Structure = (props) => {
    const [dark, setDark] = useState(true)
    const navigate = useNavigate();

    const SetTheme = () => {
        if (dark){
            setDark(false)
        } else{
            setDark(true)
        }
    }

    return(
        <main className={`${dark ? "dark" : ""} transition-colors min-w-full min-h-screen flex flex-col bg-[#F6F7F8] dark:bg-[#101B21]`}>
            <header className="dark:bg-[#101B21] shadow-xs bg-white w-full z-2 sm:px-8 fixed flex flex-row justify-between py-3 px-4 border-b-[0.5px] border-[#FFF] dark:border-[#63667c4d]">
                <img className="h-10 w-auto object-contain cursor-pointer" src={Logo}></img>
                <div className="md:w-[20%] w-[60%] flex flex-row justify-end gap-4 items-center">
                    <div onClick={() => SetTheme()} className={`${dark ? "bg-[#ffffff1c]" : "bg-[#1313132d]"} h-8 w-16 cursor-pointer rounded-full flex items-center`}>
                        <div className={`bg-white h-6 w-6 rounded-full mx-[0.4em] ${dark ? "translate-x-0" : "translate-x-7"} transform transition-transform duration-300 ease-in-out `}></div>
                    </div>
                    <FontAwesomeIcon className="dark:bg-[#0F2A36] bg-[#c3c3c32d] text-[18px] rounded-md cursor-pointer px-2 py-3 text-[#18A6EC]" icon={faBell}></FontAwesomeIcon>
                    <img className="w-8 h-8 rounded-full cursor-pointer" onClick={() => navigate('/PerfilColaborador')} src={UserFace}></img>
                </div>
            </header>

            <section className="flex flex-row w-full min-h-screen">
                <div className="w-[350px] hidden lg:flex">
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