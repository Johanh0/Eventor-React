import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import DarkModeProvider from './context/DarkModeProvider'
import MenuProvider from './context/MenuProvider'
import ApiProvider from './context/ApiProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiProvider>
      <DarkModeProvider>
        <MenuProvider>
          <App/>
        </MenuProvider>
      </DarkModeProvider>
    </ApiProvider>
  </React.StrictMode>,
)
