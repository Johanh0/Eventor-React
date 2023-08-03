import { createContext, useState } from 'react'

export const MenuContext = createContext();

const MenuProvider = ({ children }) => {

    const [menu, setMenu] = useState(false);

  return (
    <MenuContext.Provider value={{
        menu,
        setMenu
    }}>
      { children }
    </MenuContext.Provider>
  )
}

export default MenuProvider
