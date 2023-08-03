import { useEffect, useContext } from 'react'
import { DarkModeContext } from '../context/DarkModeProvider'
import { MenuContext } from '../context/MenuProvider'
import { MdOutlineDarkMode, MdDarkMode, MdOutlineClose } from 'react-icons/md'
import { RiMenu3Fill } from 'react-icons/ri'

const Nav = () => {

  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const { menu, setMenu } = useContext(MenuContext);

    const handleDarkMode = () => {
        darkMode ? setDarkMode(false) : setDarkMode(true);
     }

    const handleMenu = () => {
      menu ? setMenu(false) : setMenu(true);
    }

  return (
    <div className='flex justify-end px-10 py-5 w-full gap-10 h-[30px] bg-transparent absolute z-20 top-0  text-3xl'>
      {darkMode ? <MdDarkMode className='text-primary-color cursor-pointer' onClick={handleDarkMode}/> : <MdOutlineDarkMode className='cursor-pointer' onClick={handleDarkMode}/>}
      {menu ? <MdOutlineClose className={darkMode ? 'text-primary-color cursor-pointer' : 'cursor-pointer'} onClick={handleMenu}/> : <RiMenu3Fill className={darkMode ? 'text-primary-color cursor-pointer' : 'cursor-pointer'} onClick={handleMenu}/>}
    </div>
  )
}

export default Nav
