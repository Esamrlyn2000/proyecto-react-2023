import axios from "axios"
import { useEffect, useState } from "react"

const usePetition = (endponit) =>{
    const API_URL = import.meta.env.VITE_API_URL;

    const [data, setData] = useState()
    const [cargando, setCargando] = useState(false)

    useEffect(() => {
        setCargando(true)
        axios.get(`${API_URL}${endponit}`)
        .then(data =>{
            setData(data.data.data)
            setCargando(false)
        })        
        .catch(e => {
            console.error(e)
            setCargando(false)
        })
    },[])

    return [data, cargando];
}

export default usePetition;