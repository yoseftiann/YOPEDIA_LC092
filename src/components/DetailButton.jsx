import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { useEffect } from 'react'

const DetailButton = () => {
    const {id} = useParams()
    const [getId, setId] = useState(parseInt(id))
    const navigate = useNavigate()

    // ngeload setiap kali ada perubahan di params
    useEffect(() => {
        setId(parseInt(id));
        window.scrollTo(0, 0);
    }, [id]);
    
    const handleNextChange = () => {
        console.log("next dibawah ini")
        const newId = getId+1
        setId(newId);
        navigate(`/Detail/${newId}`);
    }

    const handlePrevChange = () => {
        const newId = getId-1
        if(newId >= 1){
            setId(newId);
            navigate(`/Detail/${newId}`);
        }else{
            alert("ID can't be lower than 1")
        }
    }

    return(
        <div className='w-full flex flex-row justify-between sm:text-center'>
            <button onClick={handlePrevChange} className='border-2 font-bold rounded w-15%' style={{color: 'black'}}>PREV</button>
            <button onClick={handleNextChange} className='border-2 font-bold rounded w-15%' style={{color: 'black'}}>NEXT</button>
        </div>

    )
}

export default DetailButton