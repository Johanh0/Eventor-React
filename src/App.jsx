import { useContext } from 'react'
import { DarkModeContext } from './context/DarkModeProvider'
import { MenuContext } from './context/MenuProvider'
import Nav from "./components/Nav"
import Menu from './components/Menu'
import Hero from "./components/Hero"
import Main from "./components/Main"

function App() {

  const { darkMode } = useContext(DarkModeContext);
  const { menu } = useContext(MenuContext)

  return (
  <main 
    className={`${darkMode ? 'bg-primary-darkMode text-secondary-color' : 'text-primary-darkMode'} w-full h-screen ${menu ? 'overflow-hidden' : ''}`}>
    <Nav/>
    <Menu/>
    <Hero/>
    <Main/>
  </main>
  )
}

export default App
