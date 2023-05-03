import React from 'react'
import ViewComp from '../components/VIewComp'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const view = () => {
  return (
    <>
      <NavBar/>
      <div className='w-100 h-20'></div>
      <ViewComp/>
      <Footer/>
    </>
  )
}

export default view