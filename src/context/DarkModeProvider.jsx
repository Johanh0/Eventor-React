import { createContext, useState, useEffect } from 'react'

export const DarkModeContext = createContext();


const DarkModeProvider = ({ children }) => {

  // const [dataFetch, setDataFetch] = useState(null)

  // useEffect(() => {
  //   fetch(`${import.meta.env.VITE_API_URL}?client_id=${import.meta.env.VITE_CLIENT_ID}&per_page=12&geoip=true`)
  //     .then(response => response.json())
  //     .then(apiData => setDataFetch(apiData.events))
  //     .catch(error => console.error('There was a problem'))
  // },[])

  // useEffect(() => {
  //   fetch(`${import.meta.env.VITE_API_URL}?client_id=${import.meta.env.VITE_CLIENT_ID}&per_page=12&geoip=true`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // console.log(data.events);
  //       setDataFetch(data.events);
  //       console.log(dataFetch);
  //     })
  // }, []);

  // useEffect((event, state) => {
  //   fetch(`${import.meta.env.VITE_API_URL}?client_id=${import.meta.env.VITE_CLIENT_ID}&per_page=12&geoip=true`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data.events);
  //       setDataFetch(data.events);
  //     })
  // }, []);

  // useEffect For Bring The DarkMode Status In The LocalStorage
  useEffect(() => {
    const darkModeStatus = localStorage.getItem('darkModeStatus');
    if(darkModeStatus === 'true') {
      setDarkMode(true);
    } else if (darkModeStatus === 'false') {
      setDarkMode(false);
    }
  }, [])
  
  // useState For DarkMode
  const [darkMode, setDarkMode] = useState(localStorage.getItem(Boolean('darkModeStatus')));

  // useEffect For Update The DarkMode Status
  useEffect(() => {
    localStorage.setItem('darkModeStatus', darkMode);
  }, [darkMode]);


  return (
    <DarkModeContext.Provider value={{
      darkMode,
      setDarkMode
    }}>
      { children }
    </DarkModeContext.Provider>
  )
}

export default DarkModeProvider
