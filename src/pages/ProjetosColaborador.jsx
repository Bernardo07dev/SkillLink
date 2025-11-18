// PROJETOS COLABORADOR

import { useState, useEffect } from "react";
import Structure from '../components/Structure.jsx'
import axios from "axios";

const ProjetosColaborador = () => {
    const [user, setUser] = useState({})

    useEffect(() => {
        const GetUser = async () => {
            const res = await axios.get('users.json')
            const UserColab = res.data.find((user) => user.id == 1)
            setUser(UserColab)
        }

        GetUser();
    }, [])

    return(
        <Structure estado="projetos"></Structure>
    )
}

export default ProjetosColaborador;