import { useContext } from 'react'
import { DarkModeContext } from '../context/DarkModeProvider'
import { MenuContext } from '../context/MenuProvider'
import { AiFillGithub } from 'react-icons/ai'
import { TbApi } from 'react-icons/tb'

const Menu = () => {

    const { darkMode } = useContext(DarkModeContext);
    const { menu } = useContext(MenuContext)

  return (
    <div className={`${menu ? 'fixed overflow-y-hidden' : 'hidden'} flex justify-evenly items-center top-0 left-0 z-10 w-full h-screen ${darkMode ? 'bg-primary-darkMode text-secondary-color' : 'bg-secondary-color'}`}>
      <div className='flex flex-col gap-5 w-1/2 text-center'>
        <h1 
        className='text-5xl font-bold uppercase'>
          Thanks For Visit {''}
          <span className={darkMode ? '' : 'text-primary-color'}>Eventor!</span>
          </h1>
          <p className={`text-sm ${darkMode ? '' : 'text-grey-color'}`}>Discover exciting events across the United States! Our website is your ultimate destination to find and explore a wide range of thrilling events, from vibrant festivals to mesmerizing concerts and beyond. Easily search events by state and category, and embark on unforgettable adventures across the nation!</p>

          <div className={`flex justify-center items-center gap-5 text-3xl mt-10 ${darkMode ? '' : 'text-grey-color'}`}>
            <a href="https://github.com/Johanh0/Eventor-React" target="_blank">
              <AiFillGithub/>
            </a>
            <a href="https://platform.seatgeek.com/" target="_blank">
              <TbApi/>
            </a>
          </div>
      </div>
    </div>
  )
}

export default Menu
