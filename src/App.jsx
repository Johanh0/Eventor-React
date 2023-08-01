import { useState } from 'react'
import Hero from "./components/Hero"
import Main from "./components/Main"
import Nav from "./components/Nav"

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className={darkMode ? 'bg-secondary-darkMode' : 'bg-white-color'}>
      <Nav darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Hero darkMode={darkMode}/>
      <Main darkMode={darkMode}/>
    </main>
  )
}

export default App
