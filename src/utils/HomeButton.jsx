import React from 'react'
import'./HomeButton.css'
import { useNavigate } from 'react-router-dom'

const HomeButton = () => {
  const navigate = useNavigate();
  return (
    <div>
        <button onClick={ () => navigate('/View')}>
            Catch Them All
        </button>
    </div>
  )
}

export default HomeButton