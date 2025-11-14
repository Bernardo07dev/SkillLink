import Logo from "/Logo-Skill.png"

const MenuLanding = () => {
    return (
        <header className="w-full flex flex-row justify-around bg-[#cacaca07] items-center backdrop-blur-2xl text-white text-sm px-32 py-6">
            <div className="w-[30%] flex flex-row justify-start items-center">
                <img className="w-[15%]" src={Logo}></img>
                </div>
            <div className="w-[38%] flex flex-row justify-between list-none">
                <li>Como Funciona</li>
                <li>Para Empresas e Times</li>
                <li>Junte-se a Nós</li>
            </div>
            <div className="w-[30%] flex flex-row justify-end items-center gap-4 ">
                <button className="px-4 py-2 rounded-lg text-gray-800 bg-white">Entrar</button>
                <button>Cadastrar-se</button>
            </div>
        </header>
    );
}

export default MenuLanding;