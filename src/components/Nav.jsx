import React from 'react'
import { MdOutlineDarkMode, MdDarkMode } from 'react-icons/md'

const Nav = ({darkMode, setDarkMode}) => {

    const handleDarkMode = () => {
        if(darkMode) {
            setDarkMode(false);
        } else {
            setDarkMode(true);
        }
    }

  return (
    <div className='flex justify-end p-5 w-full h-[30px] bg-transparent absolute z-10 top-0 cursor-pointer text-2xl' onClick={handleDarkMode}>
      {darkMode ? <MdDarkMode className='text-primary-color'/> : <MdOutlineDarkMode/>}
    </div>
  )
}

export default Nav
