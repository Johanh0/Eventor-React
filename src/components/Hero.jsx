import React from 'react'
import Header from './Header'
import Search from './Search'
import { flowers, women } from '../assets'

const Hero = ({darkMode}) => {


  return (
    <div className={`relative z-0 flex justify-center items-center flex-col w-full h-[500px] ${darkMode ? `bg-primary-darkMode` : `bg-secondary-color`}`}>
      <Header darkMode={darkMode}/>
      <Search/>
      <img src={flowers} alt="" className='hidden md:block absolute top-0 left-0'/>
      <img src={women} alt="" className='hidden md:block absolute bottom-0 right-0'/>
    </div>
  )
}

export default Hero
