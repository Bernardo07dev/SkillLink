import Logo from "/Logo-Skill.png"
import bgImage from 'src/assets/img/bg-lg.png';

const Login = () => {
    return (
        <main className="bg-[#000102] flex justify-center items-center h-screen">
            <div className="absolute inset-0 z-0">
                <img src={bgImage} className="absolute inset-0 w-full h-screen opacity-75" />
                <div className="absolute inset-0 bg-linear-to-b from-[#00000000] to-[#00000074]"></div>
            </div>

            <section className="w-[30%] shadow-2xl shadow-[#2c2c2c3c] border border-gray-800 rounded-lg flex flex-col justify-center px-6 backdrop-blur-sm items-center bg-[#0e1a1fd0] z-2 text-center py-12 text-white">
                <img src={Logo} className="w-[17%] mb-4"></img>
                <h1 className="tracking-tighter text-3xl font-bold">Bem-Vindo de volta</h1>
                <p className="text-gray-400 mb-2 text-base">Faça login na sua conta SkillLink para continuar</p>
                <form className="flex flex-col py-4 gap-4 w-[90%]">
                    <input className="bg-[#ffffff0b] p-4 border border-gray-500 rounded-md" type="email" placeholder="Insira seu E-mail"></input>
                    <input className="bg-[#ffffff0b] border border-gray-500 p-4 w-full rounded-md" type="senha" placeholder="Insira sua Senha"></input>
                    <button className="cursor-pointer py-3 shadow-lg shadow-[#38bff879] text-base rounded-md bg-[#38BDF8] text-black font-semibold">Entrar</button>
                </form>
                <p className="text-gray-400 text-sm mt-2">Novo por aqui? <strong>Clique aqui e faça seu cadastro</strong></p>
            </section>
        </main>
    )
}

export default Login;