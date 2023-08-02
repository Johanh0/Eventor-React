import { useContext } from 'react'
import { DarkModeContext } from '../context/DarkModeProvider'
import Nav from './Nav'

const Header = () => {

  const { darkMode } = useContext(DarkModeContext);
  return (
    <section className='font-bold'>
      <div>
        <h1 className={`text-center text-4xl mt-2 mb-10 ${darkMode ? 'text-secondary-color' : ''}`}>Find The {''}
        <span className={darkMode ? 'text-white-color' : 'text-primary-color'}>Best Events In</span> {''}
        Your State
        </h1>
      </div>
    </section>
  )
}

export default Header
