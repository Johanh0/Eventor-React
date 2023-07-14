import React from 'react'
import Header from './Header'
import Search from './Search'
import { flowers, women } from '../assets'

const Hero = () => {
  return (
    <div className='relative flex justify-center items-center flex-col w-full h-[500px] bg-secondary-color'>
        <Header/>
        <Search/>
        <img src={flowers} alt="" className='absolute top-0 left-0'/>
        <img src={women} alt="" className='absolute bottom-0 right-0'/>
    </div>
  )
}

export default Hero
