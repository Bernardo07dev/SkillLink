import Logo from "/Logo-Skill.png"
import bgImage from './assets/img/bg-lg.png';
import axios from 'axios';
import { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    const SubmitLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.get('/users.json')
            const users = res.data;

            const userFound = users.find((user) => user.email === email && user.senha === senha);
            console.log(userFound)

            if (!userFound){
                console.log("Erro")
            }

            if (userFound.papelEquipe === "lider") {
                console.log("navegar lider");
            } else if (userFound.papelEquipe === "colaborador") {
                console.log("navegar colaborador");
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main className="bg-[#000102] flex justify-center items-center h-screen">
            <div className="absolute inset-0 z-0">
                <img src={bgImage} className="absolute inset-0 w-full h-screen opacity-75" />
                <div className="absolute inset-0 bg-linear-to-b from-[#00000000] to-[#00000074]"></div>
            </div>

            <section className="w-[30%] shadow-2xl shadow-[#2c2c2c3c] border border-gray-800 rounded-lg flex flex-col justify-center px-6 backdrop-blur-sm items-center bg-[#0e1a1fd0] z-2 text-center py-12 text-white">
                <img src={Logo} className="w-[17%] mb-4"></img>
                <h1 className="tracking-tighter text-2xl font-bold mb-2">Bem-Vindo de volta</h1>
                <p className="text-gray-400 mb-2 text-sm">Faça login na sua conta SkillLink para continuar</p>
                <form onSubmit={SubmitLogin} className="flex flex-col py-4 gap-4 w-[90%]">
                    <input onChange={(e) => setEmail(e.target.value)} value={email} className="bg-[#ffffff0b] p-4 border border-gray-500 rounded-md" type="email" placeholder="Insira seu E-mail"></input>
                    <input onChange={(e) => setSenha(e.target.value)} value={senha} className="bg-[#ffffff0b] border border-gray-500 p-4 w-full rounded-md" type="senha" placeholder="Insira sua Senha"></input>
                    <input type="submit"className="cursor-pointer py-3 shadow-lg shadow-[#38bff831] text-base rounded-md bg-[#38BDF8] text-black font-semibold" value="Entrar"/>
                </form>
                <p className="text-gray-400 text-sm mt-2">Novo por aqui? <a href="/Cadastro" className="text-[#38BDF8] font-bold">Clique aqui e faça seu cadastro</a></p>
            </section>
        </main>
    )
}

export default Login;