import { useState } from "react";
import Logo from "/Logo-texto.svg";
import { useNavigate } from "react-router-dom";

const MenuLanding = () => {
    const [open, setOpen] = useState(false);

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setOpen(false); // fecha menu no mobile
        }
    };

    const navigate = useNavigate();

    return (
        <>
            {/* HEADER */}
            <header className="w-full fixed top-0 left-0 z-[100] bg-[#cacaca07] backdrop-blur-lg 
                flex items-center justify-between 
                text-white text-sm px-[10%] py-10 max-md:px-6 max-md:py-4">

                {/* LOGO */}
                <div className="flex items-center w-[30%] max-md:w-auto">
                    <img className="w-[34%] max-md:w-24" src={Logo} />
                </div>

                {/* MENU DESKTOP */}
                <div className="w-[38%] flex justify-between list-none max-md:hidden">
                    <li className="cursor-pointer" onClick={() => handleScroll("funciona")}>Como Funciona</li>
                    <li className="cursor-pointer" onClick={() => handleScroll("empresas")}>Para Empresas e Times</li>
                    <li className="cursor-pointer" onClick={() => handleScroll("pronto")}>Junte-se a Nós</li>
                </div>

                {/* BOTOES DESKTOP */}
                <div className="w-[30%] flex justify-end items-center gap-4 max-md:hidden">
                    <button
                        onClick={() => navigate("/Login")}
                        className="cursor-pointer px-6 py-2 rounded-lg bg-[#1B1B1F] text-white border border-gray-600"
                    >
                        Entrar
                    </button>

                    <button className="cursor-pointer px-6 py-2 rounded-lg bg-white text-black">
                        Cadastrar-se
                    </button>
                </div>

                {/* BOTÃO HAMBURGUER (MOBILE) */}
                <button 
                    className="hidden max-md:flex text-3xl"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </header>

            {/* MENU MOBILE */}
            {open && (
                <div className="fixed top-24 left-0 w-full bg-[#000000e6] backdrop-blur-lg 
                    flex flex-col items-center gap-6 py-10 text-white text-base md:hidden z-[99]">

                    <li className="cursor-pointer" onClick={() => handleScroll("funciona")}>
                        Como Funciona
                    </li>

                    <li className="cursor-pointer" onClick={() => handleScroll("empresas")}>
                        Para Empresas e Times
                    </li>

                    <li className="cursor-pointer" onClick={() => handleScroll("pronto")}>
                        Junte-se a Nós
                    </li>

                    <button
                        onClick={() => { navigate("/Login"); setOpen(false); }}
                        className="cursor-pointer px-6 py-2 rounded-lg bg-[#1B1B1F] text-white border border-gray-600"
                    >
                        Entrar
                    </button>

                    <button className="cursor-pointer px-6 py-2 rounded-lg bg-white text-black">
                        Cadastrar-se
                    </button>
                </div>
            )}
        </>
    );
};

export default MenuLanding;
