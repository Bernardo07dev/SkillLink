import Logo from "/Logo-Skill.png"
import bgImage from './assets/img/bg-lg.png';

const Cadastro = () => {
    return (
        <main className="bg-[#000102] flex justify-start items-center relative">
            <div className="absolute inset-0 z-0">
                <img src={bgImage} className="absolute inset-0 object-cover w-full h-screen opacity-85" />
                <div className="absolute inset-0 bg-linear-to-b from-[#00000000] to-[#000101]"></div>
            </div>

            <section className="w-[50%] shadow-2xl shadow-[#2c2c2c3c] border border-gray-800 rounded-lg flex flex-col justify-center px-[10%] backdrop-blur-sm items-center bg-[#0e1a1fd0] z-2 text-center py-22 text-white">
                <img src={Logo} className="w-[17%] mb-4"></img>
                <h1 className="tracking-tighter text-3xl font-bold mb-2">Crie sua conta SkillLink</h1>
                <p className="text-gray-400 mb-2 text-sm">Crie sua conta SkillLink para continuar</p>
                <form className="flex flex-col py-4 gap-4 w-[90%]">
                    <p className="w-full text-sm text-left -mb-2 text-gray-300">Nome</p>
                    <input className="bg-[#ffffff0b] p-4 border border-gray-500 rounded-md" type="texto" placeholder="Insira seu Nome"></input>
                    <p className="w-full text-sm text-left -mb-2 text-gray-300">Idade</p>
                    <input className="bg-[#ffffff0b] text-white border border-gray-500 p-4 w-full rounded-md" type="date" placeholder="Insira sua Data de nscimento"></input>
                    <p className="w-full text-sm text-left -mb-2 text-gray-300">Area de Atuação</p>
                    <select className="bg-[#ffffff0b] border border-gray-500 p-4 w-full rounded-md" type="select" placeholder="Insira sua Data de nscimento">
                        <option className="text-black" value="apple">Desenvolvimento Web</option>
                        <option className="text-black" value="banana">UX/UI</option>
                        <option className="text-black" value="orange">Data Science</option>
                        <option className="text-black" value="grape" selected>DevOps</option>
                        <option className="text-black" value="grape" selected>Marketing</option>
                        <option className="text-black" value="grape" selected>IA/ML</option>
                        <option className="text-black" value="grape" selected>Outro</option>
                    </select>
                    <p className="w-full text-sm text-left -mb-2 text-gray-300">Email</p>
                    <input className="bg-[#ffffff0b] border border-gray-500 p-4 w-full rounded-md" type="email" placeholder="Insira seu E-mail"></input>
                    <p className="w-full text-sm text-left -mb-2 text-gray-300">Crie sua Senha</p>
                    <input className="bg-[#ffffff0b] border border-gray-500 p-4 w-full rounded-md" type="password" placeholder="Crie sua Senha"></input>
                    <p className="w-full text-sm text-left -mb-2 text-gray-300">Confirme sua Senha</p>
                    <input className="bg-[#ffffff0b] border border-gray-500 p-4 w-full rounded-md" type="password" placeholder="Confirme sua senha"></input>
                    <input type="submit" className="cursor-pointer py-4 shadow-lg shadow-[#38bff831] text-base rounded-md bg-[#38BDF8] text-black font-semibold" value="Criar Conta"/>
                </form>
                <p className="text-gray-400 text-sm mt-2">Já tem conta <a href="/Login" className="text-[#38BDF8] font-bold">Clique aqui e faça Login</a></p>
            </section>
        </main>
    )
}

export default Cadastro;