import Logo from "/Logo-texto.svg"
import {useNavigate} from "react-router-dom"

const MenuLanding = () => {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navigate = useNavigate();

    return (
        <header className="w-full fixed flex flex-row justify-around bg-[#cacaca07] z-100 items-center backdrop-blur-lg text-white text-sm px-[10%] py-10">
            <div className="w-[30%] flex flex-row justify-start items-center">
                <img className="w-[34%]" src={Logo}></img>
            </div>
            <div className="w-[38%] flex flex-row justify-between list-none">
                <li className="cursor-pointer" onClick={() => handleScroll("funciona")}>Como Funciona</li>
                <li className="cursor-pointer" onClick={() => handleScroll("empresas")}>Para Empresas e Times</li>
                <li className="cursor-pointer" onClick={() => handleScroll("pronto")}>Junte-se a Nós</li>
            </div>
            <div className="w-[30%] flex flex-row justify-end items-center gap-4 ">
                <button onClick={() => navigate("/Login")} className=" cursor-pointer px-6 py-2 rounded-lg bg-[#1B1B1F] text-white border border-gray-600">Entrar</button>
                <button>Cadastrar-se</button>
            </div>
        </header>
    );
}

export default MenuLanding;