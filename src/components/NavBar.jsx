import React from 'react'
import logo from '../assets/pokemon.png'
import {FaSearch} from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom'
import SearchBar from '../utils/SearchBar'
import { useState, useEffect } from 'react'

const NavBar = () => {
   const navigate = useNavigate()
   const location=useLocation()
   const currentView = location.pathname.split('/').pop();
   const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const changeNavBg = () => {
      if (window.scrollY >= 150) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };
    window.addEventListener('scroll', changeNavBg);
    return () => {
      window.removeEventListener('scroll', changeNavBg);
    };
  }, []);

  return (
    <div className={`w-[100vw] mb-2 z-30 ${navBg ? 'bg-white transition duration-1000' : 'bg-transparent transition duration-500'}`} style={{ position: 'fixed' }}>
  <div className='sm:w-[100vw] flex flex-row justify-between p-2 items-center text-yellow-400'>
        <img src={logo} alt="Pokemon" className='sm:w-auto sm:h-6 w-32 h-1/12 flex justify-center items-center bg-cover mb-2 sm:mb-0' onClick={ () => navigate('/')}/>
        <ul className='h-1/12 flex justify-end items-center space-x-12 font-bold text-sm sm:text-xs sm:space-x-6 tracking-wider'>
          <li className={currentView === '' ? 'text-black' : 'text-yellow-500'} onClick={ () => navigate('/')}>HOME</li>
          <li className={currentView === 'View' ? 'text-black' : 'text-yellow-500'} onClick={ () => navigate('/View')} >VIEW</li>
          {/* <li className={currentView === 'Favorite' ? 'text-black' : 'text-yellow-500'}  onClick={ () => navigate('/Favorite')}>FAVORITE</li> */}
        </ul>
        <div className="h-1/12 flex justify-center items-center pr-3">
          <div className={currentView === '' ? 'text-white' : 'text-black'}>
            <SearchBar></SearchBar>
          </div>
        </div>
      </div>
    </div>

  );
}

export default NavBar
