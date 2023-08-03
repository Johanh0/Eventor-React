import { useContext } from 'react'
import { DarkModeContext } from '../context/DarkModeProvider'
import { MenuContext } from '../context/MenuProvider'

const Menu = () => {

    const { darkMode } = useContext(DarkModeContext);
    const { menu } = useContext(MenuContext)

  return (
    <div className={`${menu ? 'absolute' : 'hidden'} top-0 left-0 z-10 w-full h-screen ${darkMode ? 'bg-primary-darkMode' : 'bg-secondary-color'}`}>
      
    </div>
  )
}

export default Menu
