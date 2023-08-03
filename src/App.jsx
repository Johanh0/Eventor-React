import { useContext } from 'react'
import MenuProvider from './context/MenuProvider'
import DarkModeProvider from './context/DarkModeProvider'
import ApiProvider from './context/ApiProvider'
import Nav from "./components/Nav"
import Menu from './components/Menu'
import Hero from "./components/Hero"
import Main from "./components/Main"

function App() {

  return (
    <ApiProvider>
      <DarkModeProvider>
        <main>
          <MenuProvider>
            <Nav/>
            <Menu/>
          </MenuProvider>
          <Hero/>
          <Main/>
        </main>
      </DarkModeProvider>
    </ApiProvider>
  )
}

export default App
