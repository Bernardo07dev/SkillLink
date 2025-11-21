import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useState, useEffect} from "react"
import { faChartLine, faPeopleGroup, faDiagramProject, faGraduationCap, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserFace from "../assets/img/userface.png"

const SidebarMobile = (props) => {
    const navigate = useNavigate();

    return(
        <div className="w-full min-h-screen dark:bg-[#182832] bg-white flex flex-col py-22 items-center gap-2">
            <img className="w-8 rounded-lg mb-4" src={UserFace}></img>
            <FontAwesomeIcon onClick={() => navigate('/DashColaborador')}  className={`${props.estado == 'dash' ?  'dark:bg-[#174157] bg-[#D0EDFB]' : ''} text-xl text-gray-200 p-2 py-3 rounded-xl`} icon={faChartLine}></FontAwesomeIcon>
            <FontAwesomeIcon onClick={() => navigate('/TimesColaborador')} className={`${props.estado == 'times' ?  'dark:bg-[#174157] bg-[#D0EDFB]' : ''} text-xl text-gray-200 p-2 py-3 rounded-xl`} icon={faPeopleGroup}></FontAwesomeIcon>
            <FontAwesomeIcon onClick={() => navigate('/ProjetosColaborador')} className={`${props.estado == 'projetos' ?  'dark:bg-[#174157] bg-[#D0EDFB]' : ''} text-xl text-gray-200 p-2 py-3 rounded-xl`} icon={faDiagramProject}></FontAwesomeIcon>
            <FontAwesomeIcon onClick={() => navigate('/Cursos')} className={`${props.estado == 'cursos' ?  'dark:bg-[#174157] bg-[#D0EDFB]' : ''} text-xl text-gray-200 p-2 py-3 rounded-xl`} icon={faGraduationCap}></FontAwesomeIcon>

        </div>
    )
}

export default SidebarMobile;