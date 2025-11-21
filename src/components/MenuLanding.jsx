import Logo from "/Logo-Skill.png"
import {useNavigate} from "react-router-dom"

const MenuLanding = () => {

    const navigate = useNavigate();

    return (
        <header className="w-full fixed flex flex-row justify-around bg-[#cacaca07] z-20 items-center backdrop-blur-md text-white text-sm px-8 py-4">
            <div className="w-[70%] sm:w-[50%] flex flex-row justify-start items-center">
                <img className="w-10 sm:w-12 md:w-14" src={Logo}></img>
            </div>

            <div className="sm:w-[50%] w-[30%] flex flex-row justify-end items-center gap-4 mr-4">
                <button onClick={() => navigate("/Login")} className="cursor-pointer bg-[#38BDF8] px-5 py-2 rounded-full text-black font-semibold">Entrar</button>
                <button onClick={() => navigate("/Cadastro")} className="cursor-pointer font-semibold">Cadastrar-se</button>
            </div>
        </header>
    );
}

export default MenuLanding;