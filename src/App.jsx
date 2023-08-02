import { useState, useEffect } from 'react'
import Hero from "./components/Hero"
import Main from "./components/Main"
import Nav from "./components/Nav"

function App() {

  useEffect(() => {
    const darkModeStatus = localStorage.getItem('darkModeStatus');
    if(darkModeStatus === 'true') {
      setDarkMode(true);
    } else if (darkModeStatus === 'false') {
      setDarkMode(false);
    }
  }, [])
  
  const [darkMode, setDarkMode] = useState(localStorage.getItem(Boolean('darkModeStatus')));

  useEffect(() => {
    localStorage.setItem('darkModeStatus', darkMode);
  }, [darkMode]);

  return (
    <main className={darkMode ? 'bg-primary-darkMode' : 'bg-white-color'}>
      <Nav darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Hero darkMode={darkMode}/>
      <Main darkMode={darkMode}/>
    </main>
  )
}

export default App
