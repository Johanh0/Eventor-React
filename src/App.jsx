import { useContext } from 'react'
import DarkModeProvider from './context/DarkModeProvider'
import ApiProvider from './context/ApiProvider'
import Hero from "./components/Hero"
import Main from "./components/Main"
import Nav from "./components/Nav"

function App() {

  return (
    <ApiProvider>
      <DarkModeProvider>
        <main>
          <Nav/>
          <Hero/>
          <Main/>
        </main>
      </DarkModeProvider>
    </ApiProvider>
  )
}

export default App
