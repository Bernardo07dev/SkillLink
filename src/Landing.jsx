import MenuLanding from "./components/MenuLanding"
import { faMap, faPeopleGroup, faArrowUpRightDots, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import team from '/team.jpg'
import Logo from "/Logo-texto.svg"

const Landing = () => {
  return (
    <main className="bg-[#000102] text-white">
        <div className="absolute inset-0 z-0">
            <img src="/Bg-centro.png" className="absolute inset-0 w-full h-screen opacity-70" />
            <div className="absolute inset-0 bg-linear-to-b from-[#0000009b] to-[#000000]"></div>
        </div>

        <MenuLanding></MenuLanding>

        <section className="z-10 relative text-center py-[12%] flex flex-col justify-center items-center">
            <h1 className="text-5xl mt-22 w-[60%] tracking-tighter">Conecte talentos. Requalifique pessoas. <strong>Transforme o trabalho.</strong></h1>
            <p className="w-[40%] mt-6 text-gray-300">O SkillLink é uma plataforma inteligente que forma equipes de alta performance com base em habilidades reais.</p>
            <button className="mt-4 px-8 py-4 rounded-xl backdrop-blur-lg cursor-pointer bg-[#38BDF8] text-black font-semibold">Mude sua equipe conosco</button>
        </section>

        <section className="px-[14%] py-22 bg-[#000102] flex flex-col justify-center items-center">
            <h3 className="text-[#38BDF8] text-center font-bold mb-2">Como Funciona</h3>
            <h1 className="text-center tracking-light font-bold text-4xl leading-tigh mx-32">Um processo simplificado para construir equipes de alto impacto</h1>
            <p className=" mt-6 text-gray-300 text-center text-base mx-22 mb-8">Nossa plataforma intuitiva guia você desde o mapeamento de competências até a formação de equipes otimizadas, identificando oportunidades de crescimento ao longo do caminho.</p>
            <div className="flex flex-row py-6">
                <div className="rounded-l-lg px-10 py-10 bg-linear-to-l border-r border-gray-800 from-[#050f13] to-[#0e1a1e]">
                    <FontAwesomeIcon className="bg-[#0F2A36] text-3xl rounded-full mb-2 px-3 py-4 text-[#38BDF8]" icon={faMap}></FontAwesomeIcon>
                    <h2 className="text-md font-semibold">Mapeie Competências</h2>
                    <p className="text-sm text-gray-300">Visualize o conjunto de habilidades da sua organização com clareza.</p>
                </div>
                <div className="px-10 py-10 bg-linear-to-l border-r border-gray-800 from-[#050f13] to-[#0e1a1e]">
                    <FontAwesomeIcon className="bg-[#0F2A36] text-3xl rounded-full mb-2 px-3 py-4 text-[#38BDF8]" icon={faSearchengin}></FontAwesomeIcon>
                    <h2 className="text-md font-semibold">Encontre Especialistas</h2>
                    <p className="text-sm text-gray-300">Localize rapidamente os colaboradores ideais para qualquer desafio.</p>
                </div>
                <div className="px-10 py-10 bg-linear-to-l border-r border-gray-800 from-[#050f13] to-[#0e1a1e]">
                    <FontAwesomeIcon className="bg-[#0F2A36] text-3xl rounded-full mb-2 px-3 py-4 text-[#38BDF8]" icon={faPeopleGroup}></FontAwesomeIcon>
                    <h2 className="text-md font-semibold">Construa Times</h2>
                    <p className="text-sm text-gray-300">Monte equipes sinérgicas com base em dados para acelerar projetos.</p>
                </div>
                <div className="rounded-r-lg p-10 bg-linear-to-l from-[#050f13] to-[#0e1a1e]">
                    <FontAwesomeIcon className="bg-[#0F2A36] text-3xl rounded-full mb-2 px-3 py-4 text-[#38BDF8]" icon={faArrowUpRightDots}></FontAwesomeIcon>
                    <h2 className="text-md font-semibold">Identifique Gaps</h2>
                    <p className="text-sm text-gray-300">Descubra as necessidades de treinamento e promova o reskilling.</p>
                </div>
            </div>
        </section>

        <section className="px-[14%] gap-8 py-22 bg-[#000102] flex flex-row justify-center items-center">
            <div className="w-[50%] flex flex-col">
                <h3 className="text-[#38BDF8] font-bold mb-2 text-left">Para empresas e times</h3>
                <h1 className="tracking-light font-bold text-4xl mb-2 leading-tigh text-left">Um processo simplificado para construir equipes de alto impacto</h1>
                <p class="text-sm mb-6">SkillLink oferece as ferramentas que você precisa para tomar decisões estratégicas de pessoal, acelerar a entrega de projetos e cultivar uma cultura de aprendizado contínuo.</p>
                <div className="flex flex-row gap-2 mb-2">
                    <FontAwesomeIcon className="bg-[#0F2A36] text-md rounded-full mb-2 p-2 text-[#38BDF8]" icon={faCheck}></FontAwesomeIcon>
                    <p>Acelere projetos alocando o talento certo na hora certa.</p>
                </div>
                <div className="flex flex-row gap-2 mb-2">
                    <FontAwesomeIcon className="bg-[#0F2A36] text-md rounded-full mb-2 p-2 text-[#38BDF8]" icon={faCheck}></FontAwesomeIcon>
                    <p>Tome decisões de reskilling e upskilling baseadas em dados.</p>
                </div>
                <div className="flex flex-row gap-2 mb-2">
                    <FontAwesomeIcon className="bg-[#0F2A36] text-md rounded-full mb-2 p-2 text-[#38BDF8]" icon={faCheck}></FontAwesomeIcon>
                    <p>Aumente o engajamento conectando colaboradores a oportunidades.</p>
                </div>
            </div>
            <div className="w-[50%]">
                <img src={team} className="w-full rounded-md"></img>
            </div>
        </section>

        <section className="py-16 bg-[#000102] flex flex-col justify-center items-center pb-32">
            <div class="border border-[#182534] w-[70%] flex flex-col justify-center items-center p-16 relative rounded-xl overflow-hidden bg-linear-to-r from-[#090712] via-[#041E23] to-[#090712]">               
                    <h2 class="text-white text-3xl font-bold mb-2">Pronto para construir sua equipe de alta performance?</h2>
                    <p class="text-gray-300 text-base text-center mx-42">
                    Comece hoje a mapear as habilidades da sua organização e desbloqueie todo o seu potencial com SkillLink.
                    </p>
                    <button class="mt-4 px-8 py-4 rounded-xl backdrop-blur-lg cursor-pointer bg-[#38BDF8] text-black font-semibold">
                    Começar Agora
                    </button>
            </div>
        </section>

        <footer className="bg-[#000102] flex flex-row justify-between px-[15%] border-t border-gray-800 py-12 items-center">
            <div className="flex flex-row w-[50%] justify-start items-center">
                <img className="w-[20%]" src={Logo}></img>
            </div>
            <div className="text-sm flex flex-row w-[50%] list-none justify-end gap-4">
                <li>Como Funciona</li>
                <li>Para Empresas e Times</li>
                <li>Junte-se a Nós</li>
            </div>
        </footer>

    </main>
  )
}

export default Landing;